"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, Sparkles, Zap } from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale, withLocalePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type InquiryFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: InquiryFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

type FormState = "idle" | "loading" | "success" | "error";

type ContactApiResponse = {
  error?: string;
  requestId?: string;
  success?: boolean;
};

type ContactSectionProps = {
  locale: Locale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const messages = getMessages(locale).sections.contact;
  const inquiryChannels = [
    { label: messages.emails.info, value: siteConfig.emails.info },
    { label: messages.emails.advisory, value: siteConfig.emails.advisory },
    { label: messages.emails.contact, value: siteConfig.emails.contact },
  ];
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const isLoading = formState === "loading";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (formState === "success" || formState === "error") {
      setFormState("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormState("loading");
    setFeedback("");

    const endpoint = "/api/contact";
    const startedAt = Date.now();
    let requestId: string | undefined;

    console.info("[contact-form] submit:start", {
      endpoint,
      locale,
      hasCompany: Boolean(formData.company.trim()),
      messageLength: formData.message.length,
      nameLength: formData.name.length,
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-store",
        credentials: "same-origin",
        body: JSON.stringify(formData),
      });

      const rawResponse = await response.text();
      const contentType = response.headers.get("content-type") ?? "unknown";

      let payload: ContactApiResponse | undefined;

      if (rawResponse.length > 0) {
        try {
          payload = JSON.parse(rawResponse) as ContactApiResponse;
        } catch (parseError) {
          console.error("[contact-form] submit:parse-error", {
            contentType,
            parseError,
            rawPreview: rawResponse.slice(0, 200),
          });
        }
      }

      requestId = payload?.requestId;

      console.info("[contact-form] submit:response", {
        contentType,
        durationMs: Date.now() - startedAt,
        ok: response.ok,
        requestId,
        status: response.status,
      });

      if (!response.ok) {
        throw new Error(payload?.error || `Request failed with status ${response.status}`);
      }

      if (!payload?.success) {
        throw new Error(messages.form.error);
      }

      setFormState("success");
      setFeedback(messages.form.success);
      setFormData(initialFormData);

      console.info("[contact-form] submit:success", {
        durationMs: Date.now() - startedAt,
        requestId,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : messages.form.error;
      const feedbackMessage = requestId ? `${message} (Ref: ${requestId})` : message;

      console.error("[contact-form] submit:error", {
        durationMs: Date.now() - startedAt,
        endpoint,
        error,
        requestId,
      });

      setFormState("error");
      setFeedback(feedbackMessage);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[linear-gradient(145deg,#0A0E13_0%,#111827_100%)] py-24 sm:py-28"
    >
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <div className="orb-drift pointer-events-none absolute -left-12 top-20 h-36 w-36 rounded-full bg-[#C6A96B]/12 blur-[70px]" />
      <Container className="space-y-12">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-[#C6A96B]/35 p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A96B]">{messages.boxEyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold text-[#F5F7FA]">
                {messages.boxTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/75">
                {messages.boxDescription}
              </p>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/62">
                {messages.boxBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#4DA3FF]">
                  {messages.channelsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {inquiryChannels.map((channel) => (
                    <a
                      key={channel.value}
                      href={`mailto:${channel.value}`}
                      className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.08em] text-[#F5F7FA]/75 transition hover:border-[#4DA3FF]/45 hover:text-white"
                    >
                      <span className="text-[#C6A96B]">{channel.label}</span>
                      <span className="mx-1 text-[#F5F7FA]/45">|</span>
                      <span>{channel.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <Button href={withLocalePath(locale, "/contact")} variant="outline" size="md">
                  <CalendarCheck2 size={16} />
                  {messages.boxCta}
                </Button>
              </div>
            </Card>

            <Card className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(77,163,255,0.18),transparent_55%)]" />
              <div className="relative flex h-56 flex-col justify-between bg-[linear-gradient(130deg,rgba(77,163,255,0.2),rgba(198,169,107,0.12),rgba(11,15,20,0.85))] p-6">
                <div className="hero-grid absolute inset-0 opacity-20" />
                <p className="relative text-xs uppercase tracking-[0.22em] text-[#F5F7FA]/72">
                  {messages.panelLabel}
                </p>
                <div className="relative inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-[#0B0F14]/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#F5F7FA]/72">
                  <Zap size={12} className="text-[#4DA3FF]" />
                  {messages.panelBadge}
                </div>

                <p className="relative text-xs leading-6 text-[#F5F7FA]/65">
                  {messages.panelMicrocopy}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <Card className="p-7 sm:p-8">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  {messages.form.name}
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder={messages.form.namePlaceholder}
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  {messages.form.email}
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder={messages.form.emailPlaceholder}
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  {messages.form.company}
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder={messages.form.companyPlaceholder}
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  {messages.form.message}
                  <textarea
                    name="message"
                    required
                    rows={5}
                    minLength={20}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 py-3 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder={messages.form.messagePlaceholder}
                  />
                </label>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/62">
                  <Sparkles size={14} className="mr-2 inline text-[#C6A96B]" />
                  {messages.form.microcopy}
                </div>

                {feedback ? (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm leading-7 ${
                      formState === "success"
                        ? "border-[#4DA3FF]/45 bg-[#4DA3FF]/10 text-[#9DCCFF]"
                        : "border-[#C6A96B]/45 bg-[#C6A96B]/10 text-[#F5F7FA]/82"
                    }`}
                    role="status"
                  >
                    {feedback}
                  </div>
                ) : null}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? messages.form.loading : messages.form.submit}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
