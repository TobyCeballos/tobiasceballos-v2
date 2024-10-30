import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      className="relative hero flex items-center justify-center text-white py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      {/* Contenido principal */}
      <div className="flex flex-col-reverse lg:justify-center md:flex-row w-full md:container mx-auto px-6 lg:px-12 py-20 items-center justify-between gap-8 lg:gap-16">
        {/* Texto y botones */}
        <div className="flex text-wrap md:text-nowrap flex-col text-center md:text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold leading-tight">
            Desarrollamos tu <br className="hidden md:flex" />
            <span className="text-red-600">idea</span> en aplicaciones <br className="hidden md:flex" />y
            sitios web <span className="text-red-600">modernos</span> <br className="hidden md:flex"/>y{" "}
            <span className="text-red-600">escalables</span>
          </h1>
          <p className="text-md sm:text-lg lg:text-xl text-gray-400">
            Servicios de desarrollo full stack para emprendedores,<br className="hidden md:flex" />
            profesionales y empresas.
          </p>
          <div className="py-3 flex flex-col items-center md:items-start gap-4 ">
            <a
              href="#contact"
              className="mt-4 w-fit px-6 py-3 bg-white text-black font-semibold rounded-full transition duration-300 hover:bg-gray-300"
            >
              Consultoría gratuita
            </a>

            {/* Iconos de redes sociales */}
            <div className="flex flex-row items-center mt-4">
              <span className="font-bold">Redes sociales:</span>
              <div className="flex flex-row items-start justify-start space-x-3 ml-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaFacebook size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaInstagram size={22} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>
          {/* ¿Por qué elegirnos? */}
          <div className="mt-10">
            <h3 className="mb-2 text-red-500 font-serif text-lg">
              ¿Por qué elegirnos?
            </h3>
            <div className="flex flex-wrap text-sm justify-center lg:justify-start lg:text-lg gap-4">
              {["Experiencia", "Compromiso", "Soporte 24/7", "Calidad"].map(
                (texto, index) => (
                  <span key={index} className="flex items-center gap-x-1">
                    <IoMdCheckmarkCircleOutline /> {texto}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Imagen con círculos concéntricos */}
        <div className="w-2/5 md:w-1/2 flex items-center justify-center relative mt-12 md:mt-0">
          {/* Círculos concéntricos con gradiente */}
          <div className="absolute custom-circle aspect-square rounded-full border border-pink-800 border-opacity-45 w-[80%] lg:w-[90%]"></div>
          <div className="absolute custom-circle-2 aspect-square rounded-full border border-pink-700 border-opacity-55 w-[70%] lg:w-[80%]"></div>

          {/* Imagen principal */}
          <div className="relative w-3/4 lg:w-2/3 aspect-square rounded-full overflow-hidden">
            <img
              src="/assets/desk.webp"
              alt="Desk Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
