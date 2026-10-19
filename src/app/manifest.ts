import type { MetadataRoute } from "next";
import { doctor } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    short_name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio.substring(0, 160),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#163354",
    icons: [{ src: "/logo-icon.png", sizes: "1224x975", type: "image/png" }],
  };
}
