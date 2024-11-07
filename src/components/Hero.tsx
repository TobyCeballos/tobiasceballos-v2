import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (<section className="relative hero flex items-center justify-center text-white py-16 bg-cover bg-center" style={{ backgroundImage: "url('./assets/bg.png')" }}>
    <header className="flex flex-col-reverse lg:justify-center md:flex-row w-full md:container mx-auto px-6 lg:px-12 py-20 items-center justify-between gap-8 lg:gap-16">
      <div className="flex flex-col text-center md:text-left w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
          Somos una <br className="hidden md:flex" />{" "}
          <span className="text-red-600">consultora digital</span> y{" "}
          <br className="hidden md:flex" /> nos encargamos{" "}
          <br className="hidden md:flex" />
          de darte <span className="text-red-600">la mejor</span> presencia en
          internet
        </h1>
  
        <p className="text-md sm:text-lg lg:text-xl text-gray-400">
          Especialistas en desarrollo web, diseño y marketing digital.{" "}
          <br className="hidden md:flex" />
          Impulsamos tu presencia online con soluciones modernas y escalables.
        </p>
      </div>
  
      <div className="w-2/5 md:w-1/2 flex items-center justify-center relative mt-12 md:mt-0">
        {/* Imagen principal */}
        <div className="relative w-3/4 lg:w-2/3 aspect-square rounded-full overflow-hidden">
          <img
            src="/assets/desk.webp"
            alt="Mesa de trabajo moderna y organizada"
            title="Mesa de trabajo para desarrollo web"
            className="object-cover w-full h-full"
            loading="lazy" // Agregar "lazy" para mejorar carga de imágenes
          />
        </div>
      </div>
    </header>
  </section>
  );
};

export default Hero;
