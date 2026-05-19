import type { Metadata } from "next";

import { getLocalizedMetadata, getLocaleForPage, generateLocaleStaticParams, type LocalePageProps } from "./locale-utils";

export function generateStaticParams() {
  return generateLocaleStaticParams();
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  return getLocalizedMetadata(params, "", "home");
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  await getLocaleForPage(params);

  return children;
}
