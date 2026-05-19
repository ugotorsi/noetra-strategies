import type { Metadata } from "next";
import { Bot, FileSearch, Gavel, Radar, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(77,163,255,0.13),transparent_52%),linear-gradient(120deg,transparent,rgba(77,163,255,0.06),transparent)]" />

        <Container className="relative space-y-10">
          <SectionTitle
            eyebrow={messages.eyebrow}
            title={messages.title}
            description={messages.description}
          />

          <Card className="relative overflow-hidden border-[#4DA3FF]/35 bg-[#0B0F14]/70 p-6">
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(77,163,255,0.14),transparent_58%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">
                {messages.domainLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.domains.noetralex.map((domain) => (
                  <a
                    key={domain}
                    href={`https://${domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#4DA3FF]/35 bg-[#4DA3FF]/12 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/80 transition hover:border-[#4DA3FF]/65 hover:text-white"
                  >
                    {domain}
                  </a>
                ))}
              </div>
              <p className="text-sm leading-7 text-[#F5F7FA]/68">{messages.domainsNote}</p>
            </div>
          </Card>

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

          <Card className="relative overflow-hidden border-[#4DA3FF]/30 bg-[#0A1018]/85 p-6">
            <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(77,163,255,0.12),transparent_55%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">{messages.workflowTitle}</p>
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                {messages.workflowNodes.map((node, index) => (
                  <div key={node} className="contents">
                    <div className="rounded-xl border border-white/12 bg-[#111827]/65 px-4 py-3 text-sm uppercase tracking-[0.12em] text-[#F5F7FA]/78">
                      {node}
                    </div>
                    {index < 2 ? (
                      <span className="mx-auto h-px w-8 bg-gradient-to-r from-[#4DA3FF]/20 via-[#4DA3FF] to-[#4DA3FF]/20" />
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/58">{messages.neuralLabel}</p>
            </div>
          </Card>

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
