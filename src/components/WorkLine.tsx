import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WorkLine = () => {
  const steps = [
    {
      title: "Planificación",
      description: "Definición de objetivos y creación del roadmap.",
    },
    {
      title: "Diseño",
      description: "Creación de wireframes y prototipos visuales.",
    },
    {
      title: "Desarrollo",
      description: "Implementación del código y funcionalidades.",
    },
    {
      title: "Lanzamiento",
      description: "Publicación del producto final y revisión.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-b-slate-200">
      <div className="container mx-auto text-center px-4">
        {/* Títulos */}
        <h2 className="text-red-500 font-bold text-2xl md:text-3xl mb-2">
          Proceso
        </h2>
        <h3 className="text-4xl md:text-7xl text-black font-serif font-bold mb-8">
          ¿Cómo trabajamos?
        </h3>

        {/* Workline */}
        <div className="flex flex-col xl:flex-row justify-center items-center w-full max-w-5xl mx-auto relative space-y-8 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 text-center px-4 md:px-8 pt-3 relative"
            >
              {/* Flecha derecha entre cada card, excepto la última en pantallas grandes */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <FaArrowRight
                      size={30}
                      className="text-slate-500 opacity-25"
                    />
                  </div>
                  <div className=" xl:block absolute -bottom-4 right-1/2 transform translate-x-1/2 rotate-90">
                    <FaArrowRight
                      size={30}
                      className="text-slate-500 opacity-25"
                    />
                  </div>
                </>
              )}

              {/* Card */}
              <div className="bg-[#fcfcfc] shadow-md rounded-3xl p-6 mb-8 h-full xl-aspect-square flex flex-col justify-center min-h-[200px] sm:min-h-[100px]">
                <h4 className="font-bold text-black text-xl md:text-2xl mb-2">
                  {step.title}
                </h4>
                <p className="text-black text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkLine;
