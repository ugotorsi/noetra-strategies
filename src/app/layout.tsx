import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { RuntimeEffects } from "@/components/layout/RuntimeEffects";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  description: siteConfig.description,
  sameAs: siteConfig.domains.noetralex.map((domain) => `https://${domain}`),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "canale istituzionale",
      email: siteConfig.emails.info,
      availableLanguage: ["English", "Italian"],
    },
    {
      "@type": "ContactPoint",
      contactType: "advisory strategico",
      email: siteConfig.emails.advisory,
      availableLanguage: ["English", "Italian"],
    },
    {
      "@type": "ContactPoint",
      contactType: "coordinamento operativo",
      email: siteConfig.emails.contact,
      availableLanguage: ["English", "Italian"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IT",
  },
  areaServed: "International",
};

const serviceSchemaPlaceholder = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteConfig.name} | Strategic Intelligence Platform`,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  serviceType:
    "Strategic intelligence, advisory direzionale, legal-tech operations e coordinamento multidisciplinare",
  availableChannel: [
    {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/it/contact`,
      availableLanguage: ["English", "Italian"],
    },
  ],
  sameAs: siteConfig.domains.noetralex.map((domain) => `https://${domain}`),
  areaServed: "International",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `${siteConfig.name} | %s`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  category: "Intelligence strategica",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/it",
    languages: {
      it: "/it",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${siteConfig.url}/it`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NOETRA STRATEGIES - Intelligence strategica, advisory e legal-tech operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "NOETRA STRATEGIES - Intelligence strategica, advisory e legal-tech operations",
      },
    ],
    creator: "@noetra",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaPlaceholder) }}
        />
        <div className="noise-layer" aria-hidden="true" />
        <div className="gradient-mesh-layer" aria-hidden="true" />
        <RuntimeEffects />
        {children}
      </body>
    </html>
  );
}
