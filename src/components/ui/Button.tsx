import Link from "next/link";
import {
  type MouseEventHandler,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const variantStyles = {
  gold: "bg-[#C6A96B] text-[#0B0F14] shadow-[0_18px_35px_-18px_rgba(198,169,107,0.95)] hover:bg-[#d2b880]",
  blue: "bg-[#4DA3FF] text-[#0B0F14] shadow-[0_18px_35px_-18px_rgba(77,163,255,0.95)] hover:bg-[#67b1ff]",
  outline:
    "border border-white/20 bg-transparent text-[#F5F7FA] hover:border-[#4DA3FF]/65 hover:bg-[#4DA3FF]/12",
  ghost: "bg-white/[0.06] text-[#F5F7FA] hover:bg-white/[0.12]",
} as const;

const sizeStyles = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-7 text-sm sm:text-base",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export type ButtonProps = SharedProps;

function buildClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4DA3FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]",
    "active:scale-[0.99]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "gold";
  const size = props.size ?? "md";
  const classes = buildClasses(variant, size, props.className);

  if (typeof props.href === "string") {
    const { href, children, target, rel } = props;

    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  const { children, type, disabled, onClick } = props;

  return (
    <button
      className={classes}
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
