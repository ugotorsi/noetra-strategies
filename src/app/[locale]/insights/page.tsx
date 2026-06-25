import type { Metadata } from "next";
import Link from "next/link";

import { getInsightsByLocale } from "@/content/insights";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, withLocalePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/structured-data";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/insights", "insights");
}

function formatDate(locale: "it" | "en", value: string) {
  return new Date(value).toLocaleDateString(locale === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightsIndexPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).insightsPage;
  const insights = getInsightsByLocale(locale);

  const webPageSchema = buildWebPageSchema(locale, "/insights", messages.title, messages.description);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}${withLocalePath(locale, "")}` },
    { name: messages.title, url: `${siteConfig.url}${withLocalePath(locale, "/insights")}` },
  ]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <section className="relative py-24 sm:py-28">
        <div className="section-transition-glow absolute inset-x-0 top-0" />
        <Container className="space-y-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />

          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((item) => (
              <Card key={item.slug} className="h-full border-white/12 p-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[#F5F7FA]/60">
                    <span className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[#4DA3FF]">
                      {item.category}
                    </span>
                    <span>{formatDate(locale, item.date)}</span>
                    <span>{item.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold leading-tight text-[#F5F7FA]">{item.title}</h2>
                  <p className="text-sm leading-7 text-[#F5F7FA]/76">{item.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#F5F7FA]/66"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={withLocalePath(locale, `/insights/${item.slug}`)}
                    className="inline-flex min-h-10 items-center rounded-full border border-[#4DA3FF]/35 bg-[#4DA3FF]/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/85 transition hover:border-[#4DA3FF]/6 hover:text-white"
                  >
                    {messages.readArticle}
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
