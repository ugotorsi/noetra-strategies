import type { Metadata } from "next";
import { Bot, FileSearch, Gavel, Radar, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

const noetralexIcons = [Bot, FileSearch, Radar, Gavel, ShieldCheck];

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/noetralex", "noetralex");
}

export default async function NoetralexPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);
  const messages = getMessages(locale).noetralexPage;

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#070B12] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-28">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#4DA3FF]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#4DA3FF]/15 blur-[130px]" />

        <Container className="relative space-y-10">
          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {messages.cards.map((stack, index) => {
              const Icon = noetralexIcons[index] ?? Bot;

              return (
                <Card
                  key={stack.title}
                  className="h-full border-[#4DA3FF]/30 bg-[#0B0F14]/72 p-6 shadow-[0_0_40px_-26px_rgba(77,163,255,0.8)]"
                >
                  <Icon size={18} className="text-[#4DA3FF]" />
                  <h3 className="mt-3 text-lg font-semibold text-[#F5F7FA]">{stack.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#F5F7FA]/72">{stack.detail}</p>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="blue" size="lg" disabled>
              {messages.comingSoon}
            </Button>
            <p className="text-sm text-[#F5F7FA]/65">{messages.comingNote}</p>
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
