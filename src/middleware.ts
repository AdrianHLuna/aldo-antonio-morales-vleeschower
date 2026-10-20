import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getHomeMarkdown,
  getAboutMarkdown,
  getPrivacyMarkdown,
  getContactMarkdown,
  getDiseasesListMarkdown,
  getDiseaseDetailMarkdown,
  getServicesListMarkdown,
  getServiceDetailMarkdown,
  getSymptomsListMarkdown,
  getSymptomDetailMarkdown,
  getApiMarkdown,
  getNotFoundMarkdown,
} from "@/lib/markdown-generator";

// Rutas estáticas conocidas
const KNOWN_EXACT_ROUTES = new Set([
  "",
  "/",
  "/about",
  "/privacy",
  "/aviso-de-privacidad",
  "/contact",
  "/contacto",
  "/enfermedades",
  "/servicios",
  "/sintomas",
  "/api",
  "/api/mcp",
  "/api/openapi.json",
  "/.well-known/mcp",
  "/.well-known/mcp.json",
  "/llms.txt",
  "/agent-instructions.md",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
]);

// Dominio temporal de Vercel (antes de asignar el dominio final del
// cliente) — nunca debe indexarse, para no competir después con el dominio
// real ni dejar URLs huérfanas indexadas cuando el dominio cambie (hallazgo
// real 2026-10-19: no existía ningún guard, el sitio estaba públicamente
// rastreable en *.vercel.app sin restricción). Se basa en el host real de
// la petición, no en una variable de entorno — así deja de aplicar solo con
// asignar el dominio final en Vercel, sin tocar código.
function isTemporaryVercelDomain(host: string): boolean {
  return host.endsWith(".vercel.app");
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const acceptHeader = request.headers.get("accept") || "";
  const wantsMarkdown = acceptHeader.includes("text/markdown");
  const isTemporaryDomain = isTemporaryVercelDomain(request.nextUrl.hostname);

  // Ignorar peticiones internas de Next.js, imágenes y archivos estáticos
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/mcp") ||
    pathname.startsWith("/api/openapi.json") ||
    pathname.startsWith("/.well-known") ||
    pathname.match(/\.(jpg|jpeg|png|svg|webp|avif|ico|css|js|map|txt|xml|webmanifest)$/)
  ) {
    const response = NextResponse.next();
    response.headers.set("Vary", "Accept");
    if (isTemporaryDomain) response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  // Manejo de negociación de contenido Markdown
  if (wantsMarkdown) {
    // Normalizar pathname
    const cleanPath = pathname.replace(/\/$/, "") || "/";

    let markdownBody: string | null = null;
    let isNotFound = false;

    if (cleanPath === "/") {
      markdownBody = getHomeMarkdown();
    } else if (cleanPath === "/about") {
      markdownBody = getAboutMarkdown();
    } else if (cleanPath === "/privacy" || cleanPath === "/aviso-de-privacidad") {
      markdownBody = getPrivacyMarkdown();
    } else if (cleanPath === "/contact" || cleanPath === "/contacto") {
      markdownBody = getContactMarkdown();
    } else if (cleanPath === "/enfermedades") {
      markdownBody = getDiseasesListMarkdown();
    } else if (cleanPath.startsWith("/enfermedades/")) {
      const slug = cleanPath.replace("/enfermedades/", "");
      markdownBody = getDiseaseDetailMarkdown(slug);
      if (!markdownBody) isNotFound = true;
    } else if (cleanPath === "/servicios") {
      markdownBody = getServicesListMarkdown();
    } else if (cleanPath.startsWith("/servicios/")) {
      const slug = cleanPath.replace("/servicios/", "");
      markdownBody = getServiceDetailMarkdown(slug);
      if (!markdownBody) isNotFound = true;
    } else if (cleanPath === "/sintomas") {
      markdownBody = getSymptomsListMarkdown();
    } else if (cleanPath.startsWith("/sintomas/")) {
      const slug = cleanPath.replace("/sintomas/", "");
      markdownBody = getSymptomDetailMarkdown(slug);
      if (!markdownBody) isNotFound = true;
    } else if (cleanPath === "/api") {
      markdownBody = getApiMarkdown();
    } else {
      isNotFound = true;
    }

    if (isNotFound || !markdownBody) {
      return new NextResponse(getNotFoundMarkdown(pathname), {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept",
          "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
          ...(isTemporaryDomain ? { "X-Robots-Tag": "noindex, nofollow" } : {}),
        },
      });
    }

    return new NextResponse(markdownBody, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        ...(isTemporaryDomain ? { "X-Robots-Tag": "noindex, nofollow" } : {}),
      },
    });
  }

  // Petición HTML normal
  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  if (isTemporaryDomain) response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
