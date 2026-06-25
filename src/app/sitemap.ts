import type { MetadataRoute } from "next";

import { getAllInsightEntries } from "@/content/insights";
import { locales, withLocalePath } from "@/lib/i18n-config";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/services",
  "/innovation",
  "/network",
  "/contact",
  "/privacy",
  "/cookie-policy",
  "/legal",
  "/noetralex",
  "/insights",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const insightEntries = getAllInsightEntries();

  const routeEntries: MetadataRoute.Sitemap = routes.flatMap((route) =>
    locales.map((locale) => {
      const localizedPath = withLocalePath(locale, route);

      return {
        url: `${siteConfig.url}${localizedPath}`,
        lastModified: now,
        changeFrequency: route === "/" || route === "/insights" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : route === "/insights" ? 0.82 : 0.75,
        alternates: {
          languages: {
            it: `${siteConfig.url}${withLocalePath("it", route)}`,
            en: `${siteConfig.url}${withLocalePath("en", route)}`,
          },
        },
      };
    }),
  );

  const articleEntries: MetadataRoute.Sitemap = insightEntries.map((entry) => {
    const alternate = insightEntries.find(
      (candidate) =>
        candidate.topicId === entry.topicId &&
        candidate.locale !== entry.locale,
    );
    const path = withLocalePath(entry.locale, `/insights/${entry.slug}`);

    return {
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(entry.date),
      changeFrequency: "monthly" as const,
      priority: 0.72,
      alternates: {
        languages: {
          it: `${siteConfig.url}${withLocalePath(
            "it",
            `/insights/${entry.locale === "it" ? entry.slug : (alternate?.slug ?? entry.slug)}`,
          )}`,
          en: `${siteConfig.url}${withLocalePath(
            "en",
            `/insights/${entry.locale === "en" ? entry.slug : (alternate?.slug ?? entry.slug)}`,
          )}`,
        },
      },
    };
  });

  return [...routeEntries, ...articleEntries];
}
