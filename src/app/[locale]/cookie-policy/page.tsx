import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/cookie-policy", "cookiePolicy");
}

export default async function CookiePolicyPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).cookiePolicyPage;

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
            <div className="space-y-4">
              {messages.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm text-[#F5F7FA]/78">{point}</p>
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
