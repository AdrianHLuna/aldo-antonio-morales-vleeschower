"use client";

import Image from "next/image";
import { useState } from "react";
import { Stethoscope } from "lucide-react";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  /** AISO v3.1 §2 — aspect-video, aspect-[16/10] o aspect-[4/3]. Default: aspect-video. */
  aspect?: "video" | "16/10" | "4/3";
}

const aspectClass: Record<NonNullable<CardImageHeaderProps["aspect"]>, string> = {
  video: "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
};

/** Contenedor de imagen obligatorio en tarjetas de enfermedades/servicios/síntomas, con fallback clínico. */
export default function CardImageHeader({ src, alt, aspect = "video" }: CardImageHeaderProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`${aspectClass[aspect]} flex items-center justify-center rounded-t-2xl bg-gradient-to-br from-primary/15 to-accent/15`}
        role="img"
        aria-label={alt}
      >
        <Stethoscope className="h-10 w-10 text-primary/50" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`${aspectClass[aspect]} relative overflow-hidden rounded-t-2xl bg-muted`}>
      <Image
        src={src as string}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
