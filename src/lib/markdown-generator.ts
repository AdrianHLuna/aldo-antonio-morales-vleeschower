import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aldo-antonio-morales-vleeschower.vercel.app";

export function getNotFoundMarkdown(path: string): string {
  return `# 404 - Recurso No Encontrado / Resource Not Found

El recurso solicitado \`${path}\` no existe en el sitio oficial del Dr. Aldo Antonio Morales Vleeschower (Geriatría y Medicina Interna en Tuxtla Gutiérrez, Chiapas).

## Recursos Disponibles para Agentes y Usuarios

- **Página de Inicio**: [${baseUrl}/](${baseUrl}/)
- **Guía para Agentes y LLMs (llms.txt)**: [${baseUrl}/llms.txt](${baseUrl}/llms.txt)
- **Instrucciones para Agentes**: [${baseUrl}/agent-instructions.md](${baseUrl}/agent-instructions.md)
- **Servidor MCP (Model Context Protocol)**: [${baseUrl}/api/mcp](${baseUrl}/api/mcp)
- **Manifiesto MCP**: [${baseUrl}/.well-known/mcp.json](${baseUrl}/.well-known/mcp.json)
- **Especificación OpenAPI 3.1**: [${baseUrl}/api/openapi.json](${baseUrl}/api/openapi.json)
- **Portal de Desarrolladores**: [${baseUrl}/api](${baseUrl}/api)
- **Mapa del Sitio (Sitemap)**: [${baseUrl}/sitemap.xml](${baseUrl}/sitemap.xml)
- **Sobre el Doctor**: [${baseUrl}/about](${baseUrl}/about)
- **Contacto y Citas**: [${baseUrl}/contact](${baseUrl}/contact)
- **Aviso de Privacidad**: [${baseUrl}/privacy](${baseUrl}/privacy)
- **Condiciones que Atendemos (15)**: [${baseUrl}/enfermedades](${baseUrl}/enfermedades)
- **Servicios Geriátricos (14)**: [${baseUrl}/servicios](${baseUrl}/servicios)
- **Guía de Síntomas (13)**: [${baseUrl}/sintomas](${baseUrl}/sintomas)

Para asistencia directa o agendar consulta médica presencial o a domicilio en Tuxtla Gutiérrez:
- **Teléfono**: ${doctor.phone}
- **WhatsApp**: ${doctor.whatsapp}
- **Dirección**: ${doctor.address}, ${doctor.city}, ${doctor.state}, México
`.trim();
}

