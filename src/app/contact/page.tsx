//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { IoIosArrowDown } from "react-icons/io";
import { Toaster, toast } from "react-hot-toast";
import { supabase } from '@/lib/supabaseClient'; // Importa el cliente de Supabase

const contactPlans = [
  { id: 1, title: "Base" },
  { id: 2, title: "Avanzado" },
  { id: 3, title: "Premium" },
  { id: 4, title: "Corporativo" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    plan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("leads") // Cambia 'contact_requests' al nombre de tu tabla
        .insert([formData]);

      if (error) {
        console.error("Error al enviar el formulario:", error);
        toast.error("Hubo un error al enviar el formulario.");
      } else {
        toast.success("Formulario enviado con éxito");
        
        setFormData({
          name: "",
          email: "",
          message: "",
          plan: "",
        });
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      toast.error("Hubo un problema al enviar el formulario.");
    }
  };

  return (
    <section
      className="py-10 bg-cover bg-fixed"
      style={{ backgroundImage: "url('./assets/bg.png')" }}
    >
      <Toaster position="bottom-right" reverseOrder={false} />
      
      <div className="container mx-auto text-left">
        <Badge variant="outline" className="border-red-500 mt-10 text-red-500">
          Contáctanos
        </Badge>
        <h2 className="text-4xl font-bold my-6">
          ¿Tienes preguntas? Estamos aquí para ayudarte
        </h2>
        <p className="text-lg mb-12">
          Completa el siguiente formulario y nos pondremos en contacto contigo.
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white text-neutral-700 p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
              required
              autoComplete="off"
              autoFocus
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email al que nos contactaremos"
              required
              className="border border-gray-300 p-2 w-full rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="plan" className="block text-lg font-semibold mb-2">
              Tipo de Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full rounded-md"
            >
              <option value="" disabled>Selecciona un plan</option>
              {contactPlans.map((plan) => (
                <option key={plan.id} value={plan.title}>
                  {plan.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Mensaje{" "}
              <span className="font-normal text-neutral-400">(si prefiere contacto telefónico deje su número)</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Proporcione más información sobre su consulta"
              className="border border-gray-300 p-2 w-full rounded-md"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-rose-600 text-white font-bold py-2 px-4 rounded-md hover:bg-rose-500 transition"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
}
