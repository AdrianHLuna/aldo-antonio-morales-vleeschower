import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake del usuario (2026-10-15). Sin fabricar nada no
// entregado: correo, logo/paleta de marca, fotos, ficha de Google, widget de
// agenda y testimonios quedan PENDIENTE — no inventados.
//
// Cédulas profesionales e instituciones oficiales del médico:
// - Licenciatura (Médico Cirujano): Céd. Prof. 4840706 (IESCH)
// - Especialidad en Medicina Interna: Céd. Esp. 7047015 (UNACH)
// - Subespecialidad en Geriatría: Céd. Subesp. 14798007 (UNAM)
export const doctor: DoctorProfile = {
  name: "Aldo Antonio Morales Vleeschower",
  title: "Dr.",
  specialty: "Medicina Interna",
  subspecialty: "Geriatría",
  specialistTitle: "Internista Geriatra",
  cedula: "4840706",
  cedulaInstitucion: "IESCH",
  cedulaEspecialidad: "7047015",
  cedulaEspecialidadInstitucion: "UNACH",
  cedulaSubespecialidad: "14798007",
  cedulaSubespecialidadInstitucion: "UNAM",
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
  geo: {
    latitude: 16.76805,
    longitude: -93.11465,
  },
  googleMapsUrl: "https://www.google.com/maps?q=16.76805,-93.11465",
  consultationPrice: 700,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de crédito"],
  insurances: ["No se aceptan seguros de gastos médicos mayores"],
  schedule: "Lunes a viernes, 8:00 a.m. a 8:00 p.m.",
  acceptingNewPatients: true,
  photo: "/aboutme.jpeg",
  heroPhoto: "/hero.jpeg",
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
    { degree: "Médico Cirujano", institution: "Instituto de Estudios Superiores de Chiapas (IESCH)" },
    { degree: "Especialidad en Medicina Interna", institution: "Universidad Autónoma de Chiapas (UNACH)" },
    { degree: "Subespecialidad en Geriatría", institution: "Universidad Nacional Autónoma de México (UNAM)" },
  ],
  sameAs: ["https://www.facebook.com/geriatratuxtla/"],
};
