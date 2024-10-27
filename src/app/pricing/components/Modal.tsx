// Modal.js
import React from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({ onClose, plan }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Cierra el modal solo si se hace clic en el fondo
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackgroundClick} // Agrega el evento de clic al fondo
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el fondo
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>
          <h3 className="text-xl text-gray-500 font-serif font-semibold">Plan</h3>
          <h3 className="text-4xl font-semibold text-rose-500 mb-4">{plan.title}</h3>
          <p className="text-lg text-gray-500 font-bold mb-2">{plan.price}</p>
          <p className="mb-4 text-gray-400 ">{plan.description}</p>
          <ul className="text-left">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-600 mb-2">
                <span className="text-green-500 mr-2">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => console.log("Comprado")}
          className="w-full mt-4 px-4 py-2 bg-rose-500 text-white rounded-b hover:bg-rose-600 transition"
        >
          Contratar
        </button>
      </div>
    </div>
  );
}
