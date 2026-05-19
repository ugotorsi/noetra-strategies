type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "NOETRA STRATEGIES",
  title: "NOETRA STRATEGIES | Strategic Intelligence Firm",
  description:
    "International strategic advisory, AI innovation and multidisciplinary operational coordination.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.noetra.it").replace(/\/$/, ""),
  email: process.env.CONTACT_EMAIL ?? "info@noetra.it",
  keywords: [
    "strategic intelligence",
    "AI advisory",
    "corporate strategy",
    "operational intelligence",
    "legal coordination",
    "innovation systems",
  ],
};

