import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { NetworkSection } from "@/components/sections/NetworkSection";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Integrated professional network for multidisciplinary execution under full technical and deontological autonomy.",
  keywords: [
    "legal coordination",
    "strategic intelligence",
    "institutional relations",
    "corporate operations",
  ],
  alternates: {
    canonical: "/network",
  },
  openGraph: {
    title: "Network | NOETRA STRATEGIES",
    description:
      "Integrated professional network for multidisciplinary execution under full technical and deontological autonomy.",
    url: "/network",
    type: "website",
  },
};

export default function NetworkPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />
      <NetworkSection />
      <Container className="pb-8">
        <LegalDisclaimer />
      </Container>
      <Footer />
    </main>
  );
}
