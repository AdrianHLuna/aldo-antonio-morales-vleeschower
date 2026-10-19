import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { PhoneCall } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  `Hola, ${doctor.title} ${doctor.name}, quisiera agendar una valoración.`
)}`;

/**
 * Header "Serenidad Geriátrica" — franja de credenciales arriba (patrón
 * estándar del proyecto, AGENTS.md §3 — corregido 2026-10-15 a petición del
 * usuario, que prefería esta franja sobre la fila logo/nav en una sola
 * línea usada en el primer intento) + fila logo-izq/nav/CTA debajo. Sin
 * control de accesibilidad (quitado a petición del usuario). "Agendar
 * Valoración" va directo a WhatsApp, nunca a /contacto (AGENTS.md §7, cero
 * formularios). Textos de nav/botones siempre `whitespace-nowrap`.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
      <div className="hidden border-b border-[var(--color-line)] px-6 py-1.5 text-center md:block">
        {/* Formato exacto "Céd Prof: NNNNNNNN (SIGLAS)" (AGENTS.md §3) —
            nunca envuelto en .eyebrow-serena, que fuerza mayúsculas. */}
        <span className="credentials-serena text-[var(--color-ink-soft)]">{formatCredentials(doctor)}</span>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image
            src="/logo-icon.png"
            alt=""
            width={1224}
            height={975}
            className="h-11 w-auto shrink-0 object-contain"
            priority
          />
          <span className="hidden flex-col sm:flex">
            <span className="font-surname whitespace-nowrap text-sm leading-tight text-[var(--color-ink)]">
              {doctor.title} {doctor.name}
            </span>
            <span className="whitespace-nowrap text-xs leading-tight text-[var(--color-ink-soft)]">{doctor.specialty}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${doctor.phone}`}
            className="tap-target inline-flex items-center gap-2 whitespace-nowrap border border-[var(--color-ink)] px-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
          >
            <PhoneCall className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Llamar
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="tap-target inline-flex items-center whitespace-nowrap bg-[var(--color-navy)] px-5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-navy-dark)]"
          >
            Agendar Valoración
          </a>
        </div>

        <div className="md:hidden">
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
