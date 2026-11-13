import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { montserrat, ebGaramond } from "@/lib/fonts";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialty} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163354",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} ${ebGaramond.variable}`}>
      <head>
        {/* Consent Mode — DEBE ir antes de cargar GTM/gtag (AGENTS.md §8).
            Sin este bloque, GTM/GA4/Ads empiezan a enviar datos de inmediato
            al cargar la página, sin esperar el clic de "Aceptar" en
            CookieConsentBanner.tsx — contradice lo que /aviso-de-privacidad
            promete por escrito. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});`,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8F3QRSX');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) - Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18573635373" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18573635373');`,
          }}
        />

        {/* Google tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7GR2KGHC0J" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7GR2KGHC0J');`,
          }}
        />
      </head>
      <body className="pb-16 md:pb-0">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8F3QRSX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
