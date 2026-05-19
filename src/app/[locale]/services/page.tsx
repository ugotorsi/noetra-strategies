import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MethodSection } from "@/components/sections/MethodSection";
import { OperationalCapabilities } from "@/components/sections/OperationalCapabilities";
import { ServicesSection } from "@/components/sections/ServicesSection";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/services", "services");
}

export default async function ServicesPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <ServicesSection locale={locale} />
      <OperationalCapabilities locale={locale} />
      <MethodSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
