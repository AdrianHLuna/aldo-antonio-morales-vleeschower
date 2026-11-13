import type { NextConfig } from "next";

// Security headers — AISO v3.1 §8.1. X-XSS-Protection deprecado, sustituido por CSP.
// 'unsafe-eval' solo en dev: Turbopack/React Fast Refresh usan eval() para HMR;
// React nunca usa eval() en producción, así que la build de producción no lo necesita.
// Dominios completos de Google Tag Manager, Google Analytics, Google Ads y Tag Assistant
// requeridos por el diagnóstico "Calidad de Contenedor" de GTM y por Google Ads
// (actualizado 2026-11-13: la versión anterior, de dr-gregorio-arcos 2026-10-16,
// seguía bloqueando recursos reales de Google Ads — p.ej. googlesyndication.com —
// y solo se corrigió por completo en dra-maria-argelia-eng-luna sin regresar el
// fix al template; ver AGENTS.md §8).
const googleScriptDomains = [
  "https://www.googletagmanager.com",
  "https://*.googletagmanager.com",
  "https://tagmanager.google.com",
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
  "https://www.googleadservices.com",
  "https://*.googleadservices.com",
  "https://googleads.g.doubleclick.net",
  "https://*.doubleclick.net",
  "https://www.google.com",
  "https://*.google.com",
  "https://*.googlesyndication.com",
  "https://adservice.google.com",
  "https://tagassistant.google.com",
].join(" ");

const scriptSrc =
  process.env.NODE_ENV === "production"
    ? `'self' 'unsafe-inline' ${googleScriptDomains}`
    : `'self' 'unsafe-inline' 'unsafe-eval' ${googleScriptDomains}`;

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // SAMEORIGIN (no DENY) + frame-ancestors abajo permite que
    // tagassistant.google.com inspeccione el sitio para depurar el
    // contenedor de GTM — requerido por el diagnóstico "Container quality"
    // de Google Tag Manager (ver nota junto a scriptSrc).
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Vary",
    value: "Accept",
  },
  {
    key: "Content-Security-Policy",
    value:
      `default-src 'self'; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline' https://tagassistant.google.com https://fonts.googleapis.com; img-src 'self' data: blob: https: https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.googleadservices.com https://*.doubleclick.net https://*.gstatic.com https://*.googlesyndication.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.googletagmanager.com https://*.google.com https://www.google.com https://*.googleadservices.com https://www.googleadservices.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://*.googlesyndication.com https://adservice.google.com https://tagassistant.google.com; frame-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://www.youtube-nocookie.com https://*.doubleclick.net https://bid.g.doubleclick.net https://td.doubleclick.net https://googleads.g.doubleclick.net https://tagassistant.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self' https://tagassistant.google.com`,
  },
];

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
    qualities: [60, 75],
  },
  // Sin esto, Turbopack no sabe procesar el `@theme inline` de Tailwind v4
  // (warning "Unknown at rule: @theme" en build, aunque el build igual
  // termina) — requerido por create-next-app con --turbopack en Next 16.4.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
