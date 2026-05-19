import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent strategic intelligence advisory firm delivering multidisciplinary coordination and AI-enabled operating frameworks.",
  keywords: [
    "strategic intelligence",
    "corporate operations",
    "AI advisory",
    "multidisciplinary coordination",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | NOETRA STRATEGIES",
    description:
      "Independent strategic intelligence advisory firm delivering multidisciplinary coordination and AI-enabled operating frameworks.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  );
}