export function getHomeMarkdown(): string {
  return `# ${doctor.title} ${doctor.name} — Geriatría y Medicina Interna en ${doctor.city}

> **Práctica Médica Oficial**: ${doctor.specialistTitle || doctor.specialty} con consultorio en ${doctor.city}, ${doctor.state}, México.
> **Sitio Web Oficial**: ${baseUrl}

## Datos Clave del Consultorio

- **Médico Especialista**: ${doctor.title} ${doctor.name}
- **Especialidad**: ${doctor.specialty} (Medicina Interna y Geriatría)
- **Cédula Profesional**: ${doctor.cedula}${doctor.cedulaInstitucion ? ` (${doctor.cedulaInstitucion})` : ""}
- **Cédula de Especialidad**: ${doctor.cedulaEspecialidad ? `${doctor.cedulaEspecialidad}${doctor.cedulaEspecialidadInstitucion ? ` (${doctor.cedulaEspecialidadInstitucion})` : ""}` : "En trámite/registro"}
${doctor.cedulaSubespecialidad ? `- **Cédula de Subespecialidad**: ${doctor.cedulaSubespecialidad}${doctor.cedulaSubespecialidadInstitucion ? ` (${doctor.cedulaSubespecialidadInstitucion})` : ""}` : ""}
- **Dirección**: ${doctor.address}, ${doctor.city}, ${doctor.state}, México
- **Horario de Atención**: ${doctor.schedule}
- **Honorarios Consulta**: $${doctor.consultationPrice} MXN (primera vez y seguimiento)
- **Métodos de Pago**: ${doctor.paymentMethods.join(", ")}
${doctor.insurances ? `- **Aseguradoras**: ${doctor.insurances.join(", ")}` : ""}
- **Teléfono de Citas**: ${doctor.phone}
- **WhatsApp Directo**: ${doctor.whatsapp}
- **Ubicación Google Maps**: ${doctor.googleMapsUrl}

## Filosofía de Atención

> "${doctor.philosophy}"

${doctor.bio}

## Servicios Médicos Principales (${services.length} disponibles)

${services
  .slice(0, 6)
  .map(
    (s) => `### [${s.name}](${baseUrl}/servicios/${s.slug})
${s.description}
- **Tipo**: ${s.type} | **Duración**: ${s.duration || "Variable"} | **Molestia**: ${s.isPainful ? "Puede incomodar" : "No invasivo"}`
  )
  .join("\n\n")}

[Ver catálogo completo de servicios (${services.length})](${baseUrl}/servicios)

## Condiciones y Enfermedades que Atendemos (${diseases.length} disponibles)

${diseases
  .slice(0, 6)
  .map(
    (d) => `### [${d.name}](${baseUrl}/enfermedades/${d.slug})
${d.description.substring(0, 220)}...
- **Síntomas clave**: ${d.symptoms.slice(0, 4).join(", ")}
- **Factores de riesgo**: ${d.riskFactors.slice(0, 3).join(", ")}`
  )
  .join("\n\n")}

[Ver catálogo completo de condiciones (${diseases.length})](${baseUrl}/enfermedades)

## Guía de Señales y Síntomas para Cuidadores (${symptoms.length} disponibles)

${symptoms
  .slice(0, 6)
  .map(
    (s) => `### [${s.name}](${baseUrl}/sintomas/${s.slug})
${s.description}
- **Señales de alarma**: ${s.alarmSigns.join(" · ")}`
  )
  .join("\n\n")}

[Ver guía completa de síntomas (${symptoms.length})](${baseUrl}/sintomas)

## Recursos para Agentes y Desarrolladores

- **Instrucciones para Agentes y Casos de Uso**: [${baseUrl}/llms.txt](${baseUrl}/llms.txt)
- **Guía de Cuándo Usar**: [${baseUrl}/agent-instructions.md](${baseUrl}/agent-instructions.md)
- **Servidor MCP**: [${baseUrl}/api/mcp](${baseUrl}/api/mcp)
- **Manifiesto MCP**: [${baseUrl}/.well-known/mcp.json](${baseUrl}/.well-known/mcp.json)
- **Especificación OpenAPI**: [${baseUrl}/api/openapi.json](${baseUrl}/api/openapi.json)
- **Portal de APIs**: [${baseUrl}/api](${baseUrl}/api)
- **Aviso de Privacidad**: [${baseUrl}/privacy](${baseUrl}/privacy)
- **Sobre el Doctor**: [${baseUrl}/about](${baseUrl}/about)
- **Contacto**: [${baseUrl}/contact](${baseUrl}/contact)
`.trim();
}

