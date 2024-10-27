import { Card } from "@/components/ui/card";
import { History } from "lucide-react";

export function StoryCard() {
  return (
    <Card className="col-span-full lg:col-span-2 bg-white bg-opacity-95 border-neutral-800 p-8">
      <div className="flex items-center gap-3 mb-6">
        <History className="w-6 h-6 text-red-500" />
        <h2 className="text-3xl font-serif font-semibold text-black">Nuestra historia</h2>
      </div>
      <p className="text-neutral-600 mb-4">
      Desde principios de 2022, hemos recorrido un camino que nos llevó de ser una startup pequeña, soñadora y con ganas de cambiar el mundo digital, a convertirnos en una agencia digital consolidada.
      <br/>Nos especializamos en ayudar a empresas y emprendimientos a evolucionar y fortalecerse en el universo online. 
      <br/>A lo largo de estos años, nos hemos comprometido con la innovación y la creatividad para transformar ideas en realidades digitales que generan impacto.

Con cada proyecto, nos propusimos mejorar no solo la presencia digital de nuestros clientes, sino también su manera de conectar con sus audiencias. Creemos que cada desafío es una oportunidad para crear algo nuevo y disruptivo, algo que deje una marca.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">100+</div>
          <div className="text-md font-serif  font-bold text-neutral-600">Proyectos Completados</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500">2+</div>
          <div className="text-md font-serif  font-bold text-neutral-600">Años de experiencia</div>
        </div>
      </div>
    </Card>
  );
}