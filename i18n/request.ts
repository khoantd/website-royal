import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const preferred = header.split(",").map((part) => part.split(";")[0]?.trim().toLowerCase() ?? "");
  for (const tag of preferred) {
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("vi")) return "vi";
  }
  return defaultLocale;
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  const headerStore = await headers();
  const locale = isLocale(raw) ? raw : localeFromAcceptLanguage(headerStore.get("accept-language"));

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
