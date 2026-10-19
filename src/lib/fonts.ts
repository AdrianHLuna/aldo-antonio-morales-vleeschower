import { Montserrat, EB_Garamond } from "next/font/google";

// Tipografía real de marca (guía entregada 2026-10-19, extraída del
// logotipo real que se incorporará más adelante): Montserrat para el
// nombre y la especialidad (sans-serif geométrica, el propio doctor la usa
// con tracking amplio en "GERIATRA E INTERNISTA") y EB Garamond — alternativa
// libre más cercana a Garamond/Baskerville — reservada solo para el
// apellido "Morales Vleeschower" (serif clásica con contraste ligero,
// ver .font-surname en globals.css). Ambas gratuitas en Google Fonts.
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-garamond",
});
