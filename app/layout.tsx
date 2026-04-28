import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/seo/JsonLd";
import SmoothScrolling from "./components/SmoothScrolling";
import FloatingButtons from "./components/FloatingButtons";

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
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

/* ── Replace with your production domain ── */
const SITE_URL = "https://marsaproject.com";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Marsa Project | Odontología Estética y Medicina Estética",
    template: "%s | Marsa Project",
  },

  description:
    "Clínica especializada en odontología estética y medicina estética. Blanqueamiento dental, carillas de porcelana, diseño de sonrisa, ortodoncia invisible e implantes dentales. Consulta gratuita — resultados naturales y seguros.",

  keywords: [
    "odontología estética",
    "medicina estética",
    "blanqueamiento dental",
    "carillas de porcelana",
    "diseño de sonrisa",
    "ortodoncia invisible",
    "implantes dentales",
    "marsa project",
    "dentista estético",
    "clínica dental de lujo",
    "consulta dental gratuita",
  ],

  authors: [{ name: "Marsa Project", url: SITE_URL }],
  creator: "Marsa Project",
  publisher: "Marsa Project",

  alternates: {
    canonical: "/",
    languages: { "es-MX": "/" },
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Marsa Project",
    title: "Marsa Project | Odontología Estética y Medicina Estética",
    description:
      "Especialistas en blanqueamiento dental, carillas, diseño de sonrisa e implantes. Tecnología avanzada, resultados naturales. ¡Agenda tu consulta gratuita!",
    images: [
      {
        url: "/og-image.jpg",   // 1200×630 — agrega esta imagen a /public
        width: 1200,
        height: 630,
        alt: "Marsa Project — Odontología Estética y Medicina Estética",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marsa Project | Odontología Estética y Medicina Estética",
    description:
      "Blanqueamiento dental, carillas, diseño de sonrisa e implantes con tecnología avanzada. Consulta gratuita.",
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

  /* ── Paste your verification codes here when you get them ── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
    // bing: "REPLACE_WITH_BING_WEBMASTER_CODE",
  },

  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SmoothScrolling>
          <JsonLd siteUrl={SITE_URL} />
          {children}
          <FloatingButtons />
        </SmoothScrolling>
      </body>
    </html>
  );
}
