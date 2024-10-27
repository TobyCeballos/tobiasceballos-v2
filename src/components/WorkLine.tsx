import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importamos las flechas de React Icons

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
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        {/* Títulos */}
        <h2 className="text-red-500 font-bold text-3xl mb-2">Proceso</h2>
        <h3 className="text-7xl text-black font-serif font-bold mb-8">
          ¿Cómo trabajamos?
        </h3>

        {/* Workline */}
        <div className="flex justify-center items-center w-full max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center px-8 pt-10 relative">
              {/* Flecha derecha entre cada card, excepto la última */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <FaArrowRight size={30} className="text-slate-500 opacity-25" />
                </div>
              )}

              {/* Card */}
              <div className="bg-[#fcfcfc] shadow-md rounded-3xl p-6 mb-8 h-full aspect-square flex flex-col justify-center min-h-[250px]">
                <h4 className="font-bold text-black text-2xl mb-2">
                  {step.title}
                </h4>
                <p className="text-black">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkLine;
