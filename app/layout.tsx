import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-qb-extension-installed="true"
        data-qb-installed="true"
        className={`${geistMono.variable} ${signora.variable} ${tanpearl.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
