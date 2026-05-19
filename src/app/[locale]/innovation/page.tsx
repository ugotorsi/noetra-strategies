import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AISection } from "@/components/sections/AISection";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/innovation", "innovation");
}

export default async function InnovationPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <AISection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
