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
      <div className="flex container mx-auto py-32 items-center justify-between gap-1 ">
        {/* Texto y botones */}
        <div className="flex flex-col text-left text-nowrap w-1/2">
          <h1 className="text-7xl font-serif font-semibold">
            Desarrollamos tu <br />
            <span className="text-red-600">idea</span> en aplicaciones <br />y
            sitios web <span className="text-red-600">modernos</span> <br />y{" "}
            <span className="text-red-600">escalables</span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Servicios de desarrollo full stack para emprendedores, <br />
            profesionales y empresas.
          </p>

          {/* Botón */}
          <a
            href="#contact"
            className="my-4 flex w-fit px-6 py-3 bg-white text-black font-semibold rounded-full transition duration-300 hover:bg-gray-300"
          >
            Consultoría gratuita
          </a>
          <div className="flex space-x-7 pt-2 mt-8 mx-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Logos o imágenes */}
          <div className="mt-[100px]">
            <h3 className=" mb-2 text-red-500 font-serif text-lg">
              ¿Por qué elegirnos?
            </h3>
            <div className="flex text-lg space-x-6">
              <span className="flex items-center gap-x-1">
                <IoMdCheckmarkCircleOutline /> Experiencia
              </span>{" "}
              <span className="flex items-center gap-x-1">
                <IoMdCheckmarkCircleOutline /> Compromiso
              </span>{" "}
              <span className="flex items-center gap-x-1">
                <IoMdCheckmarkCircleOutline /> Soporte 24/07
              </span>
              <span className="flex items-center gap-x-1">
                <IoMdCheckmarkCircleOutline /> Calidad
              </span>
            </div>
          </div>
        </div>

        {/* Imagen con círculos concéntricos */}
        <div className="w-1/2 flex items-center justify-center relative">
          {/* Círculos concéntricos con gradiente */}
          <div className="absolute custom-circle aspect-square rounded-full border border-pink-800 border-opacity-45">
            <div className="w-full h-full rounded-full "></div>
          </div>

          <div className="absolute custom-circle-2 aspect-square rounded-full border border-pink-700 border-opacity-55">
            <div className="w-full h-full rounded-full "></div>
          </div>

          {/* Imagen principal */}
          <div className="relative w-3/4  aspect-square rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/assets/desk.webp"
              alt="Desk Image"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
