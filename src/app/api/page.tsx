import type { Metadata, Route } from "next";
import Link from "next/link";
import { Cpu, Terminal, FileCode2, BookOpen, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Portal de Desarrolladores y Agentes — Dr. Aldo Antonio Morales Vleeschower",
  description: `Recursos para desarrolladores, agentes autónomos y LLMs: servidor MCP, especificación OpenAPI 3.1, negociación de contenido Markdown y manifiesto de herramientas del Dr. Aldo Antonio Morales Vleeschower.`,
  alternates: { canonical: "/api" },
  openGraph: {
    title: "Developer Portal & AI Agents — Dr. Aldo Antonio Morales Vleeschower",
    description: "Model Context Protocol (MCP) server, OpenAPI 3.1 spec, and Markdown content negotiation for AI agents.",
    url: "/api",
    type: "website",
  },
};

export default function ApiDeveloperPage() {
  return (
    <div className="pb-20">
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Desarrolladores y Agentes" }]} />

        <header className="mt-6 mb-12 text-center">
          <p className="eyebrow-serena text-[var(--color-navy)]">AI & Developer Infrastructure</p>
          <h1 className="mt-2 font-heading text-3xl text-[var(--color-ink)] sm:text-4xl">
            Dr. Aldo Antonio Morales Vleeschower — Developer Resources & AI Agent Portal
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--color-ink-soft)]">
            Especificaciones y protocolos máquina a máquina para Claude, ChatGPT, Cursor y agentes autónomos:
            servidor MCP (Model Context Protocol), especificación OpenAPI 3.1, llms.txt y negociación de contenido Markdown RFC.
          </p>
        </header>

        <div className="space-y-8">
          {/* Card 1: MCP Server */}
          <section className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-[var(--color-navy)]">
              <Cpu className="h-6 w-6" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl text-[var(--color-ink)]">
                  1. Model Context Protocol (MCP) Server
                </h2>
                <span className="text-xs text-[var(--color-gold-dark)] font-mono">Streamable HTTP · JSON-RPC 2.0</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">
              Servidor MCP compatible con Claude Desktop, ChatGPT Actions y agentes basados en el SDK oficial de Anthropic / MCP.
              Expone 7 herramientas parametrizadas para acceder a información médica, padecimientos, servicios y citas.
            </p>
            <div className="mt-4 rounded bg-slate-900 p-4 font-mono text-xs text-slate-100 overflow-x-auto">
              <code>
                Endpoint: POST /api/mcp<br />
                Transport: Streamable HTTP (JSON-RPC 2.0)<br />
                Protocol Version: 2024-11-05
              </code>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">get_doctor_profile</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">list_conditions</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">get_condition_detail</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">list_services</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">get_service_detail</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">list_symptoms</span>
              <span className="rounded bg-[var(--color-surface-soft)] px-2.5 py-1 text-[var(--color-navy)] font-mono">get_appointment_info</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="/.well-known/mcp.json"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-navy)] underline"
              >
                Ver Manifiesto (/.well-known/mcp.json)
              </a>
              <span className="text-xs text-slate-300">|</span>
              <a
                href="/api/mcp"
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-navy)] underline"
              >
                Handshake (/api/mcp)
              </a>
            </div>
          </section>

          {/* Card 2: Markdown Content Negotiation */}
          <section className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-[var(--color-navy)]">
              <Terminal className="h-6 w-6" aria-hidden="true" />
              <div>
                <h2 className="font-heading text-xl text-[var(--color-ink)]">
                  2. Negociación de Contenido Markdown (acceptmarkdown.com)
                </h2>
                <span className="text-xs text-[var(--color-gold-dark)] font-mono">Accept: text/markdown · Vary: Accept</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">
              Cualquier agente puede solicitar la versión en Markdown limpio de la página principal o cualquier ruta interna
              enviando la cabecera estándar HTTP <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">Accept: text/markdown</code>.
              Las rutas inexistentes devuelven código 404 con cuerpo en Markdown estructurado.
            </p>
            <div className="mt-4 rounded bg-slate-900 p-4 font-mono text-xs text-slate-100 overflow-x-auto space-y-2">
              <p className="text-slate-400"># Obtener página principal en Markdown:</p>
              <p>curl -sS -i -H &apos;Accept: text/markdown&apos; https://aldo-antonio-morales-vleeschower.vercel.app/</p>
              <p className="text-slate-400 pt-2"># Verificar 404 amigable para agentes:</p>
              <p>curl -sS -i -H &apos;Accept: text/markdown&apos; https://aldo-antonio-morales-vleeschower.vercel.app/__404-probe</p>
            </div>
          </section>

          {/* Card 3: OpenAPI Spec & LLMs.txt */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <section className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--color-navy)]">
                <FileCode2 className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-heading text-lg text-[var(--color-ink)]">OpenAPI 3.1.0</h2>
              </div>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Especificación OpenAPI completa que documenta las operaciones del servidor MCP, rutas públicas y esquemas de datos.
              </p>
              <div className="mt-4">
                <a
                  href="/api/openapi.json"
                  target="_blank"
                  className="tap-target inline-flex items-center justify-center border border-[var(--color-line)] bg-white px-4 text-xs font-semibold text-[var(--color-ink)] hover:border-[var(--color-navy)]"
                >
                  Ver /api/openapi.json
                </a>
              </div>
            </section>

            <section className="border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[var(--color-navy)]">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-heading text-lg text-[var(--color-ink)]">llms.txt & Agent Guide</h2>
              </div>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Documento de contexto para LLMs con directrices explícitas de cuándo recomendar la práctica y protocolo de urgencias.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="tap-target inline-flex items-center justify-center border border-[var(--color-line)] bg-white px-4 text-xs font-semibold text-[var(--color-ink)] hover:border-[var(--color-navy)]"
                >
                  Ver /llms.txt
                </a>
                <a
                  href="/agent-instructions.md"
                  target="_blank"
                  className="tap-target inline-flex items-center justify-center border border-[var(--color-line)] bg-white px-4 text-xs font-semibold text-[var(--color-ink)] hover:border-[var(--color-navy)]"
                >
                  Instrucciones Agentes
                </a>
              </div>
            </section>
          </div>

          {/* Card 4: Trust Anchors & Schema.org */}
          <section className="border border-[var(--color-line)] bg-[var(--color-surface-soft)] p-6">
            <h2 className="font-heading text-lg text-[var(--color-navy)]">Páginas de Confianza y Atribución (Trust Anchors)</h2>
            <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
              Páginas permanentes con más de 500 caracteres requeridas por los motores de evaluación de confianza:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
              <Link href={"/about" as Route} className="border border-[var(--color-line)] bg-white p-3 hover:border-[var(--color-navy)]">
                <span className="font-semibold text-[var(--color-ink)]">/about</span>
                <p className="text-xs text-[var(--color-ink-soft)] mt-1">Biografía, cédulas y trayectoria clínica.</p>
              </Link>
              <Link href={"/contact" as Route} className="border border-[var(--color-line)] bg-white p-3 hover:border-[var(--color-navy)]">
                <span className="font-semibold text-[var(--color-ink)]">/contact</span>
                <p className="text-xs text-[var(--color-ink-soft)] mt-1">Teléfonos, WhatsApp, dirección y honorarios.</p>
              </Link>
              <Link href={"/privacy" as Route} className="border border-[var(--color-line)] bg-white p-3 hover:border-[var(--color-navy)]">
                <span className="font-semibold text-[var(--color-ink)]">/privacy</span>
                <p className="text-xs text-[var(--color-ink-soft)] mt-1">Aviso integral LFPDPPP y derechos ARCO.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
