import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const SITE_URL = "https://marsaproject.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l === "es" ? "es-MX" : "en-US",
          `${SITE_URL}/${l}`,
        ])
      ),
    },
  }));
}
