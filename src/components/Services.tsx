import { FaCode, FaBullhorn, FaShoppingCart, FaChartLine, FaCogs, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={30} />,
    title: 'Desarrollo Web',
    description: 'Sitios web responsivos y optimizados, diseñados para destacar tu marca y mejorar la experiencia del usuario.',
    bgColor: 'bg-black text-white', // Fondo negro cuando está activo
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-white text-black p-4 rounded-full mt-2 ml-2 mb-8'
  },
  {
    icon: <FaCogs size={30} />,
    title: 'Consultoría IT',
    description: 'Asesoría tecnológica personalizada para implementar las mejores soluciones para exprimir el potencial de tu negocio.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-black text-white p-4 rounded-full mt-2 ml-2 mb-8'
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: 'E-commerce',
    description: 'Tiendas online adaptadas a tu negocio, con integración de pagos y gestión de productos, reservas y/o consultas.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-black text-white p-4 rounded-full mt-2 ml-2 mb-8'
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'SEO y Marketing Digital',
    description: 'Estrategias para mejorar tu visibilidad online y aumentar el tráfico orgánico.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-black text-white p-4 rounded-full mt-2 ml-2 mb-8'
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: 'Identidad de Marca',
    description: 'Creamos una imagen de marca única que resuene con tu público y destaque frente a la competencia.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-black text-white p-4 rounded-full mt-2 ml-2 mb-8'
  },
  {
    icon: <FaBullhorn size={30} />,
    title: 'Automatización de Procesos',
    description: 'Soluciones tecnológicas para optimizar y automatizar las tareas de tu empresa.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'flex items-center justify-center w-fit h-fit aspect-square bg-black text-white p-4 rounded-full mt-2 ml-2 mb-8'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto text-center">
        <h2 className="text-red-500 font-bold text-xl lg:text-3xl mb-2">Nuestros Servicios</h2>
        <h3 className="text-2xl lg:text-7xl text-black font-serif font-bold mb-8">Servicios adaptables<br/>a tus necesidades</h3>

        <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg ${service.bgColor} hover:scale-105 transform transition duration-300`}
            >
              <div className={`${service.iconStyle}`}>
                {service.icon}
              </div>
              <h4 className="font-bold text-xl mb-2">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
