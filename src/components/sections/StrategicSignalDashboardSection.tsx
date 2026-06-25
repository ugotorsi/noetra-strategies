"use client";

import { motion } from "framer-motion";
import { Bot, Radar, Scale, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const panelIcons = [ShieldCheck, Scale, Radar, Bot];

const chartSeries = [32, 45, 38, 59, 52, 69, 63, 76];

type StrategicSignalDashboardSectionProps = {
  locale: Locale;
};

export function StrategicSignalDashboardSection({ locale }: StrategicSignalDashboardSectionProps) {
  const messages = getMessages(locale).sections.signalDashboard;

  return (
    <section
      id="signal-dashboard"
      className="relative border-y border-white/10 bg-[linear-gradient(155deg,#0A0E13_10%,#101A29_100%)] py-24 sm:py-28"
    >
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(77,163,255,0.16),transparent_36%),radial-gradient(circle_at_16%_80%,rgba(198,169,107,0.08),transparent_40%)]" />

      <Container className="space-y-12">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-4xl rounded-2xl border border-white/12 bg-white/[0.02] px-6 py-5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#C6A96B]">{messages.contextTitle}</p>
          <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/76">{messages.contextText}</p>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
          <Card className="relative overflow-hidden border-white/12 bg-[#0B0F14]/80 p-6 sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(77,163,255,0.12),transparent_58%)]" />

            <div className="relative space-y-5">
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

              <div className="grid gap-3 sm:grid-cols-2">
                {messages.panels.map((panel, index) => {
                  const Icon = panelIcons[index] ?? ShieldCheck;

                  return (
                    <motion.div
                      key={panel.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <Icon size={16} className="text-[#4DA3FF]" />
                      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[#F5F7FA]/65">
                        {panel.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[#F5F7FA]">{panel.value}</p>
                      <p className="mt-1 text-xs leading-6 text-[#F5F7FA]/66">{panel.note}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                {messages.counters.map((counter) => (
                  <div
                    key={counter.label}
                    className="min-w-0 rounded-xl border border-white/10 bg-[#111827]/55 px-3 py-3"
                  >
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#F5F7FA]/55">
                      {counter.label}
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[#F5F7FA]">{counter.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="relative overflow-hidden border-[#4DA3FF]/30 bg-[#0B0F14]/82 p-6 sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(77,163,255,0.1),transparent_58%)]" />

            <div className="relative space-y-5">
              <div className="rounded-xl border border-white/10 bg-[#111827]/62 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">{messages.chartTitle}</p>
                <div className="mt-4 grid h-28 grid-cols-8 items-end gap-1.5">
                  {chartSeries.map((height, index) => (
                    <motion.div
                      key={`${messages.chartTitle}-${height}`}
                      className="rounded-t-md bg-gradient-to-t from-[#4DA3FF]/45 to-[#4DA3FF]"
                      style={{ height: `${height}%` }}
                      initial={{ opacity: 0.3, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-xl border border-white/10 bg-[#111827]/58 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/66">{messages.monitoringTitle}</p>
                {messages.signals.map((signal, index) => (
                  <div key={signal.label}>
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[#F5F7FA]/64">
                      <span>{signal.label}</span>
                      <span>{signal.value}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#C6A96B]"
                        initial={{ width: "18%" }}
                        whileInView={{ width: `${signal.value}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, delay: index * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111827]/56 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/66">{messages.nodesTitle}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {messages.nodes.map((node, index) => (
                    <div key={node} className="flex min-w-0 items-center gap-2">
                      <span className="rounded-lg border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#F5F7FA]/74 sm:tracking-[0.14em]">
                        {node}
                      </span>
                      {index < messages.nodes.length - 1 ? (
                        <span className="h-px w-4 bg-gradient-to-r from-[#4DA3FF]/25 via-[#4DA3FF] to-[#4DA3FF]/25" />
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  {messages.workflowSignals.map((signal) => (
                    <p
                      key={signal}
                      className="text-xs uppercase tracking-[0.12em] text-[#F5F7FA]/58"
                    >
                      {signal}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="max-w-5xl text-xs leading-7 text-[#F5F7FA]/58">
            {messages.methodologyNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
