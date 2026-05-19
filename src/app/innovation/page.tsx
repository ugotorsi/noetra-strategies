import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AISection } from "@/components/sections/AISection";

export const metadata: Metadata = {
  title: "Innovation",
  description:
    "AI-driven strategic operations including automation, knowledge systems and document intelligence platforms.",
  keywords: [
    "AI advisory",
    "AI systems",
    "document intelligence",
    "digital transformation",
    "operational intelligence",
  ],
  alternates: {
    canonical: "/innovation",
  },
  openGraph: {
    title: "Innovation | NOETRA STRATEGIES",
    description:
      "AI-driven strategic operations including automation, knowledge systems and document intelligence platforms.",
    url: "/innovation",
    type: "website",
  },
};

export default function InnovationPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />
      <AISection />
      <Footer />
    </main>
  );
}
