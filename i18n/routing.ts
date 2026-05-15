import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // Default locale (es) serves at "/" (no redirect); other locales use prefix
  localePrefix: "as-needed",
});
