"use client"
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "./components/Modal"; // Importa el componente modal
const pricingPlans = [
  {
    "id": 1,
    "title": "Base",
    "price": "$18.699/mes",
    "description": "Ideal para proyectos iniciales o personales",
    "features": [
      "Desarrollo de una landing page estática",
      "Actualizaciones de contenido básico mensuales",
      "Community Management básico: 1 publicación semanal en Facebook o Instagram",
      "Asesoría inicial en estrategia de contenido y recomendaciones",
      "Soporte técnico en horario de oficina (vía email)",
      "Consultoría mensual de 30 minutos para revisión y optimización del sitio"
    ],
    "link": "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380849295664c0192d43a8c9712b3"
  },
  {
    "id": 2,
    "title": "Avanzado",
    "price": "$26.499/mes",
    "description": "Enfocado en pequeños negocios en crecimiento",
    "features": [
      "Desarrollo de sitio web de hasta 5 páginas con diseño responsive",
      "Integración de formularios avanzados (incluyendo notificaciones por email)",
      "Community Management Avanzado: 3 publicaciones semanales en Facebook e Instagram",
      "Monitoreo de interacciones y respuestas a mensajes directos básicos",
      "Soporte técnico intermedio: disponibilidad en horario extendido",
      "Consultoría de marketing digital mensual (1 hora) con enfoque en estrategias de crecimiento"
    ],
    "link": "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084929566050192d43b9cf6132a"
  },
  {
    "id": 3,
    "title": "Premium",
    "price": "$47.399/mes",
    "description": "Perfecto para empresas medianas con necesidades avanzadas",
    "features": [
      "Desarrollo de aplicación web o e-commerce con integraciones de pago seguras",
      "Optimización de rendimiento (SEO técnico avanzado y mejoras de velocidad)",
      "Community Management completo: 5 publicaciones semanales en Facebook, Instagram y LinkedIn",
      "Monitoreo y respuesta activa a mensajes y comentarios en tiempo real",
      "Soporte técnico avanzado con resolución en 24 horas (chat y email)",
      "Consultoría técnica mensual (2 horas) para estrategias de escalabilidad y crecimiento de la aplicación"
    ],
    "link": "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084929566050192d43c6d34132b"
  },
  {
    "id": 4,
    "title": "Corporativo",
    "price": "Personalizado/mes",
    "description": "Soluciones a medida para grandes empresas y corporaciones",
    "features": [
      "Desarrollo de aplicaciones web personalizadas con arquitectura escalable y microservicios",
      "Mantenimiento y monitoreo continuo de infraestructura en producción",
      "Community Management estratégico: 7 publicaciones semanales en múltiples plataformas y campañas pagas",
      "Creación y optimización de campañas publicitarias en redes sociales y Google Ads",
      "Consultoría y soporte técnico dedicado 24/7 con SLA personalizado",
      "Asesoría en tecnología emergente (IA, automatización de flujos, analítica avanzada)"
    ],
    "link": "https://wa.link/md55ms"
  }
]


export default function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState(null);
  
    const openModal = (plan) => setSelectedPlan(plan);
    const closeModal = () => setSelectedPlan(null);
  
    return (
        <section
            className="bg-gray-100 py-10 bg-cover bg-fixed"
            style={{ backgroundImage: "url('./assets/bg.png')" }}
        >
            <div className="container mx-auto text-left">
                <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
                    Nosotros
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold my-6">
                    Tenemos el plan perfecto para ti
                </h2>
                <p className="text-base md:text-lg mb-12">
                    Selecciona el plan que mejor se adapte a tus necesidades.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-md ${
                                plan.title === "Avanzado" ? "border-2 border-rose-400" : ""
                            } ${
                                plan.title === "Corporativo" ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
                            } overflow-hidden shadow-md relative flex flex-col`}
                            style={{
                                backgroundImage:
                                    plan.title === "Avanzado"
                                        ? "url('./assets/bg-2.jpg')"
                                        : "none",
                                backgroundColor: "white",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                color: plan.title === "Avanzado" ? "white" : "black",
                            }}
                        >
                            {plan.title === "Avanzado" && (
                                <div className="absolute top-0 right-0 bg-rose-400 text-white font-bold px-3 py-1 rounded-bl-md">
                                    Plan más popular
                                </div>
                            )}
                            <div className="pt-5 px-5 flex-grow">
                                <div className="flex items-end justify-between">
                                    <h3 className="text-lg md:text-xl font-serif font-semibold">Plan</h3>
                                    <p className="text-xl md:text-2xl pt-3 font-bold">{plan.price}</p>
                                </div>
                                <h3
                                    className={`text-3xl md:text-4xl font-semibold mb-4 ${
                                        plan.title === "Avanzado"
                                            ? "text-rose-400"
                                            : "text-rose-600"
                                    }`}
                                >
                                    {plan.title}
                                </h3>
                                <p className="mb-6">{plan.description}</p>
  
                                {/* Mostrar las primeras 3 features con degradado */}
                                <div className="relative">
                                    <ul className="text-left mb-6">
                                        {plan.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="flex items-center mb-2">
                                                <span className="text-green-500 mr-2">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Degradado visual */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t ${plan.title === "Avanzado"? "from-[#050306]" : "from-white"} to-transparent pointer-events-none`}></div>
                                </div>
                            </div>
  
                            {/* Botón para abrir el modal */}
                            <button
                                onClick={() => openModal(plan)}
                                className="bg-white flex items-center justify-center gap-1 text-rose-600 w-full font-bold text-center py-2 border-t border-slate-500 border-opacity-20 hover:bg-gray-100 transition"
                            >
                                Ver más detalles <IoIosArrowDown className="text-xl" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
  
            {/* Modal que muestra los detalles adicionales */}
            {selectedPlan && <Modal onClose={closeModal} plan={selectedPlan} />}
        </section>
    );
}
