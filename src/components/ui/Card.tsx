import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  highlight?: boolean;
};

export function Card({ className, highlight = false, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_60px_-30px_rgba(0,0,0,0.8)]",
        "hover:-translate-y-1 hover:border-[#4DA3FF]/35 hover:bg-white/[0.06]",
        highlight && "border-[#C6A96B]/45 hover:border-[#C6A96B]/60",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(77,163,255,0.14),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="relative z-10">{props.children}</div>
    </article>
  );
}
