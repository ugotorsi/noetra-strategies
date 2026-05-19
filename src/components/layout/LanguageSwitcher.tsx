"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { isLocale, localeCookieName, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    label: string;
    it: string;
    en: string;
  };
  className?: string;
};

const LOCALE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function buildLocalizedHref(pathname: string, search: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const pathWithoutLocale =
    segments.length > 0 && isLocale(segments[0]) ? segments.slice(1) : segments;
  const suffix = pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";

  return `/${targetLocale}${suffix}${search}`;
}

function persistLocale(targetLocale: Locale) {
  try {
    localStorage.setItem(localeCookieName, targetLocale);
  } catch {
    // Ignore storage write errors (privacy mode or restricted storage).
  }

  document.cookie = `${localeCookieName}=${targetLocale}; path=/; max-age=${LOCALE_MAX_AGE_SECONDS}; samesite=lax`;
}

export function LanguageSwitcher({ locale, labels, className }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(window.location.search);
    persistLocale(locale);
  }, [locale, pathname]);

  return (
    <div className={className} aria-label={labels.label}>
      <div className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.03] p-1">
        {locales.map((targetLocale) => {
          const href = buildLocalizedHref(pathname, search, targetLocale);
          const isActive = locale === targetLocale;
          const label = labels[targetLocale];

          return (
            <Link
              key={targetLocale}
              href={href}
              onClick={() => persistLocale(targetLocale)}
              className="relative rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.14em] text-[#F5F7FA]/75 transition-colors hover:text-white"
            >
              {isActive ? (
                <motion.span
                  layoutId="language-switcher-pill"
                  className="absolute inset-0 rounded-full border border-[#C6A96B]/45 bg-[#C6A96B]/14"
                  transition={{ type: "spring", stiffness: 360, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{label}</span>
              {isActive ? (
                <motion.span
                  layoutId="language-switcher-underline"
                  className="absolute bottom-1 left-1/2 h-px w-4 -translate-x-1/2 bg-[#C6A96B]"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
