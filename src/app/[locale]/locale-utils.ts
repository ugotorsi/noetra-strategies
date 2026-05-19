import { notFound } from "next/navigation";

import {
  defaultLocale,
  getMessages,
  isLocale,
  locales,
  type Locale,
  type Messages,
} from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/metadata";

export type LocaleRouteParams = {
  locale: string;
};

export type LocalePageProps = {
  params: Promise<LocaleRouteParams>;
};

type SeoPageKey = keyof Messages["seo"];

export function generateLocaleStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function getLocaleForPage(params: Promise<LocaleRouteParams>): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export async function getLocaleForMetadata(params: Promise<LocaleRouteParams>): Promise<Locale> {
  const { locale } = await params;

  if (isLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}

export async function getLocalizedMetadata(
  params: Promise<LocaleRouteParams>,
  pathname: string,
  seoKey: SeoPageKey,
) {
  const locale = await getLocaleForMetadata(params);
  const messages = getMessages(locale);

  return createLocalizedMetadata(locale, pathname, messages.seo[seoKey]);
}
