"use client";

import { motion } from "framer-motion";
import { Bot, ChartColumnBig, FileSearch, Workflow } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const aiIcons = [Workflow, FileSearch, Bot, ChartColumnBig];

type AISectionProps = {
  locale: Locale;
};

export function AISection({ locale }: AISectionProps) {
  const messages = getMessages(locale).sections.ai;

  return (
    <section
      id="innovation"
      className="relative border-y border-white/10 bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.16),transparent_40%),linear-gradient(155deg,#0B0F14_10%,#101A29_100%)] py-24 sm:py-28"
    >
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-8"
        >
          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <Card className="border-[#4DA3FF]/30 p-6">
            <p className="text-sm leading-7 text-[#F5F7FA]/78">
              {messages.intro}
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {messages.cards.map((card, index) => {
              const Icon = aiIcons[index] ?? Workflow;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.09 }}
                >
                  <Card className="h-full border-white/12 p-5">
                    <Icon size={18} className="text-[#4DA3FF]" />
                    <h3 className="mt-3 text-lg font-semibold text-[#F5F7FA]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{card.detail}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-[#4DA3FF]/28 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-12 right-4 h-36 w-36 rounded-full bg-[#4DA3FF]/20 blur-[80px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4DA3FF]/18 blur-[95px]" />

          <Card className="relative overflow-hidden border-[#4DA3FF]/35 bg-[#0B0F14]/85 p-6 sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(77,163,255,0.12),transparent_45%,rgba(255,255,255,0.05))]" />

            <div className="relative space-y-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {messages.predictiveLabels.map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5F7FA]/65">
                        {item}
                      </p>
                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-[#4DA3FF]"
                          initial={{ width: "18%" }}
                          whileInView={{ width: `${65 + index * 10}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: index * 0.15 }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="grid gap-3 md:grid-cols-[1fr_0.85fr]">
                <div className="rounded-2xl border border-white/10 bg-[#111827]/65 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/65">
                    {messages.metricsTitle}
                  </p>
                  <div className="mt-4 grid h-32 grid-cols-7 items-end gap-2">
                    {[35, 52, 40, 68, 56, 83, 74].map((height, index) => (
                      <motion.div
                        key={`bar-${height}`}
                        className="rounded-t-md bg-gradient-to-t from-[#4DA3FF]/50 to-[#4DA3FF]"
                        style={{ height: `${height}%` }}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.07 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111827]/65 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/65">
                    {messages.pipelineTitle}
                  </p>
                  <div className="mt-3 space-y-3">
                    {messages.pipelineNodes.map(
                      (node, index) => (
                      <motion.div
                        key={node}
                        className="rounded-xl border border-[#4DA3FF]/25 bg-[#4DA3FF]/10 px-3 py-2 text-sm text-[#F5F7FA]/85"
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.09 }}
                      >
                        {node}
                      </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111827]/55 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/65">
                  {messages.diagramTitle}
                </p>
                <div className="mt-3 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
                  {messages.diagramNodes.map((node, index) => (
                    <div key={node} className="contents">
                      <motion.div
                        className="rounded-lg border border-white/12 bg-[#0B0F14]/70 px-3 py-2 text-center text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/75"
                        initial={{ opacity: 0.4 }}
                        whileInView={{ opacity: [0.4, 1, 0.4] }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.4, delay: index * 0.18, repeat: 1 }}
                      >
                        {node}
                      </motion.div>
                      {index < 2 ? (
                        <motion.span
                          className="h-px w-6 bg-[#4DA3FF]/60"
                          initial={{ opacity: 0.2, scaleX: 0.7 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: 0.2 + index * 0.2 }}
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
