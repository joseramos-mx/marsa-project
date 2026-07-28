import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marsa Project — Dentista en Toluca",
    short_name: "Marsa Project",
    description:
      "Clínica dental en Toluca especializada en rehabilitación oral, implantes, carillas, diseño de sonrisa y urgencias dentales.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0c",
    theme_color: "#0c0c0c",
    lang: "es",
    icons: [
      { src: "/favicon/favicon.ico",                 sizes: "any",     type: "image/x-icon" },
      { src: "/favicon/favicon-16x16.png",           sizes: "16x16",   type: "image/png"    },
      { src: "/favicon/favicon-32x32.png",           sizes: "32x32",   type: "image/png"    },
      { src: "/favicon/android-chrome-192x192.png",  sizes: "192x192", type: "image/png"    },
      { src: "/favicon/android-chrome-512x512.png",  sizes: "512x512", type: "image/png"    },
      { src: "/favicon/apple-touch-icon.png",        sizes: "180x180", type: "image/png"    },
    ],
    categories: ["health", "medical"],
  };
}
