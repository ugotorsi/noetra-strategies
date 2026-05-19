type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  emails: {
    info: string;
    advisory: string;
    contact: string;
  };
  domains: {
    primary: string;
    noetralex: string[];
  };
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "NOETRA STRATEGIES",
  title: "NOETRA STRATEGIES | Strategic Intelligence and AI Advisory Platform",
  description:
    "Elite strategic intelligence platform for AI advisory, legal intelligence systems and multidisciplinary executive coordination.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.noetra.it").replace(/\/$/, ""),
  email: process.env.CONTACT_EMAIL ?? "info@noetra.it",
  emails: {
    info: "info@noetra.it",
    advisory: "advisory@noetra.it",
    contact: "contact@noetra.it",
  },
  domains: {
    primary: "noetra.it",
    noetralex: ["noetralex.it", "noetralex.com"],
  },
  keywords: [
    "strategic intelligence",
    "operational intelligence",
    "AI advisory",
    "legal intelligence",
    "document intelligence",
    "executive coordination",
    "multidisciplinary advisory",
    "AI systems",
    "institutional advisory",
  ],
};

