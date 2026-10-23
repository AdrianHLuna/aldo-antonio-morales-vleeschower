import { MapPin, ExternalLink } from "lucide-react";

interface MapFacadeProps {
  address: string;
  whatsapp?: string;
  city?: string;
  state?: string;
  geo?: { latitude: number; longitude: number };
  googleMapsUrl?: string;
}

/**
 * Mapa de Google real e interactivo desde la primera carga (AGENTS.md §7,
 * decisión explícita del usuario 2026-09-24) — nunca pedir clic para "ver
 * el mapa". Sin `loading="lazy"` para evitar que se quede en blanco tras hidratación.
 * 
 * Utiliza coordenadas geográficas precisas (`geo`) con nivel de zoom calle (`z=17`)
 * para forzar que Google Maps coloque el PIN rojo exactamente sobre el consultorio,
 * evitando que la búsqueda falle por descripciones de entrecalles o cruces.
 */
export default function MapFacade({
  address,
  city = "Tuxtla Gutiérrez",
  state = "Chiapas",
  geo,
  googleMapsUrl,
}: MapFacadeProps) {
  // Las coordenadas numéricas directas garantizan el pin rojo en Google Maps
  const query = geo
    ? `${geo.latitude},${geo.longitude}`
    : "13a Avenida Norte Poniente 175, Tuxtla Gutiérrez, Chiapas";

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
  const externalMapsUrl =
    googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="relative h-[60vh] w-full bg-[var(--color-surface-soft)] md:h-[70vh]">
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación del consultorio: ${address}`}
      />
      <a
        href={externalMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="tap-target absolute left-4 top-4 z-10 inline-flex items-center gap-2 border border-[var(--color-line)] bg-white/95 px-4 py-2 text-xs font-semibold text-[var(--color-navy)] shadow-[var(--shadow-warm)] backdrop-blur-sm transition-all hover:border-[var(--color-navy)] hover:bg-white hover:shadow-[var(--shadow-warm-lg)]"
      >
        <MapPin className="h-4 w-4 text-[var(--color-gold)] shrink-0" aria-hidden="true" />
        <span>Abrir en Google Maps</span>
        <ExternalLink className="h-3.5 w-3.5 opacity-60 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
