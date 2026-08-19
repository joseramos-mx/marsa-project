import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const SITE_URL = "https://marsaproject.com";

/** Rutas estáticas indexables, con su prioridad relativa. */
const ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/aviso-de-privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terminos-y-condiciones", priority: 0.3, changeFrequency: "yearly" as const },
];

const localeToHref = (locale: string, path: string) =>
  locale === routing.defaultLocale
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;

const localeToHreflang = (locale: string) =>
  locale === "es" ? "es-MX" : "en-US";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: localeToHref(locale, path),
      lastModified,
      changeFrequency,
      priority: locale === routing.defaultLocale ? priority : priority - 0.1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [localeToHreflang(l), localeToHref(l, path)])
        ),
      },
    }))
  );
}
