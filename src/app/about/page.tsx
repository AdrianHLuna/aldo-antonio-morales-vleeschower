import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Award, BookOpen, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Breadcrumbs from "@/components/Breadcrumbs";
import DoctorPortrait from "@/components/DoctorPortrait";

export const metadata: Metadata = {
  title: "Sobre el Doctor — Dr. Aldo Antonio Morales Vleeschower",
  description: `Conozca la trayectoria del Dr. Aldo Antonio Morales Vleeschower, médico especialista en Medicina Interna y Geriatría en Tuxtla Gutiérrez, Chiapas. Más de 20 años de experiencia clínica.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre el Dr. Aldo Antonio Morales Vleeschower — Geriatría y Medicina Interna",
    description: "Trayectoria, credenciales y filosofía de atención médica geriátrica en Tuxtla Gutiérrez, Chiapas.",
    url: "/about",
    type: "profile",
    images: [{ url: doctor.photo, width: 800, height: 800, alt: `${doctor.title} ${doctor.name}` }],
  },
};

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}, quisiera agendar una valoración geriátrica.`
  )}`;

  return (
    <div className="pb-20">
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Sobre el Doctor" }]} />

        <header className="mt-6 mb-12 text-center">
          <p className="eyebrow-serena text-[var(--color-navy)]">{doctor.specialistTitle || doctor.specialty}</p>
          <h1 className="mt-2 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
            {doctor.title} {doctor.name}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--color-ink-soft)]">
            {formatCredentials(doctor)} — Más de dos décadas dedicadas al diagnóstico, tratamiento y acompañamiento
            del adulto mayor y su familia en {doctor.city}, Chiapas.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr]">
          <div>
            <div className="arch-frame relative h-96 w-full overflow-hidden border border-[var(--color-line)] bg-white shadow-[var(--shadow-warm)]">
              <DoctorPortrait src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} className="h-full w-full" priority />
            </div>

            <div className="mt-6 border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-6 text-sm">
              <h2 className="eyebrow-serena text-[var(--color-navy)]">Datos de Contacto Rápido</h2>
              <ul className="mt-4 space-y-3 text-[var(--color-ink)]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                  <span>{doctor.address}, {doctor.city}, {doctor.state}.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                  <span>{doctor.schedule}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                  <span>{doctor.phone}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="tap-target inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] px-4 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[var(--color-navy-dark)]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Directo
                </a>
                <Link
                  href="/contacto"
                  className="tap-target inline-flex items-center justify-center gap-2 border border-[var(--color-line)] bg-white px-4 text-xs font-semibold text-[var(--color-ink)] hover:border-[var(--color-navy)]"
                >
                  Información de Cita
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-[var(--color-ink)]/90">
            <div>
              <h2 className="font-heading text-2xl text-[var(--color-ink)]">Filosofía de Atención Clínica</h2>
              <blockquote className="mt-3 border-l-4 border-[var(--color-gold)] pl-4 italic text-lg text-[var(--color-ink-soft)]">
                &ldquo;{doctor.philosophy}&rdquo;
              </blockquote>
              <p className="mt-4 leading-relaxed">{doctor.bio}</p>
            </div>

            <div className="border-t border-[var(--color-line)] pt-8">
              <h2 className="flex items-center gap-2 font-heading text-xl text-[var(--color-ink)]">
                <BookOpen className="h-5 w-5 text-[var(--color-navy)]" aria-hidden="true" />
                Formación Médica y Académica
              </h2>
              <div className="mt-4 space-y-3">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="border border-[var(--color-line)] bg-white p-4">
                    <p className="font-semibold text-[var(--color-ink)]">{edu.degree}</p>
                    <p className="text-sm text-[var(--color-ink-soft)]">
                      {edu.institution} {edu.year && `· ${edu.year}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--color-line)] pt-8">
              <h2 className="flex items-center gap-2 font-heading text-xl text-[var(--color-ink)]">
                <Award className="h-5 w-5 text-[var(--color-gold)]" aria-hidden="true" />
                Certificaciones y Membresías
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {doctor.certifications.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-navy)]" aria-hidden="true" />
                    <div>
                      <span className="font-medium text-[var(--color-ink)]">{c.name}</span>
                      <span className="text-[var(--color-ink-soft)]"> — {c.institution}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--color-line)] pt-8">
              <h2 className="font-heading text-xl text-[var(--color-ink)]">Trayectoria Profesional</h2>
              <div className="mt-4 divide-y divide-[var(--color-line)]">
                {doctor.experience.map((exp, idx) => (
                  <div key={idx} className="py-4 first:pt-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-semibold text-[var(--color-ink)]">{exp.title}</h3>
                      <span className="eyebrow-serena text-xs text-[var(--color-navy)]">{exp.year}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-[var(--color-ink-soft)] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
