"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Retrato del doctor con fallback cálido — no hay foto real todavía
 * (PENDIENTE). Componente cliente dedicado: un `onError` inline en un
 * Server Component rompe el build en Next 16.
 */
export default function DoctorPortrait({ src, alt, className = "", priority }: DoctorPortraitProps) {
  const [failed, setFailed] = useState(!src || src.includes("placeholder"));

  if (failed) {
    return (
      <div
        className={`image-fallback-serena flex items-center justify-center text-center text-sm ${className}`}
        role="img"
        aria-label={alt}
      >
        <HeartHandshake className="h-10 w-10 opacity-40" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
