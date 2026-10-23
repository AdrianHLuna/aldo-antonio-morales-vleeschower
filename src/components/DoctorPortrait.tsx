"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Retrato del doctor con fallback cálido y soporte para encuadre personalizado
 * (object-position / imgClassName). Componente cliente dedicado para Next 16.
 */
export default function DoctorPortrait({
  src,
  alt,
  className = "",
  imgClassName = "object-cover object-center",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: DoctorPortraitProps) {
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
        className={imgClassName}
        sizes={sizes}
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
