"use client";

import { motion } from "framer-motion";
import { Building2, FileSearch, Scale } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const scenarioIcons = [Scale, Building2, FileSearch];

type OperationalScenariosSectionProps = {
  locale: Locale;
};

export function OperationalScenariosSection({ locale }: OperationalScenariosSectionProps) {
  const messages = getMessages(locale).sections.operationalScenarios;

  return (
    <section
      id="operational-scenarios"
      className="relative border-y border-white/10 bg-[linear-gradient(155deg,rgba(12,18,28,0.94)_0%,rgba(9,13,20,0.98)_100%)] py-24 sm:py-28"
    >
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(77,163,255,0.12),transparent_36%),radial-gradient(circle_at_80%_86%,rgba(198,169,107,0.08),transparent_40%)]" />

      <Container className="space-y-12">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <div className="flex flex-wrap gap-2">
          {messages.statusChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#F5F7FA]/72"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#4DA3FF]">{messages.timelineLabel}</p>

          <div className="relative pl-8">
            <div className="pointer-events-none absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#4DA3FF]/20 via-[#4DA3FF]/70 to-[#C6A96B]/20" />

            <div className="space-y-5">
              {messages.scenarios.map((scenario, index) => {
                const Icon = scenarioIcons[index] ?? Scale;

                return (
                  <motion.article
                    key={scenario.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative"
                  >
                    <span className="absolute -left-[1.95rem] top-7 h-3.5 w-3.5 rounded-full border border-[#4DA3FF]/60 bg-[#0B0F14] shadow-[0_0_0_3px_rgba(11,15,20,1)]" />

                    <Card className="group relative overflow-hidden border-white/12 bg-[linear-gradient(160deg,rgba(17,24,39,0.64),rgba(11,15,20,0.94))] p-6 transition-all duration-500 hover:border-[#4DA3FF]/45 hover:shadow-[0_22px_50px_-38px_rgba(77,163,255,0.85)]">
                      <motion.div
                        className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#4DA3FF]/85 to-transparent"
                        initial={{ scaleX: 0.4, opacity: 0.45 }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />

                      <div className="relative space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="rounded-full border border-white/14 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#F5F7FA]/75">
                            {scenario.tag}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-[#9DCCFF]">
                            <motion.span
                              className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]"
                              animate={{ opacity: [0.35, 1, 0.35] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {scenario.status}
                          </span>
                        </div>

                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#4DA3FF]/35 bg-[#4DA3FF]/10 text-[#4DA3FF]">
                          <Icon size={18} />
                        </div>

                        <h3 className="text-xl font-semibold text-[#F5F7FA]">{scenario.title}</h3>
                        <p className="break-words text-sm leading-7 text-[#F5F7FA]/74">
                          {scenario.summary}
                        </p>

                        <div className="grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                          {scenario.flow.map((node, nodeIndex) => (
                            <div key={node} className="contents">
                              <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#F5F7FA]/72 sm:tracking-[0.14em]">
                                {node}
                              </div>
                              {nodeIndex < scenario.flow.length - 1 ? (
                                <span className="mx-auto h-px w-7 bg-gradient-to-r from-[#4DA3FF]/25 via-[#4DA3FF] to-[#4DA3FF]/25" />
                              ) : null}
                            </div>
                          ))}
                        </div>

                        <div className="rounded-xl border border-[#C6A96B]/25 bg-[#C6A96B]/10 px-3 py-2">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#C6A96B]">{scenario.outcomeLabel}</p>
                          <p className="mt-1 text-sm leading-6 text-[#F5F7FA]/76">{scenario.outcome}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
