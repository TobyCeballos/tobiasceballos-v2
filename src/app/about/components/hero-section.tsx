import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto mb-20">
      <div className="">
        <div className="">
          <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
            Nosotros
          </Badge>
        </div>
        <h1 className="text-5xl font-bold mt-4 mb-6">Creando experiencias digitales</h1>
        <p className="text-neutral-400 text-2xl max-w-2xl">
        Somos un equipo de creadores apasionados, innovadores y solucionadores de problemas dedicados a transformar ideas en soluciones digitales impactantes.
        </p>
      </div>
    </section>
  );
}