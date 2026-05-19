import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

const LOG_NAMESPACE = "[contact-api]";

type ContactApiResponse = {
  error?: string;
  requestId: string;
  success?: boolean;
};

type ResendErrorMeta = {
  message?: string;
  name?: string;
  statusCode?: number;
};

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  company: z.string().trim().max(180).optional().default(""),
  message: z.string().trim().min(20).max(4000),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderEmailTemplate(input: z.infer<typeof contactSchema>) {
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeCompany = escapeHtml(input.company || "Not provided");
  const safeMessage = escapeHtml(input.message).replace(/\n/g, "<br />");

  return `
  <div style="font-family: Inter, Arial, sans-serif; color: #F5F7FA; background: #0B0F14; padding: 28px;">
    <div style="max-width: 680px; margin: 0 auto; border: 1px solid rgba(245,247,250,0.18); border-radius: 16px; background: rgba(17,24,39,0.85); overflow: hidden;">
      <div style="padding: 20px 24px; border-bottom: 1px solid rgba(245,247,250,0.12);">
        <p style="margin: 0; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: #C6A96B;">NOETRA STRATEGIES</p>
        <h2 style="margin: 10px 0 0; font-size: 24px; line-height: 1.2; color: #F5F7FA;">New Strategic Consultation Request</h2>
      </div>

      <div style="padding: 22px 24px;">
        <table style="width: 100%; border-collapse: collapse; color: #F5F7FA;">
          <tr>
            <td style="padding: 10px 0; width: 180px; font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: rgba(245,247,250,.65);">Name</td>
            <td style="padding: 10px 0; font-size: 14px;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; width: 180px; font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: rgba(245,247,250,.65);">Email</td>
            <td style="padding: 10px 0; font-size: 14px;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; width: 180px; font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: rgba(245,247,250,.65);">Organization</td>
            <td style="padding: 10px 0; font-size: 14px;">${safeCompany}</td>
          </tr>
        </table>

        <div style="margin-top: 14px; border: 1px solid rgba(245,247,250,.14); border-radius: 12px; padding: 14px; background: rgba(11,15,20,.6);">
          <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: rgba(245,247,250,.65);">Message</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.7; color: rgba(245,247,250,.88);">${safeMessage}</p>
        </div>
      </div>
    </div>
  </div>
  `;
}

function maskEmail(value: string) {
  const [localPart, domain] = value.split("@");

  if (!localPart || !domain) {
    return "invalid-email";
  }

  return `${localPart.slice(0, 2)}***@${domain}`;
}

function serializeError(error: unknown) {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
  }

  if (typeof error === "object" && error !== null) {
    try {
      return JSON.parse(JSON.stringify(error));
    } catch {
      return { value: String(error) };
    }
  }

  return { value: String(error) };
}

function getResendErrorMeta(error: unknown): ResendErrorMeta {
  if (typeof error !== "object" || error === null) {
    return {};
  }

  const candidate = error as Record<string, unknown>;

  return {
    message: typeof candidate.message === "string" ? candidate.message : undefined,
    name: typeof candidate.name === "string" ? candidate.name : undefined,
    statusCode:
      typeof candidate.statusCode === "number" ? candidate.statusCode : undefined,
  };
}

function isSenderForbidden(error: unknown) {
  const meta = getResendErrorMeta(error);
  return meta.statusCode === 403;
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID();
  const logPrefix = `${LOG_NAMESPACE}[${requestId}]`;
  const resendApiKey = process.env.RESEND_API_KEY;
  const destinationEmail = process.env.CONTACT_EMAIL || siteConfig.emails.advisory;
  const primarySenderEmail =
    process.env.RESEND_FROM_EMAIL || "NOETRA STRATEGIES <noreply@noetra.it>";
  const fallbackSenderEmail = "NOETRA STRATEGIES <onboarding@resend.dev>";

  console.info(`${logPrefix} Incoming request`, {
    method: request.method,
    path: request.nextUrl.pathname,
  });

  if (!resendApiKey) {
    console.error(`${logPrefix} Missing RESEND_API_KEY`);

    return NextResponse.json(
      { error: "Email service is not configured.", requestId } satisfies ContactApiResponse,
      { status: 500 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    console.error(`${logPrefix} Invalid JSON payload`, serializeError(error));

    return NextResponse.json(
      { error: "Invalid request payload.", requestId } satisfies ContactApiResponse,
      { status: 400 },
    );
  }

  const payloadRecord =
    typeof payload === "object" && payload !== null
      ? (payload as Record<string, unknown>)
      : undefined;

  console.info(`${logPrefix} Payload received`, {
    hasCompany: Boolean(payloadRecord?.company),
    hasEmail: typeof payloadRecord?.email === "string",
    hasName: typeof payloadRecord?.name === "string",
    messageLength:
      typeof payloadRecord?.message === "string" ? payloadRecord.message.length : 0,
  });

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    console.warn(`${logPrefix} Validation failed`, parsed.error.flatten().fieldErrors);

    return NextResponse.json(
      {
        error: "Validation failed.",
        requestId,
      },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);
  const { name, email, company, message } = parsed.data;

  const buildPayload = (from: string) => ({
    from,
    to: [destinationEmail],
    replyTo: email,
    subject: `Strategic Consultation Request - ${name}`,
    html: renderEmailTemplate({ name, email, company, message }),
    text: `New advisory request\n\nName: ${name}\nEmail: ${email}\nOrganization: ${company || "Not provided"}\n\nMessage:\n${message}`,
  });

  console.info(`${logPrefix} Dispatching email`, {
    from: primarySenderEmail,
    hasCompany: Boolean(company),
    messageLength: message.length,
    replyTo: maskEmail(email),
    to: maskEmail(destinationEmail),
  });

  try {
    let result = await resend.emails.send(buildPayload(primarySenderEmail));

    if (result.error && primarySenderEmail !== fallbackSenderEmail && isSenderForbidden(result.error)) {
      console.warn(`${logPrefix} Primary sender rejected with 403, retrying fallback sender`, {
        fallbackFrom: fallbackSenderEmail,
        primaryFrom: primarySenderEmail,
        resendError: serializeError(result.error),
      });

      result = await resend.emails.send(buildPayload(fallbackSenderEmail));
    }

    if (result.error) {
      console.error(`${logPrefix} Resend rejected request`, {
        attemptedFrom:
          primarySenderEmail === fallbackSenderEmail
            ? [primarySenderEmail]
            : [primarySenderEmail, fallbackSenderEmail],
        resendError: serializeError(result.error),
      });

      return NextResponse.json(
        { error: "Unable to send inquiry at this time.", requestId } satisfies ContactApiResponse,
        { status: 502 },
      );
    }

    console.info(`${logPrefix} Email sent`, {
      resendId: result.data?.id ?? null,
      to: maskEmail(destinationEmail),
    });

    return NextResponse.json({ requestId, success: true } satisfies ContactApiResponse);
  } catch (error) {
    console.error(`${logPrefix} Resend runtime error`, serializeError(error));

    return NextResponse.json(
      { error: "Unable to send inquiry at this time.", requestId } satisfies ContactApiResponse,
      { status: 502 },
    );
  }
}
