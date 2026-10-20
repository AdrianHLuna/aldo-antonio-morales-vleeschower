// Ejecutar con: npx tsx scripts/verify-agent-readiness.ts
import http from "node:http";

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

interface RequestOptions {
  path: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

interface ResponseResult {
  statusCode: number;
  headers: http.IncomingHttpHeaders;
  body: string;
}

function fetchLocal(options: RequestOptions): Promise<ResponseResult> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      `${BASE_URL}${options.path}`,
      {
        method: options.method || "GET",
        headers: options.headers || {},
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode || 0,
            headers: res.headers,
            body,
          });
        });
      }
    );

    req.on("error", (err) => reject(err));
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  console.log("=================================================");
  console.log("  VERIFICACIÓN DE PREPARACIÓN AGÉNTICA (ORA)");
  console.log("=================================================\n");

  let passedCount = 0;
  let failedCount = 0;

  function assert(condition: boolean, testName: string, details?: string) {
    if (condition) {
      console.log(`✓ [PASÓ] ${testName}`);
      passedCount++;
    } else {
      console.error(`✗ [FALLÓ] ${testName}`);
      if (details) console.error(`  Detalle: ${details}`);
      failedCount++;
    }
  }

  try {
    // 1. Agent-friendly 404
    const res404 = await fetchLocal({
      path: "/__ora-404-probe-test",
      headers: { Accept: "text/markdown" },
    });
    assert(
      res404.statusCode === 404,
      "1.1 404 Status: probe inexistente con Accept: text/markdown retorna 404",
      `Recibido: ${res404.statusCode}`
    );
    assert(
      (res404.headers["content-type"] || "").includes("text/markdown"),
      "1.2 404 Content-Type: retorna Content-Type: text/markdown",
      `Recibido: ${res404.headers["content-type"]}`
    );
    assert(
      (res404.headers["vary"] || "").toLowerCase().includes("accept"),
      "1.3 404 Header Vary: incluye Accept",
      `Recibido: ${res404.headers["vary"]}`
    );
    assert(
      res404.body.length >= 20,
      "1.4 404 Body Length: cuerpo de error Markdown con al menos 20 caracteres",
      `Longitud: ${res404.body.length}`
    );
    assert(
      res404.body.includes("llms.txt") || res404.body.includes("sitemap.xml"),
      "1.5 404 Links: cuerpo de error contiene enlaces a docs, sitemap o llms.txt",
      `Body preview: ${res404.body.slice(0, 100)}`
    );

    // 2. Markdown content negotiation
    const resHomeMd = await fetchLocal({
      path: "/",
      headers: { Accept: "text/markdown" },
    });
    assert(
      resHomeMd.statusCode === 200,
      "2.1 Home Markdown Status: GET / con Accept: text/markdown retorna 200",
      `Recibido: ${resHomeMd.statusCode}`
    );
    assert(
      (resHomeMd.headers["content-type"] || "").includes("text/markdown"),
      "2.2 Home Markdown Content-Type: retorna text/markdown",
      `Recibido: ${resHomeMd.headers["content-type"]}`
    );
    assert(
      (resHomeMd.headers["vary"] || "").toLowerCase().includes("accept"),
      "2.3 Home Markdown Vary: incluye Accept",
      `Recibido: ${resHomeMd.headers["vary"]}`
    );
    assert(
      resHomeMd.body.includes("Dr. Aldo Antonio Morales Vleeschower") && resHomeMd.body.length > 200,
      "2.4 Home Markdown Body: contenido no vacío con datos del doctor",
      `Longitud: ${resHomeMd.body.length}`
    );

    const resHomeHtml = await fetchLocal({
      path: "/",
      headers: { Accept: "text/html" },
    });
    assert(
      resHomeHtml.statusCode === 200,
      "2.5 Home HTML Status: GET / con Accept: text/html retorna 200",
      `Recibido: ${resHomeHtml.statusCode}`
    );
    assert(
      (resHomeHtml.headers["content-type"] || "").includes("text/html"),
      "2.6 Home HTML Content-Type: retorna text/html",
      `Recibido: ${resHomeHtml.headers["content-type"]}`
    );
    assert(
      (resHomeHtml.headers["vary"] || "").toLowerCase().includes("accept"),
      "2.7 Home HTML Vary: incluye Accept",
      `Recibido: ${resHomeHtml.headers["vary"]}`
    );

    // 3. Developer resource discoverability
    const resApi = await fetchLocal({ path: "/api" });
    assert(
      resApi.statusCode === 200 && resApi.body.includes("MCP") && resApi.body.includes("OpenAPI"),
      "3.1 Developer Portal: /api existe y documenta MCP, OpenAPI y llms.txt"
    );

    const resOpenApi = await fetchLocal({ path: "/api/openapi.json" });
    assert(
      resOpenApi.statusCode === 200 && resOpenApi.body.includes('"openapi":"3.1.0"'),
      "3.2 OpenAPI Spec: /api/openapi.json retorna especificación OpenAPI 3.1 válida"
    );

    // 4. Brand name discoverability
    assert(
      resHomeHtml.body.includes("Dr. Aldo Antonio Morales Vleeschower") &&
        (resHomeHtml.body.includes("Geriatría") || resHomeHtml.body.includes("Medicina Interna")),
      "4.1 Brand Discovery: Nombre del doctor y especialidad presentes en título y encabezados"
    );

    // 5. Agent instruction / when-to-use
    const resLlms = await fetchLocal({ path: "/llms.txt" });
    assert(
      resLlms.statusCode === 200 &&
        resLlms.body.includes("When to Use") &&
        resLlms.body.includes("When NOT to Use"),
      "5.1 Agent Instructions: llms.txt contiene secciones 'When to Use' y 'When NOT to Use'"
    );

    const resAgentInstructions = await fetchLocal({ path: "/agent-instructions.md" });
    assert(
      resAgentInstructions.statusCode === 200 &&
        resAgentInstructions.body.includes("Protocolo de Urgencias"),
      "5.2 Agent Guidance: /agent-instructions.md disponible con protocolo clínico para agentes"
    );

    // 6. Organization schema completeness & 7. JSON-LD structured data
    assert(
      resHomeHtml.body.includes('"Organization"') &&
        resHomeHtml.body.includes('"contactPoint"') &&
        resHomeHtml.body.includes('"PostalAddress"'),
      "6.1 Organization Schema: JSON-LD incluye Organization con contactPoint y PostalAddress"
    );
    assert(
      resHomeHtml.body.includes('"Person"') && resHomeHtml.body.includes('"Physician"'),
      "7.1 Identity Type: JSON-LD incluye tipos de identidad reconocibles (Person, Physician)"
    );

    // 8. Metadata completeness
    assert(
      resHomeHtml.body.includes('rel="canonical"') &&
        resHomeHtml.body.includes('property="og:image"') &&
        resHomeHtml.body.includes('property="og:type"') &&
        resHomeHtml.body.includes('lang="es-MX"'),
      "8.1 Metadata Completeness: canonical, og:image, og:type y html lang presentes en homepage"
    );

    // 9. Trust anchor pages
    const resAbout = await fetchLocal({ path: "/about" });
    assert(
      resAbout.statusCode === 200 && resAbout.body.length >= 500,
      `9.1 Trust Anchor /about: status 200 y >= 500 caracteres (longitud: ${resAbout.body.length})`
    );

    const resContact = await fetchLocal({ path: "/contact" });
    assert(
      resContact.statusCode === 200 && resContact.body.length >= 500,
      `9.2 Trust Anchor /contact: status 200 y >= 500 caracteres (longitud: ${resContact.body.length})`
    );

    const resPrivacy = await fetchLocal({ path: "/privacy" });
    assert(
      resPrivacy.statusCode === 200 && resPrivacy.body.length >= 500,
      `9.3 Trust Anchor /privacy: status 200 y >= 500 caracteres (longitud: ${resPrivacy.body.length})`
    );

    // 10. MCP server & manifest
    const resMcpJson = await fetchLocal({ path: "/.well-known/mcp.json" });
    assert(
      resMcpJson.statusCode === 200 && resMcpJson.body.includes("dr_aldo_morales_geriatria"),
      "10.1 MCP Manifest: /.well-known/mcp.json retorna manifiesto válido"
    );

    const resMcpWellKnown = await fetchLocal({ path: "/.well-known/mcp" });
    assert(
      resMcpWellKnown.statusCode === 200 && resMcpWellKnown.body.includes("dr_aldo_morales_geriatria"),
      "10.2 MCP Discovery: /.well-known/mcp retorna manifiesto válido"
    );

    const resMcpInit = await fetchLocal({
      path: "/api/mcp",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "initialize",
        params: {},
        id: 1,
      }),
    });
    assert(
      resMcpInit.statusCode === 200 && resMcpInit.body.includes("dr_aldo_morales_mcp"),
      "10.3 MCP Initialize: POST /api/mcp responde handshake con capacidades y protocolo"
    );

    const resMcpToolsList = await fetchLocal({
      path: "/api/mcp",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "tools/list",
        params: {},
        id: 2,
      }),
    });
    assert(
      resMcpToolsList.statusCode === 200 &&
        resMcpToolsList.body.includes("get_doctor_profile") &&
        resMcpToolsList.body.includes("list_conditions"),
      "10.4 MCP Tools List: POST /api/mcp lista las 7 herramientas clínicas disponibles"
    );

    const resMcpToolsCall = await fetchLocal({
      path: "/api/mcp",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "tools/call",
        params: {
          name: "get_appointment_info",
          arguments: {},
        },
        id: 3,
      }),
    });
    assert(
      resMcpToolsCall.statusCode === 200 &&
        resMcpToolsCall.body.includes("whatsapp") &&
        (resMcpToolsCall.body.includes("700") || resMcpToolsCall.body.includes("MXN")),
      "10.5 MCP Tool Call: POST /api/mcp ejecuta get_appointment_info con honorarios y WhatsApp"
    );

    console.log("\n=================================================");
    console.log(`  RESULTADO: ${passedCount} pasaron, ${failedCount} fallaron`);
    console.log("=================================================");

    if (failedCount > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error("Error al ejecutar las pruebas:", error);
    process.exit(1);
  }
}

runTests();
