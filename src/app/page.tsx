import type { Metadata } from "next";
import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, Phone, MessageCircle, MapPin, HeartPulse, CheckCircle2 } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import DoctorPortrait from "@/components/DoctorPortrait";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Dr. Aldo Antonio Morales Vleeschower — Geriatría y Medicina Interna en Tuxtla Gutiérrez",
  description: `Dr. Aldo Antonio Morales Vleeschower, médico internista y geriatra en Tuxtla Gutiérrez, Chiapas. Consulta especializada en valoración geriátrica integral, control de hipertensión, diabetes, demencia y consulta a domicilio.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Aldo Antonio Morales Vleeschower — Geriatría y Medicina Interna en Tuxtla Gutiérrez",
    description: "Consulta médica especializada en geriatría y medicina interna en Tuxtla Gutiérrez, Chiapas. Valoración geriátrica integral y atención al adulto mayor.",
    url: "/",
    siteName: "Dr. Aldo Antonio Morales Vleeschower",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "Dr. Aldo Antonio Morales Vleeschower — Geriatría y Medicina Interna",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PREVIEW_COUNT = 6;

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}, quisiera agendar una valoración.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* ─── HERO: texto centrado + panel de foto completo debajo con
          tarjetas flotantes — dirección "Serenidad Geriátrica" (paleta y
          estilo de tarjeta tomados de una referencia de diseño, estructura
          de la página es la estándar del proyecto, AGENTS.md §1.2) ─── */}
      <section className="flex min-h-screen flex-col justify-center border-b border-[var(--color-line)] bg-[var(--color-surface-soft)] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow-serena inline-block border border-[var(--color-navy)]/40 bg-white px-3 py-1.5 text-[var(--color-navy)]">
            {doctor.city}, {doctor.state} · {doctor.specialistTitle || doctor.specialty}
          </span>
          <h1 className="mt-5 font-heading text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            <span className="block font-heading text-xl text-[var(--color-navy)] mb-2 sm:text-2xl font-semibold tracking-tight">
              Dr. Aldo Antonio Morales Vleeschower · Geriatría y Medicina Interna
            </span>
            Cuidar la plenitud de los años con dignidad, paciencia y ciencia médica.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--color-ink-soft)]">
            Medicina interna con subespecialidad en geriatría en {doctor.city}: valoración geriátrica integral,
            manejo multidisciplinario de enfermedades crónicas, acompañamiento familiar y consulta a domicilio
            con el Dr. Aldo Antonio Morales Vleeschower.
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-[340px] w-full max-w-5xl overflow-hidden rounded-xl border border-[var(--color-line)] sm:h-[420px]">
          <DoctorPortrait src="/placeholder-hero.jpg" alt="Acompañamiento geriátrico" className="h-full w-full" priority />

          <div className="absolute left-4 top-4 flex items-center gap-2 bg-white/95 px-3 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-[var(--shadow-warm)]">
            <HeartPulse className="h-4 w-4 text-[var(--color-navy)]" aria-hidden="true" />
            Más de 20 años de experiencia
          </div>

          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 sm:inset-x-auto sm:right-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target inline-flex items-center justify-center gap-1.5 bg-[var(--color-navy)] px-5 text-xs font-semibold uppercase tracking-wide text-white shadow-[var(--shadow-warm-lg)] hover:bg-[var(--color-navy-dark)]"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="tap-target inline-flex items-center justify-center gap-1.5 border border-[var(--color-line)] bg-white px-5 text-xs font-semibold text-[var(--color-ink)] shadow-[var(--shadow-warm)] hover:border-[var(--color-navy)]"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              Llamar
            </a>
          </div>
        </div>
      </section>

      {/* ─── BARRA DE ESTADÍSTICAS ─── */}
      {doctor.stats && doctor.stats.length > 0 && (
        <section className="border-b border-[var(--color-line)] bg-white">
          <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {doctor.stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <p className="font-heading text-3xl text-[var(--color-navy)]">{stat.value}</p>
                <p className="eyebrow-serena mt-2 text-[var(--color-ink-soft)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── SOBRE EL DOCTOR ─── */}
      <section className="border-b border-[var(--color-line)] bg-white px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <div className="arch-frame relative h-80 w-full overflow-hidden border border-[var(--color-line)] bg-white">
              <DoctorPortrait src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} className="h-full w-full" priority />
            </div>
          </div>
          <div>
            <p className="eyebrow-serena text-[var(--color-navy)]">{doctor.specialistTitle}</p>
            <h2 className="font-surname mt-2 text-2xl text-[var(--color-ink)] sm:text-3xl">
              {doctor.title} {doctor.name}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{formatCredentials(doctor)}</p>
            <p className="mt-4 border-l-2 border-[var(--color-gold)] pl-4 italic text-[var(--color-ink-soft)]">
              &ldquo;{doctor.philosophy}&rdquo;
            </p>
            <p className="mt-5 text-[var(--color-ink)]/90">{doctor.bio}</p>

            {doctor.certifications.length > 0 && (
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-ink)]/85">
                {doctor.certifications.map((c) => (
                  <li key={c.name} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-2 border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                <span>Consultorio en {doctor.city}, {doctor.state}.</span>
              </div>
              <div className="flex items-start gap-2 border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                <span>{doctor.schedule}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATÁLOGO DE ENFERMEDADES ─── */}
      <section id="enfermedades" className="border-b border-[var(--color-line)] bg-[var(--color-surface-soft)] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-serena text-[var(--color-navy)]">Guía Clínica</p>
              <h2 className="mt-1 font-heading text-2xl text-[var(--color-ink)] sm:text-3xl">Condiciones que Atendemos</h2>
            </div>
            <Link href="/enfermedades" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-navy)] hover:underline">
              Ver todas ({diseases.length})
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.slice(0, PREVIEW_COUNT).map((disease) => (
              <EntityCard
                key={disease.id}
                title={disease.name}
                description={disease.description}
                href={`/enfermedades/${disease.slug}` as Route}
                image={disease.image}
                tag="Condición"
                iconKey="condition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="border-b border-[var(--color-line)] bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-serena text-[var(--color-gold)]">Práctica Médica Especializada</p>
              <h2 className="mt-1 font-heading text-2xl text-[var(--color-ink)] sm:text-3xl">Servicios</h2>
            </div>
            <Link href="/servicios" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)] hover:underline">
              Ver todos ({services.length})
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, PREVIEW_COUNT).map((service) => (
              <EntityCard
                key={service.id}
                title={service.name}
                description={service.description}
                href={`/servicios/${service.slug}` as Route}
                image={service.image}
                tag="Servicio"
                iconKey="service"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SÍNTOMAS ─── */}
      <section id="sintomas" className="border-b border-[var(--color-line)] bg-[var(--color-surface-soft)] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow-serena text-[var(--color-navy)]">Orientación al Paciente</p>
              <h2 className="mt-1 font-heading text-2xl text-[var(--color-ink)] sm:text-3xl">Síntomas Frecuentes</h2>
            </div>
            <Link href="/sintomas" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-navy)] hover:underline">
              Ver todos ({symptoms.length})
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.slice(0, PREVIEW_COUNT).map((symptom) => (
              <EntityCard
                key={symptom.id}
                title={symptom.name}
                description={symptom.description}
                href={`/sintomas/${symptom.slug}` as Route}
                image={symptom.image}
                tag="Síntoma"
                iconKey="symptom"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRECIO Y FORMA DE PAGO ─── */}
      <section className="border-b border-[var(--color-line)] bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 border border-[var(--color-navy)]/30 bg-[var(--color-surface-soft)] p-8 shadow-[var(--shadow-warm)] sm:grid-cols-2 sm:p-10">
            <div>
              <p className="eyebrow-serena text-[var(--color-navy)]">Honorarios</p>
              <h2 className="mt-2 font-heading text-3xl text-[var(--color-ink)]">
                ${doctor.consultationPrice.toLocaleString("es-MX")} <span className="text-lg text-[var(--color-ink-soft)]">MXN</span>
              </h2>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">Consulta de primera vez y seguimiento.</p>
              {doctor.insurances && (
                <p className="mt-4 border-t border-[var(--color-line)] pt-4 text-xs text-[var(--color-ink-soft)]">{doctor.insurances.join(", ")}.</p>
              )}
            </div>
            <div>
              <p className="eyebrow-serena text-[var(--color-navy)]">Métodos de Pago</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-ink)]">
                {doctor.paymentMethods.map((method) => (
                  <li key={method} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="bg-[var(--color-ink)] px-6 py-16 text-center text-white">
        <p className="eyebrow-serena text-[var(--color-gold)]">Atención Integral</p>
        <h2 className="mx-auto mt-2 max-w-xl font-heading text-2xl sm:text-3xl">Agenda tu consulta</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
          Escribe por WhatsApp o llama directamente al consultorio en {doctor.city}.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="tap-target inline-flex items-center gap-2 bg-[var(--color-gold)] px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[var(--color-gold-dark)]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={`tel:${doctor.phone}`}
            className="tap-target inline-flex items-center gap-2 border border-white/30 px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar
          </a>
        </div>
      </section>
    </>
  );
}
