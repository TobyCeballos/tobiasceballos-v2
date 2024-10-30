import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Re-diseño OrbelGrupo",
    description: "A/B Testing orientado captar ventas.",
    image: "/assets/project-1.png", // Cambia por la URL de la imagen del proyecto
  },
  {
    title: "SPA + Pasarela de pagos recurrentes",
    description: "Se implemento sistema de auth para gestion de cursos y membresias",
    image: "/assets/project-2.png", // Cambia por la URL de la imagen del proyecto
  },
  {
    title: "Landing Page de Barberia",
    description: "Desarrollamos el diseño, orientandolo a modo informativo para posicionarlos en internet",
    image: "/assets/project-3.png", // Cambia por la URL de la imagen del proyecto
  },
  {
    title: "Diseño y maquetacion de web para constructora",
    description: "Portafolio de constructora a modo informativo para atraer clientes y mostrar proyectos",
    image: "/assets/project-4.png", // Cambia por la URL de la imagen del proyecto
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-2/3 lg:container mx-auto text-center">
      <h3 className="text-6xl text-black font-serif font-semibold mb-20">Proyectos</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Columna 1 con pt-0 */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6 pt-0">
              {projects.slice(0,2).map((project, index) => (
                <div
                  key={index}
                  className=" rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72  object-top object-cover border border-slate-200  rounded-3xl"
                  />
                  <div className="pl-2 pt-2 mb-4 text-left">
                    <h3 className="text-3xl text-black font-serif font-semibold">{project.title}</h3>
                    <p className="text-gray-700 text-lg mb-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-start mt-10">
              <Link
                className="bg-black text-white font-bold px-6 py-2 rounded-full hover:bg-gray-700 transition-all"
                href="/projects"
              >
                Ver mas...
              </Link>
            </div>
          </div>

          {/* Columna 2 con pt-20 */}
          <div className="order-1 lg:order-2">
            <div className="w-full flex justify-end mt-10">
              <Link
                className="hidden lg:flex bg-black text-white font-bold px-6 py-2 rounded-full hover:bg-gray-700 transition-all"
                href="/projects"
              >
                Ver mas...
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-10">
              {projects.slice(2).map((project, index) => (
                <div
                  key={index}
                  className=" rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-top object-cover border border-slate-200 rounded-3xl"
                  />
                  <div className="pl-2 pt-2 mb-4 text-left">
                    <h3 className="text-3xl text-black font-serif font-semibold">{project.title}</h3>
                    <p className="text-gray-700 text-lg mb-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
