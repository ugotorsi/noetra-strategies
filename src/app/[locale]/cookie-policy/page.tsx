import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";
import { withLocalePath } from "@/lib/i18n-config";
import { siteConfig } from "@/lib/site";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/cookie-policy", "cookiePolicy");
}

export default async function CookiePolicyPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).cookiePolicyPage;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteConfig.url}${withLocalePath(locale, "")}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: messages.title,
        item: `${siteConfig.url}${withLocalePath(locale, "/cookie-policy")}`,
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />

      <section className="relative py-24 sm:py-28">
        <div className="section-transition-glow absolute inset-x-0 top-0" />
        <Container className="space-y-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <Card className="border-white/12 p-6 sm:p-8">
            <div className="space-y-4">
              {messages.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="break-words text-sm leading-relaxed text-[#F5F7FA]/78">{point}</p>
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
