"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ChevronRight,
  Cpu,
  Landmark,
  Scale,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const serviceIcons: LucideIcon[] = [
  Scale,
  Building2,
  ShieldCheck,
  Cpu,
  Landmark,
  Wrench,
];

type ServicesSectionProps = {
  locale: Locale;
};

export function ServicesSection({ locale }: ServicesSectionProps) {
  const messages = getMessages(locale).sections.services;

  return (
    <section
      id="services"
      className="relative border-y border-white/10 bg-[linear-gradient(160deg,rgba(17,24,39,0.86)_0%,rgba(11,15,20,0.95)_100%)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(77,163,255,0.12),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(198,169,107,0.08),transparent_36%)]" />
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-6"
        >
          {messages.cards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Building2;
            const isPrimary = service.tier === "primary";

            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: isPrimary ? -7 : -5 }}
                className={cn(isPrimary ? "xl:col-span-3" : "xl:col-span-2")}
              >
                <Card
                  className={cn(
                    "group relative h-full overflow-hidden border p-6 transition-all duration-500",
                    isPrimary
                      ? "border-[#4DA3FF]/30 bg-[linear-gradient(160deg,rgba(12,22,34,0.95),rgba(10,15,22,0.98))]"
                      : "border-white/12 bg-[linear-gradient(160deg,rgba(17,24,39,0.68),rgba(11,15,20,0.92))]",
                    "hover:border-[#4DA3FF]/48 hover:shadow-[0_26px_55px_-38px_rgba(77,163,255,0.85)]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(77,163,255,0.16),transparent_52%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <motion.div
                    className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[#4DA3FF]/80 to-transparent"
                    initial={{ scaleX: 0.35, opacity: 0.45 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />

                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/14 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F5F7FA]/78">
                        {service.microTag}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#9DCCFF]">
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]"
                          animate={{ opacity: [0.35, 1, 0.35] }}
                          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {service.status}
                      </span>
                    </div>

                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#4DA3FF]/30 bg-[#4DA3FF]/10 text-[#4DA3FF] transition-all duration-500 group-hover:scale-105 group-hover:border-[#4DA3FF]/60">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-xl font-semibold text-[#F5F7FA]">{service.title}</h3>
                    <p className="text-sm leading-7 text-[#F5F7FA]/76">{service.description}</p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {service.indicators.map((indicator) => (
                        <div
                          key={indicator}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-[#F5F7FA]/70"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
                          {indicator}
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0B0F14]/55 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-[#4DA3FF]/90">
                        {service.signal}
                      </p>
                      <div className="mt-2 flex h-6 items-end gap-1">
                        {[36, 62, 46].map((height, barIndex) => (
                          <motion.span
                            key={`${service.title}-bar-${height}`}
                            className="w-2 rounded-sm bg-gradient-to-t from-[#4DA3FF]/45 to-[#4DA3FF]/9"
                            style={{ height: `${height}%` }}
                            initial={{ opacity: 0.45 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.25, delay: barIndex * 0.03 }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-end border-t border-white/10 pt-3">
                      <ChevronRight size={15} className="text-[#4DA3FF] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
