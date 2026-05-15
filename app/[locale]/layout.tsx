import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import JsonLd from "../components/seo/JsonLd";
import SmoothScrolling from "../components/SmoothScrolling";
import FloatingButtons from "../components/FloatingButtons";
import { routing } from "../../i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

const SITE_URL = "https://marsaproject.com";

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogLocale = locale === "en" ? "en_US" : "es_MX";

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    authors: [{ name: "Marsa Project", url: SITE_URL }],
    creator: "Marsa Project",
    publisher: "Marsa Project",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "es-MX": "/es",
        "en-US": "/en",
        "x-default": "/es",
      },
    },
    icons: {
      icon: [
        { url: "/favicon/favicon.ico",       sizes: "any",   type: "image/x-icon" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "icon", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { rel: "icon", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${SITE_URL}/${locale}`,
      siteName: "Marsa Project",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "rgFyeP5KqEFkWyLDJytbWd9TWzUcvwCyTD3HeQNnJiI",
    },
    category: "health",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} h-full antialiased bg-[#0c0c0c]`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider>
          <SmoothScrolling>
            <JsonLd siteUrl={SITE_URL} locale={locale} />
            {children}
            <FloatingButtons />
          </SmoothScrolling>
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
