import { NextResponse } from "next/server";
import { doctor } from "@/data";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aldo-antonio-morales-vleeschower.vercel.app";

  const manifest = {
    schema_version: "v1",
    name_for_model: "dr_aldo_morales_geriatria",
    name_for_human: "Dr. Aldo Antonio Morales Vleeschower — Geriatría y Medicina Interna",
    description_for_model:
      `Official Model Context Protocol (MCP) server for Dr. Aldo Antonio Morales Vleeschower's medical practice in Tuxtla Gutiérrez, Chiapas, Mexico. Provides real-time querying for 15 chronic geriatric conditions, 14 medical services, 13 caregiver symptoms with emergency triage alarm signs, clinic fees ($${doctor.consultationPrice} MXN), direct WhatsApp booking, and professional credentials.`,
    description_for_human:
      "Servidor MCP oficial del Dr. Aldo Antonio Morales Vleeschower para consultar servicios geriátricos, enfermedades atendidas y agendar citas.",
    endpoint: `${baseUrl}/api/mcp`,
    transport: {
      type: "streamable-http",
      url: `${baseUrl}/api/mcp`,
    },
    capabilities: {
      tools: true,
      resources: true,
      prompts: true,
    },
    protocol_version: "2024-11-05",
    tools: [
      {
        name: "get_doctor_profile",
        description: "Obtener perfil profesional, cédulas oficiales, horario, ubicación física y filosofía clínica.",
      },
      {
        name: "list_conditions",
        description: "Listar las 15 enfermedades geriátricas atendidas con filtros de búsqueda.",
      },
      {
        name: "get_condition_detail",
        description: "Obtener descripción médica, causas, síntomas, factores de riesgo y complicaciones de una enfermedad por slug.",
      },
      {
        name: "list_services",
        description: "Listar los 14 servicios médicos y procedimientos geriátricos disponibles.",
      },
      {
        name: "get_service_detail",
        description: "Obtener ficha clínica de un servicio: duración, modalidad, nivel de molestia y recomendaciones.",
      },
      {
        name: "list_symptoms",
        description: "Consultar señales de advertencia en el adulto mayor y señales de alarma que requieren urgencias.",
      },
      {
        name: "get_appointment_info",
        description: `Obtener honorarios de consulta ($${doctor.consultationPrice} MXN), formas de pago y enlace directo a WhatsApp para agendar.`,
      },
    ],
    contact_email: doctor.email,
    documentation_url: `${baseUrl}/api`,
    legal_info_url: `${baseUrl}/privacy`,
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
