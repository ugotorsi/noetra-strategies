import { siteConfig } from "@/lib/site";
import { type Locale, withLocalePath } from "@/lib/i18n";
import { type InsightEntry } from "@/content/insights";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOETRA STRATEGIES S.R.L.S.",
    alternateName: "NOETRA STRATEGIES",
    legalName: "NOETRA STRATEGIES S.R.L.S.",
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    email: siteConfig.emails.advisory,
    taxID: "03250700642",
    vatID: "IT03250700642",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Ferdinando Iannaccone, 4",
      postalCode: "83100",
      addressLocality: "Avellino",
      addressCountry: "IT",
    },
    sameAs: [],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["it", "en"],
    publisher: {
      "@type": "Organization",
      name: "NOETRA STRATEGIES S.R.L.S.",
      url: siteConfig.url,
    },
  };
}

export function buildWebPageSchema(locale: Locale, path: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    inLanguage: locale,
    url: `${siteConfig.url}${withLocalePath(locale, path)}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(locale: Locale, serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: `${siteConfig.name} | ${serviceName}`,
    description,
    provider: {
      "@type": "Organization",
      name: "NOETRA STRATEGIES S.R.L.S.",
      url: siteConfig.url,
    },
    areaServed: "International",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}${withLocalePath(locale, "/contact")}`,
      availableLanguage: ["it", "en"],
    },
  };
}

export function buildArticleSchema(locale: Locale, entry: InsightEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    datePublished: entry.date,
    dateModified: entry.date,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: "NOETRA STRATEGIES Editorial Team",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "NOETRA STRATEGIES S.R.L.S.",
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${withLocalePath(locale, `/insights/${entry.slug}`)}`,
    },
    image: [`${siteConfig.url}/og-image.svg`],
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: [entry.primaryTopic, ...entry.secondaryTopics],
    articleSection: entry.category,
    keywords: entry.tags,
  };
}
