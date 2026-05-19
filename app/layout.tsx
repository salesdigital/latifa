import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const signora = localFont({
  src: "./fonts/LaSignora.ttf",
  variable: "--font-signora",
  display: "swap",
});

const tanpearl = localFont({
  src: "./fonts/tan-pearl.otf",
  variable: "--font-tanpearl",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://latifasensitiva.top'),
  alternates: {
    canonical: "https://latifasensitiva.top",
    languages: {
      "pt-BR": "https://latifasensitiva.top",
      "pt-PT": "https://latifasensitiva.top",
    },
  },
  other: {
    "social:image-version": "2026-05-13-v3",
  },
  title: "Latifa Sensitiva | Consultas Espirituais e Trabalhos de Amor",
  description: "Consultas espirituais online com Latifa Sensitiva. Tarô, vidência e trabalhos de amor para quem busca respostas, reconexão e clareza. Atendimento sigiloso e imediato para Portugal, Brasil e Europa.",
  keywords: [
    "Latifa Sensitiva",
    "consulta espiritual online",
    "taróloga online",
    "tarot online",
    "vidência",
    "amarração amorosa",
    "trabalhos espirituais",
    "consulta espiritual Portugal",
    "vidente online Europa",
    "cartomante online",
    "união de casais",
    "reconciliação amorosa",
    "leitura de cartas",
    "proteção espiritual",
    "trabalhos de amor",
  ],
  authors: [{ name: "Latifa Sensitiva" }],
  creator: "Latifa Sensitiva",
  publisher: "Sales Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Latifa Sensitiva | Os Astros Revelam o Que o Coração Já Sabe",
    description: "Sente que algo mudou no seu relacionamento? Receba orientação espiritual profunda, sigilosa e imediata. Atendimento para Portugal, Brasil e toda a Europa.",
    url: "https://latifasensitiva.top",
    siteName: "Latifa Sensitiva",
    locale: "pt_BR",
    alternateLocale: ["pt_PT"],
    type: "website",
    images: [
      {
        url: "/taro.jpeg?v=2026-05-13-v3",
        width: 1200,
        height: 630,
        alt: "Latifa Sensitiva — Consultas espirituais e trabalhos de amor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latifa Sensitiva | Consultas Espirituais Premium",
    description: "Orientação espiritual profunda para relacionamentos. Atendimento sigiloso e imediato.",
    images: ["/taro.jpeg?v=2026-05-13-v3"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Latifa Sensitiva",
    "image": "https://latifasensitiva.top/taro.jpeg?v=2026-05-13-v3",
    "description": "Consultas espirituais online com Latifa Sensitiva. Tarô, vidência e trabalhos de amor. Atendimento sigiloso e imediato para Portugal, Brasil e Europa.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "areaServed": [
      { "@type": "Country", "name": "Brazil" },
      { "@type": "Country", "name": "Portugal" },
      { "@type": "Continent", "name": "Europe" }
    ],
    "url": "https://latifasensitiva.top",
    "telephone": "+5511971093420",
    "priceRange": "$$",
    "serviceType": ["Consulta Espiritual", "Tarô Online", "Trabalhos de Amor", "Vidência", "Proteção Espiritual"],
    "availableLanguage": ["Portuguese"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
  };

  return (
    <html lang="pt">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2ZPRR84');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18097045279"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18097045279');
          `}
        </Script>
      </head>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${signora.variable} ${tanpearl.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2ZPRR84"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
