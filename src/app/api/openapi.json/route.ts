import { NextResponse } from "next/server";
import { doctor } from "@/data";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aldo-antonio-morales-vleeschower.vercel.app";

  const openApiSpec = {
    openapi: "3.1.0",
    info: {
      title: "Dr. Aldo Antonio Morales Vleeschower — Medical Practice API & MCP Server",
      version: "1.0.0",
      description:
        "Official API and Model Context Protocol (MCP) server for Dr. Aldo Antonio Morales Vleeschower's geriatric and internal medicine practice in Tuxtla Gutiérrez, Chiapas, Mexico. Provides programmatic access to medical conditions, geriatric services, caregiver symptom triage, consultation fees, and appointment scheduling.",
      contact: {
        name: "Consultorio Dr. Aldo Antonio Morales Vleeschower",
        email: doctor.email,
        url: baseUrl,
      },
      license: {
        name: "All Rights Reserved - Uso Informativo y Clínico",
      },
    },
    servers: [
      {
        url: baseUrl,
        description: "Servidor Principal de Producción",
      },
    ],
    paths: {
      "/api/mcp": {
        post: {
          summary: "Model Context Protocol (MCP) JSON-RPC 2.0 Handler",
          description:
            "Executes MCP methods including `initialize`, `tools/list`, and `tools/call` for AI agents (Claude, ChatGPT, autonomous systems).",
          operationId: "executeMcp",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    jsonrpc: { type: "string", example: "2.0" },
                    method: { type: "string", example: "tools/call" },
                    params: { type: "object" },
                    id: { type: ["string", "number", "null"], example: 1 },
                  },
                  required: ["jsonrpc", "method"],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "JSON-RPC 2.0 Response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      jsonrpc: { type: "string", example: "2.0" },
                      result: { type: "object" },
                      id: { type: ["string", "number", "null"], example: 1 },
                    },
                  },
                },
              },
            },
          },
        },
        get: {
          summary: "MCP Server Handshake & Status",
          description: "Returns MCP server metadata, tools count, and protocol capabilities.",
          operationId: "getMcpStatus",
          responses: {
            "200": {
              description: "MCP Server Handshake Metadata",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                  },
                },
              },
            },
          },
        },
      },
      "/.well-known/mcp.json": {
        get: {
          summary: "MCP Server Discovery Manifest",
          description: "Machine-readable discovery manifest for autonomous agent discovery.",
          operationId: "getMcpManifest",
          responses: {
            "200": {
              description: "MCP Manifest Document",
              content: {
                "application/json": {
                  schema: { type: "object" },
                },
              },
            },
          },
        },
      },
      "/llms.txt": {
        get: {
          summary: "LLMs Context File",
          description: "Structured markdown context for LLMs with when-to-use guidance and emergency triage protocols.",
          operationId: "getLlmsTxt",
          responses: {
            "200": {
              description: "Plain text/markdown LLM guidance",
              content: {
                "text/markdown": { schema: { type: "string" } },
                "text/plain": { schema: { type: "string" } },
              },
            },
          },
        },
      },
    },
    components: {
      securitySchemes: {},
    },
  };

  return NextResponse.json(openApiSpec, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Vary": "Accept",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
