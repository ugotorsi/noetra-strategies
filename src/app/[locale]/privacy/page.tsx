import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/privacy", "privacy");
}

export default async function PrivacyPolicyPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).privacyPage;

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
            <div className="divide-y divide-white/10">
              {messages.items.map((item) => (
                <div key={item.label} className="grid gap-3 py-4 sm:grid-cols-[0.3fr_0.7fr]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#F5F7FA]/78">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
