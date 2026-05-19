"use client";

import { motion } from "framer-motion";
import { CircleDashed, Landmark, Users } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const flowIcons = [Users, CircleDashed, Landmark];

type NetworkSectionProps = {
  locale: Locale;
};

export function NetworkSection({ locale }: NetworkSectionProps) {
  const messages = getMessages(locale).sections.network;

  return (
    <section id="network" className="relative py-24 sm:py-28">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <Card className="border-[#4DA3FF]/25 bg-[#111827]/45 p-6">
          <p className="text-sm leading-7 text-[#F5F7FA]/76">{messages.executiveCopy}</p>
        </Card>

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
              {messages.flowTitle}
            </p>

            <div className="relative mt-5 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              {messages.flowNodes.map((label, index) => {
                const Icon = flowIcons[index] ?? Users;

                return (
                  <div key={label} className="contents">
                    <div
                      className="rounded-xl border border-white/12 bg-[#111827]/55 p-4 text-center"
                    >
                      <Icon size={18} className="mx-auto text-[#4DA3FF]" />
                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/78">
                        {label}
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
                );
              })}
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">
              {messages.diagramTitle}
            </p>
            <div className="mt-4 space-y-3">
              {messages.diagramSteps.map((step, index) => (
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

            <div className="mt-5 flex flex-wrap gap-2">
              {messages.orchestrationLayers.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#F5F7FA]/68"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {messages.coordinationMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="h-full border-white/12 bg-[#111827]/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#4DA3FF]">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#F5F7FA]">{metric.value}</p>
                <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/70">{metric.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {messages.areas.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-white/12 bg-[#111827]/35 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">
                  {messages.areaLabel}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#F5F7FA]">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
                  {messages.areaDescription}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
