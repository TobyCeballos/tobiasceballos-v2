import { Badge } from "@/components/ui/badge";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción breve del Proyecto 1.",
    imageUrl: "/assets/project-3.png", // Asegúrate de que la ruta sea correcta
    link: "/proyectos/proyecto-1"
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción breve del Proyecto 2.",
    imageUrl: "/assets/project-2.png",
    link: "/proyectos/proyecto-2"
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción breve del Proyecto 3.",
    imageUrl: "/assets/project-1.png",
    link: "/proyectos/proyecto-3"
  },
  // Agrega más proyectos según sea necesario
];

export default function page() {
  return (
    <section className=" bg-neutral-900 py-20 bg-cover bg-fixed"
      style={{ backgroundImage: "url('./assets/bg.png')" }}>
        <div className="container mx-auto">
        <div className="">
          <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
            Protafolio
          </Badge>
        </div>
        <h2 className="text-4xl font-bold my-6">
          Nuestros proyectos
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-neutral-700 font-serif text-lg">{project.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{project.description}</p>
              <div className="w-full flex justify-end">
              <a href={project.link} className=" text-red-500 hover:underline">
                Ver más
              </a></div>
            </div>
          </div>
        ))}
      </div></div>
    </section>
  );
}
