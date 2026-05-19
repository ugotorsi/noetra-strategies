import en from "@/messages/en.json";
import it from "@/messages/it.json";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  locales,
  resolveLocale,
  type Locale,
  withLocalePath,
} from "@/lib/i18n-config";

const messagesByLocale = {
  it,
  en,
} as const;

export type Messages = (typeof messagesByLocale)[Locale];

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export {
  defaultLocale,
  isLocale,
  localeCookieName,
  locales,
  resolveLocale,
  withLocalePath,
};

export type { Locale };
