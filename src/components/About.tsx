import React from "react";
import Image from "next/image";
import Head from "next/head";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <>
      <Head>
        <title>Consultora Digital - Transformación Digital y Soluciones Innovadoras</title>
        <meta
          name="description"
          content="Somos una consultora digital especializada en la transformación digital, brindando soluciones innovadoras, de calidad y con precios competitivos para impulsar el éxito de tu negocio."
        />
        <meta
          name="keywords"
          content="consultora digital, transformación digital, soluciones innovadoras, calidad, éxito empresarial"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Desarrollo Digital Innovador",
              "url": "https://www.tusitio.com",
              "logo": "https://www.tusitio.com/assets/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+123456789",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/tusitio",
                "https://www.instagram.com/tusitio"
              ]
            })
          }}
        />
      </Head>

      <div
        className="py-40 bg-cover bg-center"
        style={{ backgroundImage: "url('./assets/bg.png')" }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="relative w-1/3 md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
            <Image
              src="/assets/Lucho.png"
              alt="Testimonial de Lucho - Consultoría Digital"
              width={600}
              height={600}
              className="rounded-lg z-10 -top-8 -left-8 relative opacity-60"
            />
            <Image
              src="/assets/Luz.png"
              alt="Testimonial de Luz - Soluciones Digitales Innovadoras"
              width={600}
              height={600}
              className="rounded-lg absolute top-0 left-0 z-20 opacity-80"
            />
            <Image
              src="/assets/Toby.png"
              alt="Testimonial de Toby - Expertos en Consultoría Digital"
              width={600}
              height={600}
              className="rounded-lg absolute top-8 left-8 z-30"
            />
          </div>

          <div className="md:w-1/2 md:pl-12 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-red-500 text-lg font-semibold mb-2">Sobre nosotros</h2>
            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              Consultora Digital: Innovación, Calidad y Éxito para tu Negocio
            </h1>
            <p className="text-gray-300 text-md lg:text-lg mb-6">
              Nuestra misión es transformar ideas en soluciones digitales innovadoras que impulsen el éxito de nuestros clientes.
            </p>
            <div className="flex justify-center md:justify-start space-x-10 mb-6">
              <div>
                <span className="text-3xl font-bold">17 +</span>
                <p className="text-gray-400">Clientes</p>
              </div>
              <div>
                <span className="text-3xl font-bold">2 +</span>
                <p className="text-gray-400">Años de experiencia</p>
              </div>
            </div>
            <div className="w-full justify-end items-end">
              <a
                href="#"
                className="w-fit bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Consultoría gratuita
              </a>
            </div>
            <div className="mt-10">
              <h3 className="mb-2 text-red-500 font-serif text-lg">¿Por qué elegirnos?</h3>
              <div className="flex flex-wrap text-sm justify-center lg:justify-start lg:text-lg gap-4">
                {[
                  "Calidad Garantizada",
                  "Soporte Personalizado",
                  "Innovación",
                  "Confianza",
                ].map((texto, index) => (
                  <span key={index} className="flex items-center gap-x-1">
                    <IoMdCheckmarkCircleOutline /> {texto}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
