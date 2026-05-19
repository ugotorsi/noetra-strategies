import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NOETRA STRATEGIES for strategic intelligence advisory, AI-enabled operations and multidisciplinary coordination support.",
  keywords: [
    "strategic intelligence",
    "AI advisory",
    "legal coordination",
    "operational intelligence",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | NOETRA STRATEGIES",
    description:
      "Contact NOETRA STRATEGIES for strategic intelligence advisory, AI-enabled operations and multidisciplinary coordination support.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />
      <ContactSection />
      <Container className="pb-8">
        <LegalDisclaimer />
      </Container>
      <Footer />
    </main>
  );
}
