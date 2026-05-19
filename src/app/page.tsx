import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AISection } from "@/components/sections/AISection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { MethodSection } from "@/components/sections/MethodSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { OperationalCapabilities } from "@/components/sections/OperationalCapabilities";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Strategic Intelligence Firm",
  description:
    "International strategic advisory, AI innovation and multidisciplinary operational coordination.",
  keywords: [
    "strategic intelligence",
    "AI advisory",
    "corporate strategy",
    "operational intelligence",
    "legal coordination",
    "innovation systems",
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-[-12rem] h-[26rem] w-[70rem] -translate-x-1/2 rounded-full bg-[#4DA3FF]/8 blur-[120px]" />
        <div className="absolute bottom-[-15rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#C6A96B]/8 blur-[130px]" />
        <div className="gradient-mesh-layer absolute inset-0 opacity-55" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <OperationalCapabilities />
        <MethodSection />
        <AISection />
        <NetworkSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
