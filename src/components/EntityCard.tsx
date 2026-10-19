"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { HeartPulse, HeartHandshake, Stethoscope, CheckCircle2 } from "lucide-react";

// Las funciones de componente no pueden pasarse de un Server Component a un
// Client Component (cruzar ese límite revienta el build de Next 16) — por
// eso el ícono se selecciona por nombre serializable, no por referencia.
const ICONS = { condition: HeartPulse, service: HeartHandshake, symptom: Stethoscope } as const;

interface EntityCardProps {
  title: string;
  description: string;
  href: Route;
  image?: string;
  tag: string;
  iconKey?: keyof typeof ICONS;
  footnote?: string;
  delay?: number;
}

/**
 * Tarjeta "Serenidad Geriátrica" — banda de imagen grande obligatoria
 * (AGENTS.md §2, nunca una miniatura), tag-badge temático por tarjeta (tomado
 * de la propuesta de Stitch) y footnote con check — deliberadamente distinta
 * del índice numerado/bento/hard-cut de los 7 sitios reales ya registrados.
 * Sin animación de hover agresiva (bounce/scale): elevación suave, acorde al
 * tono pausado de la especialidad.
 */
export default function EntityCard({ title, description, href, image, tag, iconKey = "condition", footnote, delay = 0 }: EntityCardProps) {
  const [failed, setFailed] = useState(!image);
  const Icon = ICONS[iconKey];

  return (
    <Link
      href={href}
      style={{ transitionDelay: `${delay}ms` }}
      className="group flex h-full flex-col border border-[var(--color-line)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-warm-lg)]"
    >
      <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48">
        {failed || !image ? (
          <div className="image-fallback-serena absolute inset-0 flex items-center justify-center" role="img" aria-label={title}>
            <Icon className="h-9 w-9 opacity-40" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setFailed(true)}
          />
        )}
        <span className="eyebrow-serena absolute right-3 top-3 bg-[var(--color-gold)] px-2.5 py-1 text-white shadow-sm">
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-center gap-2 text-[var(--color-navy)]">
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-lg text-[var(--color-ink)]">{title}</h3>
        <p className="line-clamp-3 text-sm text-[var(--color-ink-soft)]">{description}</p>
        {footnote && (
          <p className="mt-auto flex items-start gap-1.5 border-t border-[var(--color-line)] pt-3 text-xs text-[var(--color-gold-dark)]">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{footnote}</span>
          </p>
        )}
      </div>
    </Link>
  );
}
