"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ChevronRight,
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
import { getMessages, type Locale } from "@/lib/i18n";

const serviceIcons: LucideIcon[] = [
  Building2,
  Scale,
  Cpu,
  Landmark,
  Handshake,
  GraduationCap,
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
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {messages.cards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Building2;

            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -4 }}
              >
                <Card className="group h-full border-white/12 p-6 transition-all duration-500 hover:border-[#4DA3FF]/45">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#4DA3FF]/40 bg-[#4DA3FF]/12 text-[#4DA3FF] shadow-[0_0_30px_-18px_rgba(77,163,255,0.9)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#4DA3FF]/70">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#F5F7FA]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/74">
                    {service.description}
                  </p>
                  <p className="mt-4 rounded-lg border border-[#4DA3FF]/20 bg-[#4DA3FF]/8 px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#9DCCFF]">
                    {service.executiveParagraph}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.operationalTerms.map((term) => (
                      <span
                        key={term}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#F5F7FA]/62"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

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

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5 flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/70"
                  >
                    <span>{service.reveal}</span>
                    <ChevronRight size={14} className="text-[#4DA3FF]" />
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
