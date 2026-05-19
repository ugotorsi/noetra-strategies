"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building,
  FileText,
  Gavel,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

type Capability = {
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  { icon: BriefcaseBusiness },
  {
    icon: Sparkles,
  },
  {
    icon: Workflow,
  },
  {
    icon: Gavel,
  },
  {
    icon: FileText,
  },
  {
    icon: ShieldCheck,
  },
  {
    icon: Building,
  },
  {
    icon: Network,
  },
];

type OperationalCapabilitiesProps = {
  locale: Locale;
};

export function OperationalCapabilities({ locale }: OperationalCapabilitiesProps) {
  const messages = getMessages(locale).sections.capabilities;

  return (
    <section id="capabilities" className="relative py-24 sm:py-28">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-12">
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
            show: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {messages.items.map((item, index) => {
            const Icon = capabilities[index]?.icon ?? BriefcaseBusiness;

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card className="h-full border-white/12 p-5 transition-all duration-500 hover:border-[#4DA3FF]/55">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#4DA3FF]/45 bg-[#4DA3FF]/14 text-[#4DA3FF] shadow-[0_0_32px_-20px_rgba(77,163,255,0.95)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F7FA]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{item.detail}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
