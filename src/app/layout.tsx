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
  title: "Tobias Ceballos | Servicio de desarrollo web en Argentina",
  description: "Soy Tobias Ceballos, desarrollador web en Mar del Plata, especializado en crear sitios modernos, optimizados y personalizados para negocios y emprendedores. Consultá nuestros planes de pago y servicios de community management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Desarrollador web, Mar del Plata, Diseño web, Community Management, Servicios web, Planes de pago" />
        <meta property="og:title" content="Tobias Ceballos | Servicio de desarrollo web en Mar del Plata" />
        <meta property="og:description" content="Soy Tobias Ceballos, desarrollador web en Mar del Plata, especializado en crear sitios modernos y personalizados. Consultá por nuestros servicios y planes." />
        <meta property="og:image" content="/assets/TC.png" /> {/* Cambiá esta ruta a la imagen que quieras mostrar */}
        <meta property="og:type" content="website" />
        <meta name="description" content="Soy Tobias Ceballos, desarrollador web en Mar del Plata, especializado en crear sitios modernos y personalizados. Consultá por nuestros servicios y planes." />
        <meta property="og:url" content="https://tobiasceballos.com" /> {/* Colocá tu URL */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
        <Footer/>
      </body>
    </html>
  );
}
