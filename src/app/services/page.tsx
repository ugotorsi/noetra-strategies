import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MethodSection } from "@/components/sections/MethodSection";
import { OperationalCapabilities } from "@/components/sections/OperationalCapabilities";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategic services architecture across corporate advisory, legal-regulatory coordination and AI-enabled operations.",
  keywords: [
    "strategic intelligence",
    "AI systems",
    "legal coordination",
    "operational intelligence",
    "corporate operations",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | NOETRA STRATEGIES",
    description:
      "Strategic services architecture across corporate advisory, legal-regulatory coordination and AI-enabled operations.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />
      <ServicesSection />
      <OperationalCapabilities />
      <MethodSection />
      <Footer />
    </main>
  );
}
