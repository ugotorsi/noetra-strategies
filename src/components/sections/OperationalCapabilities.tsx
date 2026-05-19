"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building,
  FileText,
  Gavel,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Capability = {
  title: string;
  icon: LucideIcon;
  detail: string;
};

const capabilities: Capability[] = [
  {
    title: "Strategic Advisory",
    icon: BriefcaseBusiness,
    detail: "Executive advisory and high-impact strategic positioning.",
  },
  {
    title: "Decision Intelligence",
    icon: Sparkles,
    detail: "Data-informed frameworks for complex decision environments.",
  },
  {
    title: "AI Integration",
    icon: Workflow,
    detail: "AI systems integration across workflows and operations.",
  },
  {
    title: "Legal Coordination",
    icon: Gavel,
    detail: "Structured legal coordination within multidisciplinary contexts.",
  },
  {
    title: "Documentation Systems",
    icon: FileText,
    detail: "Advanced document architecture and controlled information flows.",
  },
  {
    title: "Regulatory Support",
    icon: ShieldCheck,
    detail: "Regulatory alignment and compliance framework implementation.",
  },
  {
    title: "Corporate Structuring",
    icon: Building,
    detail: "Operational structuring for growth, governance and resilience.",
  },
  {
    title: "Institutional Relations",
    icon: Network,
    detail: "Institutional interface strategy and strategic communication support.",
  },
];

export function OperationalCapabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-28">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-12">
        <SectionTitle
          eyebrow="Capabilities"
          title="Operational Capabilities"
          description="A modular operating stack designed for complex strategic operations, institutional governance and AI-enabled execution."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="h-full border-white/12 p-5 transition-all duration-500 hover:border-[#4DA3FF]/55">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#4DA3FF]/45 bg-[#4DA3FF]/14 text-[#4DA3FF] shadow-[0_0_32px_-20px_rgba(77,163,255,0.95)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F7FA]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{item.detail}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
