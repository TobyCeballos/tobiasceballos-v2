"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Términos y condiciones | Tobias Ceballos"; // Cambia esto según la página
  }, []);
  return (
    <section
      className="bg-gray-100 py-10 bg-cover bg-fixed"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="container mx-auto text-left">
        <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
          Términos
        </Badge>
        <h2 className="text-4xl font-bold my-6">
          Términos y Condiciones
        </h2>
        <p className="text-lg mb-12">
          Por favor, lea atentamente estos términos y condiciones antes de utilizar nuestros servicios.
        </p>

        <div className="bg-white rounded-md text-neutral-800 shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">1. Aceptación de Términos</h3>
          <p className="mb-4">
            Al acceder a nuestro sitio web y utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Modificaciones a los Términos</h3>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia en el momento de su publicación en el sitio web.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Uso de los Servicios</h3>
          <p className="mb-4">
            Nuestros servicios están destinados únicamente para su uso personal y no comercial. Usted se compromete a no utilizar los servicios para ningún propósito ilegal o no autorizado.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Propiedad Intelectual</h3>
          <p className="mb-4">
            Todos los contenidos del sitio web, incluyendo texto, imágenes, gráficos y software, son propiedad de nuestra empresa o de terceros y están protegidos por las leyes de propiedad intelectual.
          </p>

          <h3 className="text-2xl font-semibold mb-4">5. Limitación de Responsabilidad</h3>
          <p className="mb-4">
            En la máxima medida permitida por la ley, nuestra empresa no será responsable de ningún daño indirecto, incidental o consecuente que surja del uso de nuestros servicios.
          </p>

          <h3 className="text-2xl font-semibold mb-4">6. Ley Aplicable</h3>
          <p className="mb-4">
            Estos términos se regirán e interpretarán de acuerdo con las leyes del país en el que operamos.
          </p>

          <h3 className="text-2xl font-semibold mb-4">7. Contacto</h3>
          <p className="mb-4">
            Si tiene alguna pregunta sobre estos términos, por favor contáctenos a través de nuestro formulario de contacto o por correo electrónico.
          </p>
        </div>
      </div>
    </section>
  );
}
