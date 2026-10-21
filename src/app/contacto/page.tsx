import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, CreditCard, AlertTriangle, ShieldCheck } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

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

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}, quisiera agendar una valoración geriátrica.`
  )}`;

  return (
    <div className="pb-20">
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        <header className="mt-4 mb-10 text-center">
          <p className="eyebrow-serena text-[var(--color-navy)]">Atención Médica Personalizada</p>
          <h1 className="mt-2 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
            Contacto y Citas Médicas
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--color-ink-soft)]">
            Comuníquese directamente con el consultorio del {doctor.title} {doctor.name} ({doctor.specialistTitle || doctor.specialty})
            en {doctor.city}, Chiapas, para coordinar consultas de primera vez, seguimiento o visitas domiciliarias.
          </p>
        </header>
      </div>

      <MapFacade address={`${doctor.address}, ${doctor.city}, ${doctor.state}`} whatsapp={doctor.whatsapp} />

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <p className="eyebrow-serena text-[var(--color-navy)]">Horarios de Consulta</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-ink)]">
              <Clock className="h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
              <span>{doctor.schedule}</span>
            </p>
            <p className="mt-3 border-t border-[var(--color-line)] pt-3 text-xs text-[var(--color-ink-soft)]">
              Atención programada previa cita para asegurar el tiempo requerido por cada paciente adulto mayor.
            </p>
          </div>

          <div className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <p className="eyebrow-serena text-[var(--color-navy)]">Ubicación del Consultorio</p>
            <p className="mt-2 flex items-start gap-2 text-sm text-[var(--color-ink)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
              <span>{doctor.address}, {doctor.city}, {doctor.state}, México.</span>
            </p>
            <p className="mt-3 border-t border-[var(--color-line)] pt-3 text-xs text-[var(--color-ink-soft)]">
              Instalaciones con accesibilidad y elevador para pacientes con movilidad asistida o silla de ruedas.
            </p>
          </div>

          <div className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <p className="eyebrow-serena text-[var(--color-navy)]">Canales Directos</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a href={`tel:${doctor.phone}`} className="flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-navy)] font-medium">
                  <Phone className="h-4 w-4 text-[var(--color-navy)]" aria-hidden="true" />
                  <span>Tel: {doctor.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[var(--color-ink)] hover:text-[var(--color-navy)] font-medium"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                  <span>WhatsApp de Citas</span>
                </a>
              </li>
              <li className="text-xs text-[var(--color-ink-soft)] pt-1 border-t border-[var(--color-line)]">
                Email: {doctor.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de Honorarios y Pagos */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-6">
            <div className="flex items-center gap-2 text-[var(--color-navy)]">
              <CreditCard className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-heading text-lg text-[var(--color-ink)]">Honorarios y Facturación</h2>
            </div>
            <p className="mt-2 text-2xl font-bold text-[var(--color-navy)]">
              ${doctor.consultationPrice.toLocaleString("es-MX")} <span className="text-sm font-normal text-[var(--color-ink-soft)]">MXN</span>
            </p>
            <p className="mt-1 text-xs text-[var(--color-ink-soft)]">
              Aplica para consulta de primera vez y valoraciones geriátricas subsecuentes en consultorio.
            </p>
            <p className="mt-1.5 text-xs text-[var(--color-navy)] font-medium">
              Consulta geriátrica a domicilio: $1,200 MXN (primer cuadro de Tuxtla Gutiérrez).
            </p>
            <div className="mt-4 border-t border-[var(--color-line)] pt-3">
              <p className="text-xs font-semibold text-[var(--color-ink)]">Formas de pago aceptadas:</p>
              <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{doctor.paymentMethods.join(", ")}.</p>
              {doctor.insurances && (
                <p className="mt-2 text-xs text-[var(--color-ink-soft)]">
                  Aseguradoras y convenios de reembolso: {doctor.insurances.join(", ")}.
                </p>
              )}
            </div>
          </div>

          <div className="border-2 border-red-200 bg-red-50 p-6">
            <div className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <h2 className="font-heading text-lg font-bold">Atención de Urgencias Médicas</h2>
            </div>
            <p className="mt-2 text-xs text-red-900 leading-relaxed">
              En caso de síntomas graves como dolor torácico opresivo, pérdida súbita del habla, parálisis facial o de extremidades,
              dificultad respiratoria aguda o pérdida del estado de alerta, <strong>no espere confirmación de cita</strong>:
              traslade al paciente de inmediato a la sala de urgencias del hospital más cercano o llame al <strong>911</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
