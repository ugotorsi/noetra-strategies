"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./Container";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Innovation", href: "/innovation" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
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
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-[#F5F7FA]"
          >
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C6A96B] shadow-[0_0_20px_rgba(198,169,107,0.9)]" />
            <span className="text-[#F5F7FA]/95 transition-colors group-hover:text-white">
              NOETRA
            </span>
            <span className="text-[#C6A96B]">STRATEGIES</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-[#F5F7FA]/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#F5F7FA] transition hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
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
              <Container className="space-y-2 px-0">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium text-[#F5F7FA]/85",
                      "transition hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {link.label}
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