export function getAboutMarkdown(): string {
  return `# Sobre ${doctor.title} ${doctor.name}

> Especialista en Medicina Interna y Geriatría con más de 20 años de experiencia clínica en el cuidado integral del adulto mayor en ${doctor.city}, ${doctor.state}.

## Formación Académica y Cédulas

${doctor.education.map((e) => `- **${e.degree}**: ${e.institution}${e.year ? ` (${e.year})` : ""}`).join("\n")}
- **Cédula Profesional**: ${doctor.cedula}${doctor.cedulaInstitucion ? ` (${doctor.cedulaInstitucion})` : ""}
${doctor.cedulaEspecialidad ? `- **Cédula de Especialidad**: ${doctor.cedulaEspecialidad}${doctor.cedulaEspecialidadInstitucion ? ` (${doctor.cedulaEspecialidadInstitucion})` : ""}` : ""}
${doctor.cedulaSubespecialidad ? `- **Cédula de Subespecialidad**: ${doctor.cedulaSubespecialidad}${doctor.cedulaSubespecialidadInstitucion ? ` (${doctor.cedulaSubespecialidadInstitucion})` : ""}` : ""}
${doctor.cofepris ? `- **Aviso COFEPRIS**: ${doctor.cofepris}` : ""}

## Certificaciones y Colegios Médicos

${doctor.certifications.map((c) => `- **${c.name}**: ${c.institution}${c.year ? ` (${c.year})` : ""}`).join("\n")}

## Trayectoria y Experiencia

${doctor.experience.map((exp) => `### ${exp.title} (${exp.year})\n${exp.description}`).join("\n\n")}

## Filosofía Médica

> "${doctor.philosophy}"

${doctor.bio}

## Consultorio y Contacto

- **Dirección**: ${doctor.address}, ${doctor.city}, ${doctor.state}, México
- **Teléfono**: ${doctor.phone}
- **WhatsApp**: ${doctor.whatsapp}
- **Citas**: [${baseUrl}/contact](${baseUrl}/contact)
`.trim();
}

export function getPrivacyMarkdown(): string {
  return `# Aviso de Privacidad Integral

**Responsable del Tratamiento de Datos Personales**:
${doctor.title} ${doctor.name}, con domicilio en ${doctor.address}, ${doctor.city}, ${doctor.state}, México.

## 1. Datos Personales Recabados
Recabamos los siguientes datos personales cuando el paciente o su familiar los proporciona directamente:
- Datos de identificación: Nombre completo, edad, fecha de nacimiento.
- Datos de contacto: Teléfono, número de WhatsApp, correo electrónico, domicilio.
- Datos de salud (sensibles): Antecedentes médicos, diagnósticos previos, medicamentos actuales, sintomatología y motivo de consulta.

## 2. Finalidades del Tratamiento
Los datos personales recabados serán utilizados para las siguientes finalidades necesarias:
- Programación, confirmación y seguimiento de consultas médicas geriátricas y valoraciones integrales.
- Elaboración y resguardo del expediente clínico conforme a la NOM-004-SSA3-2012.
- Emisión de comprobantes fiscales y recibos de honorarios médicos.
- Contacto con familiares responsables o cuidadores primarios en caso de orientación médica o seguimiento clínico.

## 3. Ejercicio de Derechos ARCO
Usted o su representante legal debidamente acreditado tienen derecho de Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos:
- Correo electrónico: ${doctor.email}
- Teléfono de atención: ${doctor.phone}
- Domicilio del consultorio: ${doctor.address}, ${doctor.city}, ${doctor.state}

## 4. Uso de Cookies y Tecnologías de Rastreo
Este sitio web utiliza cookies técnicas necesarias para la navegación y cookies analíticas de Google Analytics únicamente tras la aceptación explícita en nuestro banner de consentimiento.

Última actualización: 2026-10-15 conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
`.trim();
}

export function getContactMarkdown(): string {
  return `# Contacto y Citas — ${doctor.title} ${doctor.name}

Para agendar una valoración médica geriátrica o solicitar consulta a domicilio en ${doctor.city}:

- **Médico**: ${doctor.title} ${doctor.name}
- **Especialidad**: ${doctor.specialistTitle || doctor.specialty}
- **Dirección**: ${doctor.address}, ${doctor.city}, ${doctor.state}, México
- **Horario**: ${doctor.schedule}
- **Teléfono directo**: ${doctor.phone}
- **WhatsApp para citas**: [Mensaje de WhatsApp](https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=Hola%2C%20quisiera%20agendar%20una%20cita%20con%20el%20Dr.%20Aldo%20Morales)
- **Correo electrónico**: ${doctor.email}
- **Honorarios**: $${doctor.consultationPrice} MXN por consulta
- **Métodos de pago**: ${doctor.paymentMethods.join(", ")}
${doctor.insurances ? `- **Aseguradoras**: ${doctor.insurances.join(", ")}` : ""}
- **Ubicación en Google Maps**: [Ver en Google Maps](${doctor.googleMapsUrl})

## Señales de Urgencia
Si el paciente adulto mayor presenta dolor de pecho intenso, dificultad respiratoria súbita, pérdida súbita del conocimiento o signos de evento vascular cerebral, **no espere una cita programada**: acuda de inmediato al servicio de urgencias más cercano o llame al 911.
`.trim();
}

export function getDiseasesListMarkdown(): string {
  return `# Condiciones y Enfermedades que Atendemos

${doctor.title} ${doctor.name} atiende ${diseases.length} condiciones de salud geriátricas y crónicas en ${doctor.city}, Chiapas.

${diseases
  .map(
    (d, index) => `## ${index + 1}. [${d.name}](${baseUrl}/enfermedades/${d.slug})
${d.technicalName ? `*Nombre técnico: ${d.technicalName}*\n` : ""}${d.description}

- **Síntomas principales**: ${d.symptoms.join("; ")}
- **Causas**: ${d.causes.join("; ")}
- **Factores de riesgo**: ${d.riskFactors.join("; ")}
- **Complicaciones**: ${d.complications.join("; ")}
- **Enfoque de tratamiento**: ${d.treatments.join("; ")}
${d.mexicoStats ? `- **Contexto epidemiológico**: ${d.mexicoStats}` : ""}`
  )
  .join("\n\n---\n\n")}
`.trim();
}

export function getDiseaseDetailMarkdown(slug: string): string | null {
  const d = diseases.find((item) => item.slug === slug);
  if (!d) return null;

  return `# ${d.name} — Dr. Aldo Antonio Morales Vleeschower

> **Especialidad**: ${doctor.specialty} · Consultorio en ${doctor.city}, Chiapas.
${d.technicalName ? `> **Nombre clínico**: ${d.technicalName}\n` : ""}${d.colloquialNames?.length ? `> **Nombres comunes**: ${d.colloquialNames.join(", ")}\n` : ""}

## Descripción
${d.description}

## Síntomas
${d.symptoms.map((s) => `- ${s}`).join("\n")}

## Causas
${d.causes.map((c) => `- ${c}`).join("\n")}

## Factores de Riesgo
${d.riskFactors.map((r) => `- ${r}`).join("\n")}

## Complicaciones Posibles
${d.complications.map((c) => `- ${c}`).join("\n")}

## Enfoque Terapéutico y Manejo
${d.treatments.map((t) => `- ${t}`).join("\n")}

${d.mexicoStats ? `## Epidemiología en México\n${d.mexicoStats}\n` : ""}

## Preguntas Frecuentes
${d.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}

## Agendar Consulta
El ${doctor.title} ${doctor.name} atiende esta condición de forma personalizada en su consultorio de ${doctor.city} y mediante visita domiciliaria en casos requeridos.
- **Teléfono**: ${doctor.phone}
- **WhatsApp**: ${doctor.whatsapp}
- **Dirección**: ${doctor.address}, ${doctor.city}, ${doctor.state}
`.trim();
}

export function getServicesListMarkdown(): string {
  return `# Servicios y Procedimientos Geriátricos

El ${doctor.title} ${doctor.name} ofrece ${services.length} servicios médicos especializados en ${doctor.city}, Chiapas.

${services
  .map(
    (s, index) => `## ${index + 1}. [${s.name}](${baseUrl}/servicios/${s.slug})
${s.description}

- **Modalidad**: ${s.type}
- **Duración estimada**: ${s.duration || "Variable según el caso"}
- **Nivel de molestia**: ${s.isPainful ? "Puede incomodar levemente" : "Procedimiento no invasivo / sin dolor"}
- **Beneficios**: ${s.benefits.join("; ")}
- **Recomendaciones**: ${s.postOpRecommendations.join("; ")}`
  )
  .join("\n\n---\n\n")}
`.trim();
}

export function getServiceDetailMarkdown(slug: string): string | null {
  const s = services.find((item) => item.slug === slug);
  if (!s) return null;

  return `# ${s.name} — Dr. Aldo Antonio Morales Vleeschower

> **Servicio médico geriátrico** en ${doctor.city}, Chiapas.

## Descripción del Servicio
${s.description}

## ¿En qué consiste?
${s.longDescription}

## Ficha Técnica del Servicio
- **Tipo de atención**: ${s.type}
- **Duración**: ${s.duration || "Variable"}
- **Molestia**: ${s.isPainful ? "Puede generar ligera molestia" : "No invasivo"}
- **Tiempo de recuperación**: ${s.recoveryTime || "Inmediata"}
${s.anesthesiaType ? `- **Tipo de anestesia**: ${s.anesthesiaType}` : ""}
${s.priceRange ? `- **Rango de precio**: ${s.priceRange}` : ""}

## Beneficios Principales
${s.benefits.map((b) => `- ${b}`).join("\n")}

## Recomendaciones para la Consulta
${s.postOpRecommendations.map((r) => `- ${r}`).join("\n")}

${s.faqs?.length ? `## Preguntas Frecuentes\n${s.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}\n` : ""}

## Agendar este Servicio
- **Teléfono**: ${doctor.phone}
- **WhatsApp**: ${doctor.whatsapp}
- **Consultorio**: ${doctor.address}, ${doctor.city}, ${doctor.state}
`.trim();
}

export function getSymptomsListMarkdown(): string {
  return `# Guía de Señales y Síntomas para Cuidadores

Orientación clínica para familiares y cuidadores de adultos mayores en ${doctor.city}, Chiapas.

${symptoms
  .map(
    (s, index) => `## ${index + 1}. [${s.name}](${baseUrl}/sintomas/${s.slug})
${s.description}

- **Causas frecuentes**: ${s.causes.join("; ")}
- **Señales de alarma (acudir a urgencias)**: ${s.alarmSigns.join("; ")}
- **¿Por qué consultar al geriatra?**: ${s.whyConsult}`
  )
  .join("\n\n---\n\n")}
`.trim();
}

export function getSymptomDetailMarkdown(slug: string): string | null {
  const s = symptoms.find((item) => item.slug === slug);
  if (!s) return null;

  return `# ${s.name} en el Adulto Mayor — Dr. Aldo Antonio Morales Vleeschower

> **Guía para familiares y cuidadores** · ${doctor.title} ${doctor.name}, ${doctor.specialty}.
${s.colloquialNames?.length ? `> **También descrito como**: ${s.colloquialNames.join(", ")}\n` : ""}

## Descripción
${s.description}

## ⚠️ Señales de Alarma (Acudir a Urgencias de Inmediato)
Si el paciente presenta cualquiera de estas señales, no espere una consulta programada:
${s.alarmSigns.map((sign) => `- **${sign}**`).join("\n")}

## Causas Posibles
${s.causes.map((c) => `- ${c}`).join("\n")}

## ¿Por qué consultar a un Geriatra?
${s.whyConsult}

${s.faqs?.length ? `## Preguntas Frecuentes\n${s.faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}\n` : ""}

## Agendar Valoración
- **Teléfono**: ${doctor.phone}
- **WhatsApp**: ${doctor.whatsapp}
- **Consultorio**: ${doctor.address}, ${doctor.city}, ${doctor.state}
`.trim();
}

export function getApiMarkdown(): string {
  return `# Recursos para Desarrolladores y Agentes de IA

Bienvenido a la interfaz para desarrolladores y agentes autónomos de la práctica médica del **Dr. Aldo Antonio Morales Vleeschower** (${doctor.specialty}, Tuxtla Gutiérrez, Chiapas, México).

## Endpoints y Recursos Disponibles

1. **Protocolo MCP (Model Context Protocol)**:
   - Endpoint: \`${baseUrl}/api/mcp\` (Transporte Streamable HTTP y JSON-RPC 2.0)
   - Manifiesto MCP: [${baseUrl}/.well-known/mcp.json](${baseUrl}/.well-known/mcp.json) y [${baseUrl}/.well-known/mcp](${baseUrl}/.well-known/mcp)
   - Herramientas soportadas: \`get_doctor_profile\`, \`list_conditions\`, \`get_condition_detail\`, \`list_services\`, \`get_service_detail\`, \`list_symptoms\`, \`get_appointment_info\`.

2. **Negociación de Contenido Markdown (Accept: text/markdown)**:
   - Todo el sitio soporta negociación de contenido RFC: envíe la cabecera \`Accept: text/markdown\` a cualquier URL pública para recibir una versión limpia en Markdown con cabecera \`Vary: Accept\`.

3. **Especificación OpenAPI 3.1**:
   - Endpoint: [${baseUrl}/api/openapi.json](${baseUrl}/api/openapi.json)
   - Documenta los métodos JSON-RPC del MCP server y las rutas públicas.

4. **Guía para Modelos de Lenguaje (llms.txt)**:
   - Archivo: [${baseUrl}/llms.txt](${baseUrl}/llms.txt)
   - Incluye secciones explícitas de "Cuándo usar esta práctica" y "Cuándo NO usar (Urgencias)".

5. **Instrucciones para Agentes**:
   - Archivo: [${baseUrl}/agent-instructions.md](${baseUrl}/agent-instructions.md)

6. **Datos Estructurados Schema.org**:
   - Grafo JSON-LD disponible en el HTML de la página de inicio y páginas de detalle con tipos \`Person\`, \`Physician\`, \`Organization\`, \`MedicalOrganization\`, \`ContactPoint\`, y \`PostalAddress\`.
`.trim();
}
