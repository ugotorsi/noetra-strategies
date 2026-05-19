"use client";

import { motion } from "framer-motion";
import { Layers3, Orbit, Scale } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const metrics = [
  {
    title: "Strategic Operations",
    value: "Integrated Governance Stack",
    detail:
      "Governance design, decision architecture and strategic execution oversight.",
  },
  {
    title: "AI Integration",
    value: "Intelligence Infrastructure",
    detail:
      "AI-enabled document systems, workflow automation and operational intelligence.",
  },
  {
    title: "Multidisciplinary Coordination",
    value: "Cross-Functional Orchestration",
    detail:
      "Integrated coordination model for complex projects and institutional interfaces.",
  },
];

const premiumBlocks = [
  {
    title: "Executive Positioning",
    text: "Independent strategic platform with institutional-grade advisory standards.",
  },
  {
    title: "Operational Design",
    text: "Scalable frameworks built for high-complexity operations and governance scenarios.",
  },
  {
    title: "Intelligence Enablement",
    text: "Digital intelligence layers for decision support, documentation and process control.",
  },
];

const methodologyCards = [
  {
    icon: Layers3,
    title: "Strategic Layer",
    detail: "Scenario analysis, strategic priorities and decision governance setup.",
  },
  {
    icon: Orbit,
    title: "Coordination Layer",
    detail: "Multidisciplinary orchestration of workflows, stakeholders and mandates.",
  },
  {
    icon: Scale,
    title: "Execution Layer",
    detail: "Operational implementation, performance alignment and adaptive optimization.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="About"
          title="Strategic Advisory Beyond Conventional Consulting"
          description="NOETRA STRATEGIES opera come realta indipendente di advisory strategico ad alta integrazione multidisciplinare, offrendo supporto direzionale, organizzativo, tecnologico e documentale nell'ambito di operazioni complesse, processi decisionali e attivita ad elevato contenuto specialistico."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]"
        >
          <Card className="p-8 sm:p-10">
            <p className="text-pretty text-base leading-8 text-[#F5F7FA]/82 sm:text-lg">
              La societa integra competenze strategiche, coordinamento
              professionale, innovazione tecnologica e sistemi digitali evoluti,
              sviluppando framework operativi scalabili per imprese, investitori,
              professionisti ed enti.
            </p>
            <p className="mt-6 text-pretty text-sm leading-7 text-[#F5F7FA]/72 sm:text-base">
              Ogni incarico viene gestito con approccio istituzionale,
              accountability esecutiva e architettura metodologica orientata a
              continuita operativa, performance decisionale e controllo dei rischi.
            </p>
          </Card>

          <Card className="relative overflow-hidden border-[#C6A96B]/30 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(198,169,107,0.22),transparent_56%)]" />
            <div className="relative space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A96B]">
                Institutional Value Proposition
              </p>
              <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                Strategic Intelligence Firm + AI-Driven Advisory Platform
              </h3>
              <div className="space-y-3">
                {premiumBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-[#4DA3FF]">
                      {block.title}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#F5F7FA]/72">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
          className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {methodologyCards.map((card) => (
              <Card key={card.title} className="h-full border-white/12 p-6">
                <card.icon size={20} className="text-[#4DA3FF]" />
                <h3 className="mt-4 text-lg font-semibold text-[#F5F7FA]">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{card.detail}</p>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(77,163,255,0.2),transparent_56%)]" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-[#C6A96B]">
              Operational Framework
            </p>
            <div className="relative mt-4 space-y-3">
              {["Strategic Inputs", "Decision Layer", "Execution Orchestration", "Outcome Tracking"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.09 }}
                    className="rounded-xl border border-white/12 bg-[#0B0F14]/65 px-4 py-3 text-sm text-[#F5F7FA]/78"
                  >
                    {item}
                  </motion.div>
                ),
              )}
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <Card className="h-full border-white/12 p-6">
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#4DA3FF]">
                    {metric.title}
                  </p>
                  <h3 className="text-xl font-semibold text-[#F5F7FA]">{metric.value}</h3>
                  <p className="text-sm leading-7 text-[#F5F7FA]/70">{metric.detail}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
