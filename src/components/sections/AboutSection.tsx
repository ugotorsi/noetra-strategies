"use client";

import { motion } from "framer-motion";
import { Layers3, Orbit, Scale } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const methodologyIcons = [Layers3, Orbit, Scale];

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const messages = getMessages(locale).sections.about;

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
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
              {messages.paragraphOne}
            </p>
            <p className="mt-6 text-pretty text-sm leading-7 text-[#F5F7FA]/72 sm:text-base">
              {messages.paragraphTwo}
            </p>
          </Card>

          <Card className="relative overflow-hidden border-[#C6A96B]/30 p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(198,169,107,0.22),transparent_56%)]" />
            <div className="relative space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A96B]">
                {messages.valueTitle}
              </p>
              <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                {messages.valueHeadline}
              </h3>
              <div className="space-y-3">
                {messages.premiumBlocks.map((block) => (
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
            {messages.methodologyCards.map((card, index) => {
              const Icon = methodologyIcons[index] ?? Layers3;

              return (
                <Card key={card.title} className="h-full border-white/12 p-6">
                  <Icon size={20} className="text-[#4DA3FF]" />
                  <h3 className="mt-4 text-lg font-semibold text-[#F5F7FA]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{card.detail}</p>
                </Card>
              );
            })}
          </div>

          <Card className="relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(77,163,255,0.2),transparent_56%)]" />
            <p className="relative text-xs uppercase tracking-[0.2em] text-[#C6A96B]">
              {messages.frameworkTitle}
            </p>
            <div className="relative mt-4 space-y-3">
              {messages.frameworkItems.map(
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

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="border-white/12 p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#4DA3FF]">
              {messages.operationalPhilosophyTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/74">
              {messages.operationalPhilosophy}
            </p>
          </Card>

          <Card className="border-white/12 p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#C6A96B]">
              {messages.advisoryModelTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/74">
              {messages.advisoryModel}
            </p>
          </Card>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {messages.metrics.map((metric, index) => (
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
