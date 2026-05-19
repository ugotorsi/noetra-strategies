import Link from "next/link";

import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { getMessages, type Locale, withLocalePath } from "@/lib/i18n";

import { Container } from "./Container";

const footerLinks = [
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "innovation", path: "/innovation" },
  { key: "network", path: "/network" },
  { key: "contact", path: "/contact" },
  { key: "legal", path: "/legal" },
];

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const messages = getMessages(locale);

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
                className="rounded-full border border-white/12 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/70 transition hover:border-[#4DA3FF]/45 hover:text-[#F5F7FA]"
              >
                {messages.footer.links[link.key as keyof typeof messages.footer.links]}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/45">
          {messages.footer.tagline}
        </p>
      </Container>

      <Container className="mt-7">
        <LegalDisclaimer locale={locale} compact className="max-w-4xl" />
      </Container>
    </footer>
  );
}
