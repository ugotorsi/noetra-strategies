import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/contact", "contact");
}

export default async function ContactPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <ContactSection locale={locale} />
      <Container className="pb-8">
        <LegalDisclaimer locale={locale} />
      </Container>
      <Footer locale={locale} />
    </main>
  );
}
