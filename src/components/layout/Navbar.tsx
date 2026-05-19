"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { getMessages, type Locale, withLocalePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { Container } from "./Container";

const navItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "innovation", path: "/innovation" },
  { key: "network", path: "/network" },
  { key: "contact", path: "/contact" },
  { key: "legal", path: "/legal" },
];

type NavbarProps = {
  locale: Locale;
};

export function Navbar({ locale }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const messages = getMessages(locale);

  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.25,
  });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-[#4DA3FF] via-[#C6A96B] to-[#4DA3FF]"
        style={{ scaleX: progress }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/72 backdrop-blur-2xl">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href={withLocalePath(locale)}
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-[#F5F7FA]"
          >
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C6A96B] shadow-[0_0_20px_rgba(198,169,107,0.9)]" />
            <span className="text-[#F5F7FA]/95 transition-colors group-hover:text-white">
              NOETRA
            </span>
            <span className="text-[#C6A96B]">STRATEGIES</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={withLocalePath(locale, item.path)}
                className="rounded-full px-4 py-2 text-sm text-[#F5F7FA]/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {messages.navigation[item.key as keyof typeof messages.navigation]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              labels={messages.languageSwitcher}
              className="hidden md:block"
            />

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F5F7FA] transition hover:bg-white/10 md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={messages.navigation.toggle}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/10 bg-[#0B0F14]/95 px-5 py-4 backdrop-blur-xl md:hidden"
            >
              <Container className="space-y-3 px-0">
                <LanguageSwitcher locale={locale} labels={messages.languageSwitcher} />

                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={withLocalePath(locale, item.path)}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium text-[#F5F7FA]/85",
                      "transition hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {messages.navigation[item.key as keyof typeof messages.navigation]}
                  </Link>
                ))}
              </Container>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
