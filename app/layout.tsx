import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signora = localFont({
  src: "./fonts/LaSignora.ttf",
  variable: "--font-signora",
});

const tanpearl = localFont({
  src: "./fonts/tan-pearl.otf",
  variable: "--font-tanpearl",
});

export const metadata: Metadata = {
  title: "Latifa Sensitiva | Consultas e Trabalhos Espirituais",
  description: "Consultas espirituais, tarot e trabalhos de amor com a Latifa Sensitiva. Encontre orientação e harmonia em sua vida através da espiritualidade.",
  keywords: ["Latifa Sensitiva", "Tarot Online", "Amarração Amorosa", "Trabalhos Espirituais", "União de Casais", "Vidente", "Cartomante"],
  authors: [{ name: "Latifa Sensitiva" }],
  creator: "Latifa Sensitiva",
  publisher: "Sales Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Latifa Sensitiva | Consultas e Trabalhos Espirituais",
    description: "Abra seus caminhos e conquiste seus sonhos com equilíbrio e harmonia através da espiritualidade.",
    url: "https://latifasensitiva.top",
    siteName: "Latifa Sensitiva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/roda-fortuna.png",
        width: 1200,
        height: 630,
        alt: "Latifa Sensitiva - Roda da Fortuna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latifa Sensitiva | Consultas e Trabalhos Espirituais",
    description: "Consultas espirituais, tarot e trabalhos de amor com a Latifa Sensitiva.",
    images: ["/roda-fortuna.png"],
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
  themeColor: "#dc2626",
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
    "image": "https://latifasensitiva.top/roda-fortuna.png",
    "description": "Consultas espirituais, tarot e trabalhos de amor com a Latifa Sensitiva. Encontre orientação e harmonia em sua vida através da espiritualidade.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "url": "https://latifasensitiva.top",
    "telephone": "+5511971093420",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
      
      {/* Google tag (gtag.js) */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=AW-16937601495" 
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16937601495');
        `}
      </Script>
      
      <body
        data-qb-extension-installed="true"
        data-qb-installed="true"
        className={`${geistMono.variable} ${signora.variable} ${tanpearl.variable} antialiased`}
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
