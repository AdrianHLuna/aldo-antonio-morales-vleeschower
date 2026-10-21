import { NextResponse } from "next/server";
import { doctor, diseases, services, symptoms } from "@/data";

export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, X-Requested-With",
};

const TOOLS = [
  {
    name: "get_doctor_profile",
    description: "Obtener perfil profesional, cédulas, especialidad, trayectoria, horarios y ubicación del Dr. Aldo Antonio Morales Vleeschower.",
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  {
    name: "list_conditions",
    description: "Listar las enfermedades y padecimientos geriátricos atendidos en el consultorio, con opción de búsqueda por palabra clave.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Término opcional de búsqueda (ej. 'diabetes', 'memoria', 'presión')",
        },
      },
      required: [],
    },
  },
  {
    name: "get_condition_detail",
    description: "Obtener información médica completa de una enfermedad específica por su slug (síntomas, causas, factores de riesgo, complicaciones y tratamientos).",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "Slug único de la enfermedad (ej. 'diabetes-mellitus', 'hipertension-arterial', 'demencia')",
        },
      },
      required: ["slug"],
    },
  },
  {
    name: "list_services",
    description: "Listar los servicios médicos y valoraciones geriátricas ofrecidas por el doctor en Tuxtla Gutiérrez.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Término opcional de búsqueda (ej. 'domicilio', 'memoria', 'cardiovascular')",
        },
      },
      required: [],
    },
  },
  {
    name: "get_service_detail",
    description: "Obtener la ficha técnica detallada de un servicio médico por su slug (modalidad, duración, molestias, recomendaciones y beneficios).",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "Slug único del servicio (ej. 'valoracion-geriatrica-integral', 'consulta-a-domicilio-para-el-adulto-mayor')",
        },
      },
      required: ["slug"],
    },
  },
  {
    name: "list_symptoms",
    description: "Consultar la guía de síntomas para cuidadores, causas frecuentes y señales de alarma que exigen acudir a urgencias.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Término opcional de búsqueda (ej. 'fiebre', 'caída', 'memoria', 'pecho')",
        },
      },
      required: [],
    },
  },
  {
    name: "get_appointment_info",
    description: `Obtener honorarios de consulta ($${doctor.consultationPrice} MXN), métodos de pago, horarios, dirección física y enlace directo para agendar vía WhatsApp.`,
    inputSchema: {
      type: "object",
      properties: {},
      required: [],
    },
  },
];

