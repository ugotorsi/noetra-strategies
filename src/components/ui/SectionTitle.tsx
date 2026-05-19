import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center rounded-full border border-[#C6A96B]/45 bg-[#C6A96B]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96B]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[#F5F7FA] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-8 text-[#F5F7FA]/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
