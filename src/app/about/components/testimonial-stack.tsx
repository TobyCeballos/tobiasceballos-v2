import { Card } from "@/components/ui/card";
import Image from "next/image";

export function TestimonialStack() {
  return (
    <Card className="relative h-[400px] bg-transparent border-neutral-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-8 left-4 w-64 h-64 transform -rotate-12">
          <Image
            src="/assets/project-1.png"
            alt="Testimonial 1"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="absolute top-24 right-24 w-64 h-64 transform -rotate-6">
          <Image
            src="/assets/project-2.png"
            alt="Testimonial 2"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
        <div className="absolute top-40 right-4 w-64 h-64 transform rotate-3">
          <Image
            src="/assets/project-3.png"
            alt="Testimonial 3"
            fill
            className="object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </Card>
  );
}