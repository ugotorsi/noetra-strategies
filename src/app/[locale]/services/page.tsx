import type { Metadata } from "next";
import Link from "next/link";

import { getInsightByTopic } from "@/content/insights";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MethodSection } from "@/components/sections/MethodSection";
import { OperationalCapabilities } from "@/components/sections/OperationalCapabilities";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { getMessages, withLocalePath } from "@/lib/i18n";
import { buildServiceSchema } from "@/lib/structured-data";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/services", "services");
}

export default async function ServicesPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale);
  const serviceSchema = buildServiceSchema(locale, messages.seo.services.title, messages.seo.services.description);
  const strategicInsight = getInsightByTopic(locale, "strategic-intelligence");
  const legalTechInsight = getInsightByTopic(locale, "legal-tech-ai-analysis");
  const complianceInsight = getInsightByTopic(locale, "compliance-operational-intelligence");

  const insightLinks = [
    {
      label: locale === "it" ? "Strategic advisory" : "Strategic advisory",
      href: strategicInsight ? withLocalePath(locale, `/insights/${strategicInsight.slug}`) : withLocalePath(locale, "/insights"),
    },
    {
      label: locale === "it" ? "Legal-tech e regolatorio" : "Legal-tech and regulatory",
      href: legalTechInsight ? withLocalePath(locale, `/insights/${legalTechInsight.slug}`) : withLocalePath(locale, "/insights"),
    },
    {
      label: locale === "it" ? "Compliance e rischio operativo" : "Compliance and operational risk",
      href: complianceInsight ? withLocalePath(locale, `/insights/${complianceInsight.slug}`) : withLocalePath(locale, "/insights"),
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar locale={locale} />
      <ServicesSection locale={locale} />
      <OperationalCapabilities locale={locale} />
      <MethodSection locale={locale} />

      <section className="relative py-8 sm:py-10">
        <Container>
          <Card className="border-white/12 p-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#4DA3FF]">
                {locale === "it" ? "Percorsi correlati" : "Related paths"}
              </p>
              <p className="text-sm leading-7 text-[#F5F7FA]/75">
                {locale === "it"
                  ? "Ogni area di servizio è collegata a insight editoriali coerenti per rafforzare governance decisionale e continuità operativa."
                  : "Each service area is linked to relevant editorial insights to reinforce decision governance and execution continuity."}
              </p>
              <div className="flex flex-wrap gap-3">
                {insightLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full border border-white/16 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/80 transition hover:border-white/35 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
