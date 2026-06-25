import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllInsightEntries,
  getAlternateInsight,
  getInsightBySlug,
} from "@/content/insights";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/Card";
import { getMessages, withLocalePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/lib/structured-data";

import { getLocaleForPage, type LocalePageProps } from "../../locale-utils";

type InsightArticleProps = LocalePageProps & {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return getAllInsightEntries().map((entry) => ({
    locale: entry.locale,
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: InsightArticleProps): Promise<Metadata> {
  const { locale: localeValue, slug } = await params;
  const locale = localeValue === "en" ? "en" : "it";
  const insight = getInsightBySlug(locale, slug);

  if (!insight) {
    return {};
  }

  const alternate = getAlternateInsight(insight);
  const canonicalPath = withLocalePath(locale, `/insights/${insight.slug}`);

  return {
    title: insight.seo.title,
    description: insight.seo.description,
    keywords: insight.tags,
    alternates: {
      canonical: canonicalPath,
      languages: {
        it: withLocalePath("it", `/insights/${locale === "it" ? insight.slug : alternate?.slug ?? insight.slug}`),
        en: withLocalePath("en", `/insights/${locale === "en" ? insight.slug : alternate?.slug ?? insight.slug}`),
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      title: insight.seo.title,
      description: insight.seo.description,
      url: `${siteConfig.url}${canonicalPath}`,
      siteName: siteConfig.name,
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: [locale === "it" ? "en_US" : "it_IT"],
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.seo.title,
      description: insight.seo.description,
      images: ["/og-image.svg"],
      creator: "@noetra",
    },
  };
}

function formatDate(locale: "it" | "en", value: string) {
  return new Date(value).toLocaleDateString(locale === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticlePage({ params }: InsightArticleProps) {
  const { slug } = await params;
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).insightsPage;
  const insight = getInsightBySlug(locale, slug);

  if (!insight) {
    notFound();
  }

  const alternate = getAlternateInsight(insight);

  const webPageSchema = buildWebPageSchema(
    locale,
    `/insights/${insight.slug}`,
    insight.title,
    insight.description,
  );
  const articleSchema = buildArticleSchema(locale, insight);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}${withLocalePath(locale, "")}` },
    { name: messages.title, url: `${siteConfig.url}${withLocalePath(locale, "/insights")}` },
    { name: insight.title, url: `${siteConfig.url}${withLocalePath(locale, `/insights/${insight.slug}`)}` },
  ]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />

      <article className="relative py-24 sm:py-28">
        <div className="section-transition-glow absolute inset-x-0 top-0" />
        <Container className="space-y-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />

          <header className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[#F5F7FA]/60">
              <span className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[#4DA3FF]">
                {insight.category}
              </span>
              <span>{formatDate(locale, insight.date)}</span>
              <span>{insight.readingTime}</span>
            </div>

            <h1 className="text-balance text-3xl font-semibold leading-tight text-[#F5F7FA] sm:text-4xl lg:text-5xl">
              {insight.title}
            </h1>
            <p className="text-pretty text-base leading-8 text-[#F5F7FA]/80 sm:text-lg">
              {insight.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#F5F7FA]/66"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <Card className="border-white/12 p-6 sm:p-8">
            <div className="mx-auto max-w-4xl space-y-10">
              {insight.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#F5F7FA]">{section.heading}</h2>
                  {section.subheading ? (
                    <h3 className="text-lg font-medium text-[#F5F7FA]/88">{section.subheading}</h3>
                  ) : null}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="break-words text-base leading-8 text-[#F5F7FA]/78">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="space-y-2 text-sm text-[#F5F7FA]/74">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4DA3FF]" />
                          <span className="break-words">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-[#F5F7FA]/78">{insight.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={insight.ctaHref}
                    className="inline-flex min-h-10 items-center rounded-full border border-[#4DA3FF]/35 bg-[#4DA3FF]/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/85 transition hover:border-[#4DA3FF]/65 hover:text-white"
                  >
                    {insight.ctaLabel}
                  </Link>
                  {alternate ? (
                    <Link
                      href={withLocalePath(alternate.locale, `/insights/${alternate.slug}`)}
                      className="inline-flex min-h-10 items-center rounded-full border border-white/16 bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/78 transition hover:border-white/35 hover:text-white"
                    >
                      {messages.switchLanguageArticle}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </article>

      <Footer locale={locale} />
    </main>
  );
}
