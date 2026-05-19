import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/services",
  "/innovation",
  "/network",
  "/contact",
  "/legal",
  "/noetralex",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75,
  }));
}
