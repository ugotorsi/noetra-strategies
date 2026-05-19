import { cn } from "@/lib/utils";
import { getMessages, type Locale } from "@/lib/i18n";

type LegalDisclaimerProps = {
  locale: Locale;
  className?: string;
  compact?: boolean;
};

export function LegalDisclaimer({ locale, className, compact = false }: LegalDisclaimerProps) {
  const messages = getMessages(locale).legalDisclaimer;

  return (
    <section className={cn("relative", className)} aria-label="Regulatory disclaimer">
      <div
        className={cn(
          "rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-lg",
          compact ? "p-4 sm:p-5" : "p-6 sm:p-8",
        )}
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#C6A96B]">
          {messages.title}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
          {messages.paragraphOne}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
          {messages.paragraphTwo}
        </p>
      </div>
    </section>
  );
}
