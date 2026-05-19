import Link from "next/link";

import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";

import { Container } from "./Container";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Innovation", href: "/innovation" },
  { label: "Network", href: "/network" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0A0E13] py-10 text-[#F5F7FA]/65">
      <Container className="space-y-7">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-[0.16em] text-[#F5F7FA]">
              NOETRA STRATEGIES s.r.l.s.
            </p>
            <p className="text-sm text-[#F5F7FA]/70">Strategic Advisory &amp; AI Innovation</p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#F5F7FA]/55">Italy</p>
          </div>

          <nav className="flex flex-wrap gap-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/12 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/70 transition hover:border-[#4DA3FF]/45 hover:text-[#F5F7FA]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/45">
          International strategic intelligence and multidisciplinary operational advisory.
        </p>
      </Container>

      <Container className="mt-7">
        <LegalDisclaimer compact className="max-w-4xl" />
      </Container>
    </footer>
  );
}
