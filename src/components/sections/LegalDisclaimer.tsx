import { cn } from "@/lib/utils";

type LegalDisclaimerProps = {
  className?: string;
  compact?: boolean;
};

export function LegalDisclaimer({ className, compact = false }: LegalDisclaimerProps) {
  return (
    <section className={cn("relative", className)} aria-label="Regulatory disclaimer">
      <div
        className={cn(
          "rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-lg",
          compact ? "p-4 sm:p-5" : "p-6 sm:p-8",
        )}
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#C6A96B]">
          Regulatory & Professional Disclaimer
        </p>
        <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
          Activities reserved by law to licensed professionals are performed
          exclusively by duly authorized professionals operating with full
          technical, professional and ethical independence pursuant to
          applicable regulations.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/72">
          The assignment of legal representation and professional mandates is
          conferred directly by the client to the appointed professional.
        </p>
      </div>
    </section>
  );
}
