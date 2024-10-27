import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        {/* Sección logo y descripción */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img src="/assets/TC.png" alt="Logo" className="h-14" />
            <p className="text-4xl font-serif font-bold">Tobias Ceballos</p>
          </div>
          <p className="text-lg mb-6">
            Nos enfocamos en ofrecer desarrollo web de alta calidad, accesible y adaptable a las necesidades de cada emprendedor, profesional o empresa, ayudándolos a crecer y destacar en un mundo digital en constante evolución.
          </p>
        </div>

        {/* Enlaces a páginas */}
        <div>
          <h4 className="font-bold mb-4">Páginas</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/pricing" className="hover:text-white">Precios</a></li>
            <li><a href="/projects" className="hover:text-white">Proyectos</a></li>
            <li><a href="/contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h4 className="font-bold mb-4">Útiles</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/politica-de-privacidad" className="hover:text-white">Política de privacidad</a></li>
            <li><a href="/terminos-y-condiciones" className="hover:text-white">Términos y condiciones</a></li>
            <li><a href="/licencias" className="hover:text-white">Licencias</a></li>
          </ul>
        </div>
      </div>

      {/* Segunda línea del footer con redes sociales */}
      <div className="container mx-auto mt-10 px-8 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-6">
        <p className="text-lg text-gray-500">
          Copyright © 2024 Tobias Ceballos. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
