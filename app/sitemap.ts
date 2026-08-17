import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const SITE_URL = "https://marsaproject.com";

const localeToHref = (locale: string) =>
  locale === routing.defaultLocale ? `${SITE_URL}` : `${SITE_URL}/${locale}`;

const localeToHreflang = (locale: string) =>
  locale === "es" ? "es-MX" : "en-US";

export default function sitemap(): MetadataRoute.Sitemap {
  const localeEntries = routing.locales.map((locale) => ({
    url: localeToHref(locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [localeToHreflang(l), localeToHref(l)])
      ),
    },
  }));

  const landings = [
    {
      url: `${SITE_URL}/implantes-dentales-toluca`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          "es-MX": `${SITE_URL}/implantes-dentales-toluca`,
          "x-default": `${SITE_URL}/implantes-dentales-toluca`,
        },
      },
    },
  ];

  return [...localeEntries, ...landings];
}
