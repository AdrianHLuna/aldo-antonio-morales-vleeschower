import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        <header className="mt-4 mb-10 text-center">
          <p className="eyebrow-serena text-[var(--color-navy)]">Agenda tu Cita</p>
          <h1 className="mt-2 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">Contacto</h1>
        </header>
      </div>

      <MapFacade address={`${doctor.address}, ${doctor.city}, ${doctor.state}`} whatsapp={doctor.whatsapp} />

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border border-[var(--color-line)] bg-white p-6">
            <p className="eyebrow-serena text-[var(--color-navy)]">Horario</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-ink)]">
              <Clock className="h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
              {doctor.schedule}
            </p>
          </div>

          <div className="border border-[var(--color-line)] bg-white p-6">
            <p className="eyebrow-serena text-[var(--color-navy)]">Ubicación</p>
            <p className="mt-2 flex items-start gap-2 text-sm text-[var(--color-ink)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
              <span>{doctor.address}, {doctor.city}, {doctor.state}.</span>
            </p>
          </div>

          <div className="border border-[var(--color-line)] bg-white p-6">
            <p className="eyebrow-serena text-[var(--color-navy)]">Contacto directo</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-navy)]">
                  <Phone className="h-4 w-4 text-[var(--color-navy)]" aria-hidden="true" />
                  {doctor.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-navy)]"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--color-navy)]" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
