"use client";

import { motion } from "framer-motion";
import { CircleDashed, Landmark, Users } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const networkAreas = [
  "Legal",
  "Tax",
  "Compliance",
  "Engineering",
  "Technical Experts",
  "Corporate Advisory",
];

export function NetworkSection() {
  return (
    <section id="network" className="relative py-24 sm:py-28">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="Network"
          title="Integrated Professional Network"
          description="La societa coordina attivita multidisciplinari mediante il coinvolgimento di professionisti esterni qualificati, operanti con piena autonomia tecnica, professionale e deontologica ai sensi della normativa vigente."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <Card className="relative overflow-hidden border-white/12 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(77,163,255,0.16),transparent_45%)]" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-[#C6A96B]">
              Professional Coordination Flow
            </p>

            <div className="relative mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              {[
                { label: "Client Mandate", icon: Users },
                { label: "NOETRA Coordination", icon: CircleDashed },
                { label: "Professional Execution", icon: Landmark },
              ].map((node, index) => (
                <div key={node.label} className="contents">
                  <div
                    className="rounded-xl border border-white/12 bg-[#111827]/55 p-4 text-center"
                  >
                    <node.icon size={18} className="mx-auto text-[#4DA3FF]" />
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/78">
                      {node.label}
                    </p>
                  </div>
                  {index < 2 ? (
                    <motion.span
                      className="mx-auto h-px w-9 bg-gradient-to-r from-[#4DA3FF]/25 via-[#4DA3FF] to-[#4DA3FF]/25"
                      initial={{ opacity: 0.2, scaleX: 0.6 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">
              Institutional Diagram
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Mandate Definition",
                "Specialist Activation",
                "Regulatory Alignment",
                "Operational Reporting",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-lg border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-[#F5F7FA]/75"
                >
                  {step}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {networkAreas.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-white/12 bg-[#111827]/35 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">Area</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#F5F7FA]">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
                  Coordinamento istituzionale, standard elevati e integrazione
                  operativa su progetti complessi.
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
