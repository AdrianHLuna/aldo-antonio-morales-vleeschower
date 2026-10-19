import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake del usuario (2026-10-15). Sin fabricar nada no
// entregado: correo, logo/paleta de marca, fotos, ficha de Google, widget de
// agenda y testimonios quedan PENDIENTE — no inventados.
//
// Nota de las cédulas: el usuario entregó el mismo número (1234567) para
// Céd. Prof. y Céd. Esp., ambas de la UNAM — se usa tal cual lo dado, pero
// conviene confirmarlo con el doctor antes de publicar (un número idéntico
// para dos cédulas distintas es inusual).
export const doctor: DoctorProfile = {
  name: "Aldo Antonio Morales Vleeschower",
  title: "Dr.",
  specialty: "Medicina Interna",
  subspecialty: "Geriatría",
  specialistTitle: "Internista Geriatra",
  cedula: "1234567",
  cedulaInstitucion: "UNAM",
  cedulaEspecialidad: "1234567",
  cedulaEspecialidadInstitucion: "UNAM",
  // Sin folio COFEPRIS confirmado todavía — "En trámite" se muestra siempre
  // junto a las cédulas en el Header (instrucción explícita del usuario,
  // nunca omitir este campo mientras no haya folio real).
  cofepris: "En trámite",
  phone: "+529612981369",
  whatsapp: "+529612981369",
  emergencyPhone: "+529612981369",
  email: "contacto@pendiente-datos.mx", // PENDIENTE — no proporcionado.
  address: "13a Avenida Norte Poniente 175, entre Calle Central y 1a Poniente, Colonia Centro, Barrio Niño de Atocha, CP 29037",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=13a+Avenida+Norte+Poniente+175%2C+Colonia+Centro%2C+Tuxtla+Guti%C3%A9rrez%2C+Chiapas",
  consultationPrice: 700,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de crédito"],
  insurances: ["No se aceptan seguros de gastos médicos mayores"],
  schedule: "Lunes a viernes, 8:00 a.m. a 8:00 p.m.",
  acceptingNewPatients: true,
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Aldo Antonio Morales Vleeschower es internista con subespecialidad en Geriatría en Tuxtla Gutiérrez, Chiapas. Con más de 20 años de experiencia y más de 10,000 pacientes atendidos, combina el manejo integral de enfermedades crónicas del adulto con un enfoque geriátrico centrado en la autonomía, la dignidad y el acompañamiento familiar.",
  philosophy: "Cada paciente merece tiempo, escucha y un manejo médico integral — no solo una receta.",
  experience: [],
  stats: [
    { label: "Pacientes atendidos", value: "+10,000" },
    { label: "Procedimientos realizados", value: "+10,000" },
    { label: "Años de experiencia", value: "+20" },
  ],
  certifications: [
    { name: "Certificado por el Consejo Mexicano de Medicina Interna", institution: "Consejo Mexicano de Medicina Interna" },
    { name: "Certificado por el Consejo Mexicano de Geriatría", institution: "Consejo Mexicano de Geriatría" },
    { name: "Soporte Vital Cardiovascular Avanzado (ACLS)", institution: "American Heart Association" },
    { name: "Soporte Vital Avanzado en Trauma (ATLS)", institution: "American College of Surgeons" },
    { name: "Soporte Vital Básico (BLS)", institution: "American Heart Association" },
  ],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Nacional Autónoma de México (UNAM)" },
    { degree: "Especialidad en Medicina Interna", institution: "Universidad Nacional Autónoma de México (UNAM)" },
  ],
  sameAs: ["https://www.facebook.com/geriatratuxtla/"],
};
