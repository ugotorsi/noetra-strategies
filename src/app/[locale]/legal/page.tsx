import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/legal", "legal");
}

export default async function LegalPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).legalPage;

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />

      <section className="relative py-24 sm:py-28">
        <div className="section-transition-glow absolute inset-x-0 top-0" />
        <Container className="space-y-10">
          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <Card className="border-white/12 p-6 sm:p-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#F5F7FA]">
                {messages.institutionalName}
              </p>

              <div className="divide-y divide-white/10">
                {messages.rows.map((row) => (
                  <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[0.3fr_0.7fr]">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#F5F7FA]/78">{row.value}</p>
                  </div>
                ))}

                <div className="grid gap-2 py-4 sm:grid-cols-[0.3fr_0.7fr]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">
                    {messages.emailLabel}
                  </p>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-[#F5F7FA]/78 transition hover:text-white"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <LegalDisclaimer locale={locale} className="max-w-4xl" />
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
