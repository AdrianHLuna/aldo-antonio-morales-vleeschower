import type { Metadata } from "next";
import AvisoDePrivacidadPage from "../aviso-de-privacidad/page";

// Alias en inglés de "/aviso-de-privacidad" para discoverability de agentes
// (URL predecible "/privacy"). Reutiliza el mismo componente — nunca una
// copia aparte — para que nunca pueda desincronizarse del aviso legal real.
// El canonical apunta a "/aviso-de-privacidad" para consolidar la señal de
// SEO en una sola URL (bug real corregido 2026-10-19: cada página declaraba
// su propio canonical, compitiendo entre sí por el mismo contenido).
export const metadata: Metadata = {
  title: "Aviso de Privacidad — Dr. Aldo Antonio Morales Vleeschower",
  description: `Aviso de privacidad y política de protección de datos personales de la práctica médica del Dr. Aldo Antonio Morales Vleeschower en Tuxtla Gutiérrez, conforme a la LFPDPPP.`,
  alternates: { canonical: "/aviso-de-privacidad" },
  openGraph: {
    title: "Aviso de Privacidad — Dr. Aldo Antonio Morales Vleeschower",
    description: "Lineamientos de privacidad, protección de datos de salud y ejercicio de derechos ARCO conforme a la legislación mexicana.",
    url: "/aviso-de-privacidad",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <AvisoDePrivacidadPage />;
}
