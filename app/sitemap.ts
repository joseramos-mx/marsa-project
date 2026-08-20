import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const SITE_URL = "https://marsaproject.com";

/** Rutas bilingues: existen en /es y /en. */
const LOCALIZED_ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/aviso-de-privacidad", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terminos-y-condiciones", priority: 0.3, changeFrequency: "yearly" as const },
];

/**
 * Landings de Google Ads. Solo existen en español: su keyword objetivo es
 * local ("... en Toluca"), asi que no se generan variantes en ingles ni
 * alternates hreflang que apunten a paginas inexistentes.
 */
const LANDING_ROUTES = [
  "/implantes-dentales-toluca",
];

const localeToHref = (locale: string, path: string) =>
  locale === routing.defaultLocale
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;

const localeToHreflang = (locale: string) =>
  locale === "es" ? "es-MX" : "en-US";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localized = LOCALIZED_ROUTES.flatMap(({ path, priority, changeFrequency }) =>
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

  const landings = LANDING_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
    alternates: {
      languages: {
        "es-MX": `${SITE_URL}${path}`,
        "x-default": `${SITE_URL}${path}`,
      },
    },
  }));

  return [...localized, ...landings];
}
