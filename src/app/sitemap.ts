import type { MetadataRoute } from "next";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => {
      const localizedPath = withLocalePath(locale, route);

      return {
        url: `${siteConfig.url}${localizedPath}`,
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.75,
        alternates: {
          languages: {
            it: `${siteConfig.url}${withLocalePath("it", route)}`,
            en: `${siteConfig.url}${withLocalePath("en", route)}`,
          },
        },
      };
    }),
  );
}