function executeTool(name: string, args: Record<string, unknown> = {}) {
  switch (name) {
    case "get_doctor_profile":
      return {
        name: `${doctor.title} ${doctor.name}`,
        specialty: doctor.specialty,
        specialistTitle: doctor.specialistTitle,
        cedulaProfesional: doctor.cedula,
        cedulaInstitucion: doctor.cedulaInstitucion,
        cedulaEspecialidad: doctor.cedulaEspecialidad,
        cedulaEspecialidadInstitucion: doctor.cedulaEspecialidadInstitucion,
        cedulaSubespecialidad: doctor.cedulaSubespecialidad,
        cedulaSubespecialidadInstitucion: doctor.cedulaSubespecialidadInstitucion,
        cofepris: doctor.cofepris,
        city: doctor.city,
        state: doctor.state,
        address: doctor.address,
        phone: doctor.phone,
        whatsapp: doctor.whatsapp,
        schedule: doctor.schedule,
        consultationPrice: `$${doctor.consultationPrice} MXN`,
        philosophy: doctor.philosophy,
        bio: doctor.bio,
        certifications: doctor.certifications,
        education: doctor.education,
      };

    case "list_conditions": {
      const q = typeof args.query === "string" ? args.query.toLowerCase() : "";
      const filtered = q
        ? diseases.filter(
            (d) =>
              d.name.toLowerCase().includes(q) ||
              d.description.toLowerCase().includes(q) ||
              d.symptoms.some((s) => s.toLowerCase().includes(q))
          )
        : diseases;
      return filtered.map((d) => ({
        id: d.id,
        slug: d.slug,
        name: d.name,
        technicalName: d.technicalName,
        description: d.description,
        symptomsCount: d.symptoms.length,
        url: `/enfermedades/${d.slug}`,
      }));
    }

    case "get_condition_detail": {
      const slug = String(args.slug || "");
      const found = diseases.find((d) => d.slug === slug);
      if (!found) {
        return { error: `Condición no encontrada con slug '${slug}'`, availableSlugs: diseases.map((d) => d.slug) };
      }
      return found;
    }

    case "list_services": {
      const q = typeof args.query === "string" ? args.query.toLowerCase() : "";
      const filtered = q
        ? services.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q) ||
              s.longDescription.toLowerCase().includes(q)
          )
        : services;
      return filtered.map((s) => ({
        id: s.id,
        slug: s.slug,
        name: s.name,
        type: s.type,
        duration: s.duration,
        description: s.description,
        url: `/servicios/${s.slug}`,
      }));
    }

    case "get_service_detail": {
      const slug = String(args.slug || "");
      const found = services.find((s) => s.slug === slug);
      if (!found) {
        return { error: `Servicio no encontrado con slug '${slug}'`, availableSlugs: services.map((s) => s.slug) };
      }
      return found;
    }

    case "list_symptoms": {
      const q = typeof args.query === "string" ? args.query.toLowerCase() : "";
      const filtered = q
        ? symptoms.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q) ||
              s.alarmSigns.some((a) => a.toLowerCase().includes(q))
          )
        : symptoms;
      return filtered.map((s) => ({
        id: s.id,
        slug: s.slug,
        name: s.name,
        description: s.description,
        alarmSigns: s.alarmSigns,
        url: `/sintomas/${s.slug}`,
      }));
    }

    case "get_appointment_info":
      return {
        doctor: `${doctor.title} ${doctor.name}`,
        specialty: doctor.specialistTitle || doctor.specialty,
        fee: `$${doctor.consultationPrice} MXN`,
        paymentMethods: doctor.paymentMethods,
        insurances: doctor.insurances || [],
        address: `${doctor.address}, ${doctor.city}, ${doctor.state}, México`,
        phone: doctor.phone,
        whatsapp: doctor.whatsapp,
        schedule: doctor.schedule,
        whatsappBookingUrl: `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
          `Hola, ${doctor.title} ${doctor.name}, quisiera agendar una valoración geriátrica.`
        )}`,
        bookingPageUrl: "/contact",
      };

    default:
      return { error: `Herramienta desconocida: '${name}'` };
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aldo-antonio-morales-vleeschower.vercel.app";

  return NextResponse.json(
    {
      name: "dr_aldo_morales_mcp",
      version: "1.0.0",
      protocolVersion: "2024-11-05",
      transport: "streamable-http",
      description: "Servidor MCP oficial de la práctica médica del Dr. Aldo Antonio Morales Vleeschower.",
      capabilities: {
        tools: {
          listChanged: false,
        },
      },
      toolsCount: TOOLS.length,
      tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
      documentation: `${baseUrl}/api`,
      manifestUrl: `${baseUrl}/.well-known/mcp.json`,
      endpoints: {
        mcp: `${baseUrl}/api/mcp`,
        openapi: `${baseUrl}/api/openapi.json`,
        llmsTxt: `${baseUrl}/llms.txt`,
      },
    },
    {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
        "Vary": "Accept",
      },
    }
  );
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: { code: -32700, message: "Parse error: invalid JSON" },
        id: null,
      },
      { status: 400, headers: corsHeaders }
    );
  }

  const { method, params, id = null } = body;

  switch (method) {
    case "initialize":
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            serverInfo: {
              name: "dr_aldo_morales_mcp",
              version: "1.0.0",
            },
            capabilities: {
              tools: {},
            },
            instructions:
              "Servidor MCP del Dr. Aldo Antonio Morales Vleeschower (Geriatría y Medicina Interna, Tuxtla Gutiérrez, Chiapas). Utilice las herramientas disponibles para consultar condiciones clínicas, servicios geriátricos, síntomas para cuidadores y datos para agendar consultas presenciales o a domicilio.",
          },
        },
        { headers: corsHeaders }
      );

    case "notifications/initialized":
      return new NextResponse(null, { status: 204, headers: corsHeaders });

    case "ping":
      return NextResponse.json({ jsonrpc: "2.0", id, result: {} }, { headers: corsHeaders });

    case "tools/list":
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id,
          result: {
            tools: TOOLS,
          },
        },
        { headers: corsHeaders }
      );

    case "tools/call": {
      const toolParams = (params as Record<string, unknown>) || {};
      const toolName = String(toolParams.name || "");
      const toolArguments = (toolParams.arguments as Record<string, unknown>) || {};

      const executionResult = executeTool(toolName, toolArguments);

      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(executionResult, null, 2),
              },
            ],
            isError: Boolean((executionResult as { error?: string })?.error),
          },
        },
        { headers: corsHeaders }
      );
    }

    default:
      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Method not found: '${method}'`,
          },
        },
        { status: 404, headers: corsHeaders }
      );
  }
}
