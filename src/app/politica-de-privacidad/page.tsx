"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de privacidad | Tobias Ceballos"; // Cambia esto según la página
  }, []);
  return (
    <section
      className="bg-gray-100 py-10 bg-cover bg-fixed"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <div className="container mx-auto text-left">
        <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
          Privacidad
        </Badge>
        <h2 className="text-4xl font-bold my-6">
          Política de Privacidad
        </h2>
        <p className="text-lg mb-12">
          Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información personal.
        </p>

        <div className="bg-white text-neutral-800 rounded-md shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h3>
          <p className="mb-4">
            Recopilamos información personal que usted nos proporciona al registrarse, llenar formularios, o comunicarse con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono y otra información relevante.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Uso de la Información</h3>
          <p className="mb-4">
            Usamos su información para proporcionarle nuestros servicios, comunicarnos con usted y mejorar nuestra oferta. También podemos utilizar su información para enviarle actualizaciones sobre nuestros servicios y promociones.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Protección de la Información</h3>
          <p className="mb-4">
            Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, divulgación o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Compartición de Información</h3>
          <p className="mb-4">
            No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios que nos ayudan a operar nuestro sitio web y brindar nuestros servicios, siempre bajo estrictas condiciones de confidencialidad.
          </p>

          <h3 className="text-2xl font-semibold mb-4">5. Cookies</h3>
          <p className="mb-4">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos que se almacenan en su dispositivo y nos ayudan a personalizar su experiencia. Puede optar por desactivar las cookies en su navegador, pero esto puede afectar su acceso a ciertas funciones de nuestro sitio.
          </p>

          <h3 className="text-2xl font-semibold mb-4">6. Cambios en la Política de Privacidad</h3>
          <p className="mb-4">
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones entrarán en vigencia en el momento de su publicación en nuestro sitio web.
          </p>

          <h3 className="text-2xl font-semibold mb-4">7. Contacto</h3>
          <p className="mb-4">
            Si tiene preguntas sobre esta política de privacidad, no dude en contactarnos a través de nuestro formulario de contacto o por correo electrónico.
          </p>
        </div>
      </div>
    </section>
  );
}
