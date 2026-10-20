import type { Metadata } from "next";
import ContactPage from "../contacto/page";

// Alias en inglés de "/contacto" para discoverability de agentes (URL
// predecible "/contact"). Reutiliza el mismo componente — nunca una copia
// traducida aparte — para que nunca pueda desincronizarse ni quedar en
// inglés en un sitio es-MX (bug real encontrado y corregido 2026-10-19: la
// primera versión generada por una herramienta externa tenía toda la página
// en inglés y declaraba su propio canonical, compitiendo por indexación con
// "/contacto"). El canonical apunta a "/contacto" para consolidar la señal
// de SEO en una sola URL.
export const metadata: Metadata = {
  title: "Contacto y Citas — Dr. Aldo Antonio Morales Vleeschower",
  description: `Agende su consulta médica con el Dr. Aldo Antonio Morales Vleeschower en Tuxtla Gutiérrez, Chiapas. Teléfono, WhatsApp, ubicación del consultorio, horarios y honorarios.`,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto y Citas — Dr. Aldo Antonio Morales Vleeschower",
    description: "Información directa para agendar consulta presencial o a domicilio en Tuxtla Gutiérrez, Chiapas.",
    url: "/contacto",
    type: "website",
  },
};

export default function EnglishContactPage() {
  return <ContactPage />;
}
