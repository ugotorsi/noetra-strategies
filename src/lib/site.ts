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
  title: "NOETRA STRATEGIES | Strategic Intelligence & Advisory",
  description:
    "Multidisciplinary strategic advisory, legal-tech and AI-assisted intelligence for complex decisions, regulatory contexts and corporate operations.",
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
    "intelligence strategica",
    "strategic intelligence",
    "advisory direzionale",
    "operations governance",
    "AI advisory",
    "ai legal intelligence",
    "legal intelligence",
    "document intelligence",
    "executive coordination",
    "coordinamento multidisciplinare",
    "supporto al contenzioso",
    "compliance e governance",
  ],
};

