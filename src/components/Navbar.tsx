"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 text-white px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="container flex mx-auto justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/TC.png" // Reemplaza con la ruta de tu logo
            alt="Logo Tobias Ceballos"
            className="h-8 w-8 mr-2"
          />
          <span className=" font-serif font-semibold text-lg">Tobias Ceballos</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8">
          <li>
            <Link className="hover:text-gray-400" href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" href="/about">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" href="/projects">
              Proyectos
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400" href="/pricing">
              Precios
            </Link>
          </li>
        </ul>

        {/* Botón de Contacto */}
        <div>
          <Link
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition-all"
            href="/contact"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
