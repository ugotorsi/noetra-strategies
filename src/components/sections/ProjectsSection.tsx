import { ArrowUpRight, CheckCircle2, FolderKanban } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getMessages, type Locale } from "@/lib/i18n";

const RESERVED_AREA_URL = "https://app.noetra.it";

type ProjectsSectionProps = {
  locale: Locale;
};

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const messages = getMessages(locale).sections.projects;

  return (
    <section className="relative py-24 sm:py-28">
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <Container className="space-y-14">
        <SectionTitle
          eyebrow={messages.eyebrow}
          title={messages.title}
          description={messages.description}
        />

        <Card highlight className="p-7 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#4DA3FF]">
                <FolderKanban className="h-4 w-4" aria-hidden="true" />
                {messages.projectLabel}
              </p>
              <h2 className="mt-4 text-2xl font-semibold uppercase tracking-[0.08em] text-[#F5F7FA] sm:text-3xl">
                {messages.name}
              </h2>
            </div>
            <span className="w-fit rounded-full border border-[#C6A96B]/45 bg-[#C6A96B]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A96B]">
              {messages.status}
            </span>
          </div>

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#F5F7FA]/82 sm:text-lg">
            {messages.summary}
          </p>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5F7FA]">
                {messages.capabilitiesTitle}
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {messages.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm leading-6 text-[#F5F7FA]/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4DA3FF]" aria-hidden="true" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#4DA3FF]/25 bg-[#4DA3FF]/[0.06] p-5">
                <p className="text-sm leading-7 text-[#F5F7FA]/76">
                  {messages.developmentNote}
                </p>
              </div>
              <div className="rounded-xl border border-[#C6A96B]/30 bg-[#C6A96B]/[0.06] p-5">
                <p className="text-sm font-medium leading-7 text-[#F5F7FA]/86">
                  {messages.humanOversight}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[#F5F7FA]/68">
              {messages.ownership}
            </p>
            <a
              href={RESERVED_AREA_URL}
              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full border border-[#C6A96B]/45 bg-[#C6A96B]/10 px-5 py-2.5 text-sm font-medium text-[#F5F7FA] transition hover:border-[#C6A96B]/70 hover:bg-[#C6A96B]/15"
            >
              {messages.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
}
