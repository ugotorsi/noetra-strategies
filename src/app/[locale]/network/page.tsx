import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { LegalDisclaimer } from "@/components/sections/LegalDisclaimer";
import { NetworkSection } from "@/components/sections/NetworkSection";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/network", "network");
}

export default async function NetworkPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <NetworkSection locale={locale} />
      <Container className="pb-8">
        <LegalDisclaimer locale={locale} />
      </Container>
      <Footer locale={locale} />
    </main>
  );
}
