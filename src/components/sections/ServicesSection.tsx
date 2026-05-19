"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Scale,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services: {
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Strategic & Corporate Advisory",
    description:
      "Executive advisory for strategic positioning, governance architecture and growth-oriented corporate decisions.",
    capabilities: [
      "governance architecture",
      "business planning",
      "strategic communication",
    ],
    icon: Building2,
  },
  {
    title: "Legal & Regulatory Coordination",
    description:
      "Integrated legal-regulatory coordination for complex assignments requiring technical precision and compliance control.",
    capabilities: [
      "compliance frameworks",
      "regulatory mapping",
      "documentation systems",
    ],
    icon: Scale,
  },
  {
    title: "AI Systems & Digital Innovation",
    description:
      "Design and implementation of AI-enabled operating systems for intelligent automation and scalable workflows.",
    capabilities: [
      "operational automation",
      "decision intelligence",
      "knowledge systems",
    ],
    icon: Cpu,
  },
  {
    title: "Real Estate & Asset Consulting",
    description:
      "Strategic and technical support for asset enhancement, real estate initiatives and operational roadmapping.",
    capabilities: [
      "asset strategy",
      "documentation systems",
      "institutional interface",
    ],
    icon: Landmark,
  },
  {
    title: "Institutional & Commercial Relations",
    description:
      "Institutional and commercial relationship management for market positioning, partnerships and executive dialogue.",
    capabilities: [
      "stakeholder engagement",
      "strategic communication",
      "institutional relations",
    ],
    icon: Handshake,
  },
  {
    title: "Executive Training & Knowledge Systems",
    description:
      "High-level executive training programs with strategic, regulatory and AI-governance-oriented knowledge frameworks.",
    capabilities: [
      "executive training",
      "knowledge systems",
      "operational methodologies",
    ],
    icon: GraduationCap,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-y border-white/10 bg-[linear-gradient(160deg,rgba(17,24,39,0.86)_0%,rgba(11,15,20,0.95)_100%)] py-24 sm:py-28"
    >
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="Services"
          title="Strategic Services for Complex Organizations"
          description="Integrated service architecture for strategic intelligence, legal-regulatory coordination and AI-enabled operational execution."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <Card className="group h-full border-white/12 p-6 transition-all duration-500 hover:border-[#4DA3FF]/45">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#4DA3FF]/40 bg-[#4DA3FF]/12 text-[#4DA3FF] shadow-[0_0_30px_-18px_rgba(77,163,255,0.9)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#4DA3FF]/70">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F7FA]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/74">
                    {service.description}
                  </p>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                  <motion.ul
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-5 space-y-2"
                  >
                    {service.capabilities.map((capability, capIndex) => (
                      <motion.li
                        key={capability}
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2, delay: capIndex * 0.03 }}
                        className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#F5F7FA]/68"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
                        {capability}
                      </motion.li>
                    ))}
                  </motion.ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
