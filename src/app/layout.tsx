import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tobias Ceballos | Agencia Digital - Community Management, Desarrollo Web y Automatización",
  description: "Tobias Ceballos es una agencia digital en Mar del Plata que ofrece servicios de community management, desarrollo web, diseño de páginas, consultoría digital y automatización para impulsar tu negocio online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Tobias Ceballos, agencia digital, community management, desarrollo web, diseño de páginas web, consultoría digital, automatización, marketing digital, Mar del Plata" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tobias Ceballos" />
        <meta property="og:title" content="Tobias Ceballos | Agencia Digital - Community Management y Desarrollo Web" />
        <meta property="og:description" content="Tobias Ceballos es una agencia digital en Mar del Plata especializada en community management, desarrollo web, diseño de páginas, consultoría digital y automatización." />
        <meta property="og:image" content="/assets/TC.png" /> {/* Cambiá esta ruta a la imagen que quieras mostrar */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tobiasceballos.com" /> {/* Colocá tu URL */}
        <meta name="description" content="Tobias Ceballos es una agencia digital en Mar del Plata que ofrece servicios de community management, desarrollo web, diseño de páginas, consultoría digital y automatización para potenciar tu negocio." />
        <meta name="instagram:account" content="toby.ceballos" /> {/* Mencioná tu cuenta de Instagram */}
        <link rel="canonical" href="https://tobiasceballos.com" />

        {/* JSON-LD para rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tobias Ceballos",
              "url": "https://tobiasceballos.com",
              "logo": "/assets/TC.png", // Ruta a tu logo
              "sameAs": [
                "https://www.instagram.com/toby.ceballos",
                "https://www.linkedin.com/in/tobiasceballos"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54 9 223 1234567", // Cambiá el número de teléfono
                "contactType": "Customer Service",
                "areaServed": "AR",
                "availableLanguage": "Spanish"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mar del Plata",
                "addressCountry": "AR"
              }
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
