import Link from "next/link";

import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { getMessages, type Locale, withLocalePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

import { Container } from "./Container";

const footerLinks = [
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "innovation", path: "/innovation" },
  { key: "network", path: "/network" },
  { key: "contact", path: "/contact" },
  { key: "privacy", path: "/privacy" },
  { key: "cookiePolicy", path: "/cookie-policy" },
  { key: "legal", path: "/legal" },
];

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const messages = getMessages(locale);
  const emailLinks = [
    { label: messages.footer.emails.info, value: siteConfig.emails.info },
    { label: messages.footer.emails.advisory, value: siteConfig.emails.advisory },
    { label: messages.footer.emails.contact, value: siteConfig.emails.contact },
  ];

  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0A0E13] py-10 text-[#F5F7FA]/65">
      <Container className="space-y-7">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#F5F7FA]">
              {messages.footer.company}
            </p>
            <p className="text-sm text-[#F5F7FA]/70">{messages.footer.descriptor}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#F5F7FA]/55">
              {messages.footer.country}
            </p>
          </div>

          <nav className="flex flex-wrap gap-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.key}
                href={withLocalePath(locale, link.path)}
                className="min-w-0 rounded-full border border-white/12 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/70 transition hover:border-[#4DA3FF]/45 hover:text-[#F5F7FA]"
              >
                {messages.footer.links[link.key as keyof typeof messages.footer.links]}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/45">
          {messages.footer.tagline}
        </p>

        <div className="grid gap-5 border-t border-white/10 pt-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C6A96B]">
              {messages.footer.channelsLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {emailLinks.map((item) => (
                <Link
                  key={item.value}
                  href={`mailto:${item.value}`}
                  className="inline-flex w-full min-w-0 flex-wrap items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-3 py-2 text-xs tracking-[0.08em] text-[#F5F7FA]/75 transition hover:border-[#4DA3FF]/45 hover:text-white sm:w-auto sm:flex-nowrap sm:rounded-full sm:py-1.5"
                >
                  <span className="text-[#C6A96B]">{item.label}</span>
                  <span className="break-all">{item.value}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#4DA3FF]">
              {messages.footer.domainsLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.domains.noetralex.map((domain) => (
                <Link
                  key={domain}
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#4DA3FF]/28 bg-[#4DA3FF]/10 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/80 transition hover:border-[#4DA3FF]/55 hover:text-white"
                >
                  {domain}
                </Link>
              ))}
            </div>
            <p className="text-xs text-[#F5F7FA]/55">{messages.footer.domainNote}</p>
          </div>
        </div>
      </Container>

      <Container className="mt-7">
        <LegalDisclaimer locale={locale} compact className="max-w-4xl" />
      </Container>
    </footer>
  );
}
