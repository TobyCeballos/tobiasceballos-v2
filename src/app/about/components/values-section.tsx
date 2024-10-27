import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export function ValuesSection() {
  return (
    <Card className="col-span-full bg-neutral-900 border-neutral-800 p-8">
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="w-6 h-6 text-red-500" />
        <h2 className="text-3xl font-semibold">Nuestra Misión</h2>
      </div>
      <p className="text-lg text-neutral-400">
        En <strong>Tobias Ceballos</strong>, nos impulsa la innovación, la excelencia, la colaboración y la integridad. Nuestro objetivo es ir siempre un paso adelante, adoptando nuevas tecnologías para ofrecer soluciones que marquen la diferencia y den a nuestros clientes una ventaja competitiva. Nos enfocamos en la calidad y en superar las expectativas en cada proyecto, mientras fomentamos un ambiente de colaboración tanto interna como con nuestros clientes. Con honestidad y transparencia, buscamos construir relaciones de confianza, asegurándonos de que el crecimiento sea compartido y duradero.
      </p>
    </Card>
  );
}
