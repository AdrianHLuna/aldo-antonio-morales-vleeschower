"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  /** AISO v3.1 §2 — aspect-video, aspect-[16/10] o aspect-[4/3]. Default: aspect-video. */
  aspect?: "video" | "16/10" | "4/3";
  priority?: boolean;
  className?: string;
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/** Contenedor de imagen obligatorio en tarjetas y páginas de detalle de enfermedades/servicios/síntomas, con fallback clínico. */
export default function CardImageHeader({ src, alt, aspect = "video", priority = true, className = "" }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <div
        className={`${aspectClass[aspect]} flex items-center justify-center bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-gold)]/10 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Stethoscope className="h-10 w-10 text-[var(--color-navy)]/40" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`${aspectClass[aspect]} relative w-full overflow-hidden bg-[var(--color-surface-soft)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 768px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
