"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos para el menú hamburguesa

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90 text-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/TC.png"
            alt="Logo Tobias Ceballos"
            className="h-8 w-8 mr-2"
          />
          <span className="font-serif font-semibold text-lg">Tobias Ceballos</span>
        </div>

        {/* Icono de menú hamburguesa para dispositivos pequeños */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links del menú */}
        <ul
          className={`${
            menuOpen ? "flex items-center space-y-3" : "hidden"
          } flex-col md:flex md:flex-row md:space-x-8 absolute md:static top-16 left-0 right-0 bg-black bg-opacity-90 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <li className="py-2 md:py-0">
            <Link className="hover:text-gray-400" href="/">
              Inicio
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link className="hover:text-gray-400" href="/about">
              Nosotros
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link className="hover:text-gray-400" href="/projects">
              Proyectos
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link className="hover:text-gray-400" href="/pricing">
              Precios
            </Link>
          </li>

          {/* Botón de Contacto dentro del menú desplegable */}
          <li className="py-2 md:py-0">
            <Link
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition-all text-center"
              href="/contact"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
