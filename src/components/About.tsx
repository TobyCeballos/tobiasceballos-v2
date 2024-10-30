import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="py-40 bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Imágenes apiladas */}
        <div className="relative w-1/3 md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0">
          {/* Primera imagen (más grande y en primer plano) */}
          <Image
            src="/assets/Lucho.png"
            alt="Testimonial 1"
            width={600}
            height={600}
            className="rounded-lg z-10 -top-8 -left-8 relative opacity-60"
          />
          {/* Segunda imagen, desplazada */}
          <Image
            src="/assets/Luz.png"
            alt="Testimonial 2"
            width={600}
            height={600}
            className="rounded-lg absolute top-0 left-0 z-20 opacity-80"
          />
          {/* Tercera imagen, más desplazada */}
          <Image
            src="/assets/Toby.png"
            alt="Testimonial 3"
            width={600}
            height={600}
            className="rounded-lg absolute top-8 left-8 z-30"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-red-500 text-lg font-semibold mb-2">
            Sobre nosotros
          </h2>
          <h1 className="text-2xl lg:text-5xl font-bold mb-6">
            Nuestro enfoque combina innovación, calidad y precios competitivos
          </h1>
          <p className="text-gray-300 text-md lg:text-lg mb-6">
            Nuestra misión es transformar ideas en soluciones digitales
            innovadoras que impulsen el éxito de nuestros clientes.
          </p>
          <div className="flex justify-center md:justify-start space-x-10 mb-6">
            <div>
              <span className="text-3xl font-bold">33 +</span>
              <p className="text-gray-400">Proyectos</p>
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
        </div>
      </div>
    </div>
  );
};

export default About;
