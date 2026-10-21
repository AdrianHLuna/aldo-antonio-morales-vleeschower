import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white px-6 py-14 text-sm text-[var(--color-ink-soft)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logotipo.jpg"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={2586}
            height={1632}
            className="h-28 w-auto object-contain object-left"
          />
          <p className="mt-3">
            Especialista en {doctor.specialty}. Atención integral al adulto mayor en {doctor.city}, {doctor.state}.
          </p>
        </div>

        <div>
          <p className="eyebrow-serena text-[var(--color-gold)]">Especialidades</p>
          <ul className="mt-3 space-y-2">
            <li><Link href={"/enfermedades" as Route} className="hover:text-[var(--color-gold)]">Áreas de atención</Link></li>
            <li><Link href={"/servicios" as Route} className="hover:text-[var(--color-gold)]">Servicios</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-serena text-[var(--color-gold)]">Para Familiares</p>
          <ul className="mt-3 space-y-2">
            <li><Link href={"/about" as Route} className="hover:text-[var(--color-gold)]">Sobre el Doctor</Link></li>
            <li><Link href={"/sintomas" as Route} className="hover:text-[var(--color-gold)]">Guía de señales</Link></li>
            <li><Link href={"/contact" as Route} className="hover:text-[var(--color-gold)]">Solicitar consulta</Link></li>
            <li><Link href={"/privacy" as Route} className="hover:text-[var(--color-gold)]">Aviso de privacidad</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-serena text-[var(--color-gold)]">Consultorio y Agentes</p>
          <p className="mt-3">{doctor.city}, {doctor.state}, {doctor.country}.</p>
          <p className="mt-1">{doctor.schedule}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Link href={"/api" as Route} className="text-[var(--color-navy)] underline hover:text-[var(--color-gold)]">Agentes & API</Link>
            <span className="text-[var(--color-line)]">·</span>
            <a href="/llms.txt" className="text-[var(--color-navy)] underline hover:text-[var(--color-gold)]">llms.txt</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--color-line)] pt-6 text-xs">
        <p>
          © {new Date().getFullYear()} {doctor.title} {doctor.name}. Todos los derechos reservados.
        </p>
        <p className="mt-1.5 font-mono text-[11px] text-[var(--color-ink-soft)]">
          {formatCredentials(doctor)}
        </p>
        <p className="mt-2 text-[var(--color-ink-soft)]/80">
          La información de este sitio es orientativa y educativa; no sustituye una consulta médica. Ante una
          urgencia, acude al servicio de urgencias más cercano.
        </p>
      </div>
    </footer>
  );
}
