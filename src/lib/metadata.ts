import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { type Locale, withLocalePath } from "@/lib/i18n";

type SeoEntry = {
  title: string;
  description: string;
  keywords?: string[];
};

function toOpenGraphLocale(locale: Locale): string {
  return locale === "it" ? "it_IT" : "en_US";
}

function buildTitle(pageTitle: string): string {
  return pageTitle.includes(siteConfig.name) ? pageTitle : `${pageTitle} | ${siteConfig.name}`;
}

function imageAltByLocale(locale: Locale): string {
  return locale === "it"
    ? `${siteConfig.name} - Piattaforma istituzionale di intelligence strategica`
    : `${siteConfig.name} - Strategic Intelligence Firm`;
}

export function createLocalizedMetadata(
  locale: Locale,
  pathname: string,
  seo: SeoEntry,
): Metadata {
  const canonicalPath = withLocalePath(locale, pathname);
  const italianPath = withLocalePath("it", pathname);
  const englishPath = withLocalePath("en", pathname);
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const pageTitle = buildTitle(seo.title);
  const imageAlt = imageAltByLocale(locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords ?? siteConfig.keywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        it: italianPath,
        en: englishPath,
      },
    },
    openGraph: {
      type: "website",
      locale: toOpenGraphLocale(locale),
      url: canonicalUrl,
      title: pageTitle,
      description: seo.description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: seo.description,
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      creator: "@noetra",
    },
  };
}
