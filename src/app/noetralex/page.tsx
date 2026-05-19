import type { Metadata } from "next";
import { Bot, FileSearch, Gavel, Radar, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "NOETRALEX",
  description:
    "Legal Intelligence Systems: advanced AI-driven legal coordination, regulatory intelligence and document operations.",
  keywords: [
    "legal intelligence",
    "AI systems",
    "regulatory coordination",
    "document intelligence",
    "compliance automation",
  ],
  alternates: {
    canonical: "/noetralex",
  },
  openGraph: {
    title: "NOETRALEX | Legal Intelligence Systems",
    description:
      "Advanced AI-driven legal coordination, regulatory intelligence and strategic operational support.",
    url: "/noetralex",
    type: "website",
  },
};

const stacks = [
  {
    title: "AI Legal Systems",
    detail:
      "AI-enabled frameworks for legal coordination, strategic analysis and operational legal support.",
    icon: Bot,
  },
  {
    title: "Document Intelligence",
    detail:
      "Structured document pipelines, extraction layers and knowledge retrieval systems.",
    icon: FileSearch,
  },
  {
    title: "Regulatory Coordination",
    detail:
      "Regulatory monitoring and coordination support for complex operational contexts.",
    icon: Radar,
  },
  {
    title: "Litigation Support Systems",
    detail:
      "Workflow-oriented legal support architecture for strategic litigation processes.",
    icon: Gavel,
  },
  {
    title: "Compliance Automation",
    detail:
      "Automated compliance checks and controlled governance workflows.",
    icon: ShieldCheck,
  },
];

export default function NoetralexPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#070B12] text-[#F5F7FA]">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-28">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#4DA3FF]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#4DA3FF]/15 blur-[130px]" />

        <Container className="relative space-y-10">
          <SectionTitle
            eyebrow="NOETRALEX"
            title="Legal Intelligence Systems"
            description="Advanced AI-driven legal coordination, regulatory intelligence, document systems and strategic operational support."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stacks.map((stack) => (
              <Card
                key={stack.title}
                className="h-full border-[#4DA3FF]/30 bg-[#0B0F14]/72 p-6 shadow-[0_0_40px_-26px_rgba(77,163,255,0.8)]"
              >
                <stack.icon size={18} className="text-[#4DA3FF]" />
                <h3 className="mt-3 text-lg font-semibold text-[#F5F7FA]">{stack.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{stack.detail}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="blue" size="lg" disabled>
              Coming Soon
            </Button>
            <p className="text-sm text-[#F5F7FA]/65">
              Cyber legal-tech division currently in strategic rollout phase.
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
