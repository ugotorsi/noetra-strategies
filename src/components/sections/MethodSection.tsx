"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    key: "ANALYZE",
    description: "Strategic assessment and multidisciplinary evaluation.",
    tag: "Assessment Layer",
  },
  {
    key: "STRUCTURE",
    description: "Operational and organizational framework definition.",
    tag: "Framework Layer",
  },
  {
    key: "COORDINATE",
    description:
      "Integrated management of professional activities and workflows.",
    tag: "Coordination Layer",
  },
  {
    key: "EXECUTE",
    description: "Technology-enabled operational support and implementation.",
    tag: "Execution Layer",
  },
];

export function MethodSection() {
  return (
    <section id="method" className="relative py-24 sm:py-30">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-14">
        <SectionTitle
          eyebrow="Method"
          title="Operational Method Framework"
          description="A four-step model designed to convert complexity into controlled strategic execution."
        />

        <Card className="relative overflow-hidden border-white/15 p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(77,163,255,0.14),transparent_48%)]" />
          <div className="pointer-events-none absolute left-[1.15rem] top-9 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#4DA3FF]/0 via-[#4DA3FF]/75 to-[#C6A96B]/0 lg:left-16 lg:top-1/2 lg:h-px lg:w-[calc(100%-8rem)] lg:-translate-y-1/2 lg:bg-gradient-to-r" />

          <div className="relative grid gap-7 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.13 }}
                className="relative pl-10 lg:pl-0"
              >
                <span className="absolute left-0 top-8 inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#4DA3FF]/70 bg-[#4DA3FF]/25 shadow-[0_0_22px_rgba(77,163,255,0.95)] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" />

                <Card className="h-full border-white/12 p-6 lg:mt-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A96B]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#F5F7FA]">{step.key}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#4DA3FF]">
                    {step.tag}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/74">
                    {step.description}
                  </p>
                  <div className="mt-4 grid grid-cols-6 gap-1">
                    {Array.from({ length: 6 }).map((_, stripeIndex) => (
                      <motion.span
                        key={`${step.key}-${stripeIndex}`}
                        className="h-1 rounded-full bg-[#4DA3FF]/45"
                        initial={{ opacity: 0.25 }}
                        whileInView={{ opacity: [0.25, 0.9, 0.25] }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.8,
                          delay: 0.12 * stripeIndex + index * 0.08,
                          repeat: 1,
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
