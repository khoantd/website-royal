export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";
export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "vi" || value === "en";
}
