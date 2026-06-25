import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";

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

          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="border-white/12 p-6 sm:p-8 lg:col-span-5">
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C6A96B]">
                  {messages.corporateCardLabel}
                </p>
                <p className="text-base font-semibold tracking-[0.08em] text-[#F5F7FA]">
                  {messages.companyName}
                </p>

                <div className="divide-y divide-white/10">
                  {messages.corporateRows.map((row) => (
                    <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[0.38fr_0.62fr]">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">
                        {row.label}
                      </p>
                      <div className="space-y-1.5">
                        {row.values.map((value) =>
                          row.isEmail ? (
                            <Link
                              key={value}
                              href={`mailto:${value}`}
                              className="block text-sm text-[#F5F7FA]/78 transition hover:text-white"
                            >
                              {value}
                            </Link>
                          ) : (
                            <p key={value} className="text-sm text-[#F5F7FA]/78">
                              {value}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="border-white/12 p-6 sm:p-8 lg:col-span-7">
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#4DA3FF]">
                  {messages.noteCardLabel}
                </p>
                <p className="text-sm font-semibold tracking-[0.12em] text-[#F5F7FA]">
                  {messages.noteHeading}
                </p>
                <div className="space-y-4 divide-y divide-white/10">
                  {messages.noteParagraphs.map((paragraph) => (
                    <p key={paragraph} className="pt-4 text-sm leading-relaxed text-[#F5F7FA]/78 first:pt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
