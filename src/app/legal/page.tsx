import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Legal and corporate information for NOETRA STRATEGIES strategic advisory platform.",
  alternates: {
    canonical: "/legal",
  },
};

const legalRows = [
  { label: "Registered Office", value: "Italy" },
  { label: "VAT Number", value: "[PLACEHOLDER]" },
  { label: "REA", value: "[PLACEHOLDER]" },
  { label: "PEC", value: "[PLACEHOLDER]" },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar />

      <section className="relative py-24 sm:py-28">
        <div className="section-transition-glow absolute inset-x-0 top-0" />
        <Container className="space-y-10">
          <SectionTitle
            eyebrow="Legal"
            title="Legal Information"
            description="Institutional legal and corporate information placeholders for public disclosure."
          />

          <Card className="border-white/12 p-6 sm:p-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#F5F7FA]">
                NOETRA STRATEGIES s.r.l.s.
              </p>

              <div className="divide-y divide-white/10">
                {legalRows.map((row) => (
                  <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[0.3fr_0.7fr]">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#F5F7FA]/78">{row.value}</p>
                  </div>
                ))}

                <div className="grid gap-2 py-4 sm:grid-cols-[0.3fr_0.7fr]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/55">Email</p>
                  <Link
                    href="mailto:info@noetra.it"
                    className="text-sm text-[#F5F7FA]/78 transition hover:text-white"
                  >
                    info@noetra.it
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <LegalDisclaimer className="max-w-4xl" />
        </Container>
      </section>

      <Footer />
    </main>
  );
}
