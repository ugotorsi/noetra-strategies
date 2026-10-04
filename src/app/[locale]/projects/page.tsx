import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

import { getLocalizedMetadata, getLocaleForPage, type LocalePageProps } from "../locale-utils";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "/projects", "projects");
}

export default async function ProjectsPage({ params }: LocalePageProps) {
  const locale = await getLocaleForPage(params);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0B0F14] text-[#F5F7FA]">
      <Navbar locale={locale} />
      <ProjectsSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
