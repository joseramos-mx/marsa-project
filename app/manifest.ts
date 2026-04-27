import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marsa Project — Odontología Estética",
    short_name: "Marsa Project",
    description:
      "Clínica especializada en odontología estética y medicina estética. Blanqueamiento, carillas, diseño de sonrisa e implantes.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#EAB308",
    lang: "es",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      // agrega icon-192.png e icon-512.png en /public para PWA completa
    ],
    categories: ["health", "medical", "beauty"],
  };
}
