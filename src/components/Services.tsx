import { FaCode, FaBullhorn, FaShoppingCart, FaChartLine, FaCogs, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={30} />,
    title: 'Desarrollo Web',
    description: 'Desarrollamos sitios web responsivos y optimizados que destacan tu marca y mejoran la experiencia del usuario. Creación de páginas web con tecnologías modernas que se adaptan a cualquier dispositivo.',
    bgColor: 'bg-black text-white',
    iconStyle: 'bg-white text-black',
    keywords: 'desarrollo web, sitios web responsivos, experiencia del usuario, diseño web'
  },
  {
    icon: <FaCogs size={30} />,
    title: 'Consultoría IT',
    description: 'Ofrecemos asesoría tecnológica personalizada para ayudarte a implementar las mejores soluciones y maximizar el potencial de tu negocio.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'bg-black text-white',
    keywords: 'consultoría IT, soluciones tecnológicas, asesoría empresarial'
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: 'E-commerce',
    description: 'Creamos tiendas online adaptadas a tu negocio, con integración de pagos y gestión de productos. Soluciones completas para tu tienda online.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'bg-black text-white',
    keywords: 'tienda online, ecommerce, integración de pagos, gestión de productos'
  },
  {
    icon: <FaChartLine size={30} />,
    title: 'SEO y Marketing Digital',
    description: 'Desarrollamos estrategias SEO y de marketing digital para mejorar tu visibilidad en los motores de búsqueda y aumentar tu tráfico web.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'bg-black text-white',
    keywords: 'SEO, marketing digital, visibilidad online, tráfico web'
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: 'Identidad de Marca',
    description: 'Creamos una imagen de marca única que conecta con tu público objetivo y te ayuda a destacar frente a la competencia.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'bg-black text-white',
    keywords: 'identidad de marca, diseño de marca, imagen corporativa'
  },
  {
    icon: <FaBullhorn size={30} />,
    title: 'Automatización de Procesos',
    description: 'Implementamos soluciones tecnológicas para optimizar y automatizar los procesos de tu empresa, ahorrando tiempo y recursos.',
    bgColor: 'bg-gray-100 text-black',
    iconStyle: 'bg-black text-white',
    keywords: 'automatización, optimización de procesos, soluciones tecnológicas'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-100" aria-labelledby="services-section">
      <div className="container mx-auto text-center">
        <h2 id="services-section" className="text-red-500 font-bold text-xl lg:text-3xl mb-2">Nuestros Servicios</h2>
        <h3 className="text-2xl lg:text-7xl text-black font-serif font-bold mb-8">Servicios adaptables<br/>a tus necesidades</h3>

        <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg ${service.bgColor} hover:scale-105 transform transition duration-300`}
              aria-labelledby={`service-title-${index}`}
              aria-describedby={`service-description-${index}`}
            >
              <div className={`flex items-center justify-center w-fit h-fit aspect-square ${service.iconStyle} p-4 rounded-full mt-2 ml-2 mb-8`}>
                {service.icon}
              </div>
              <h4 id={`service-title-${index}`} className="font-bold text-xl mb-2">{service.title}</h4>
              <p id={`service-description-${index}`} className="text-base">{service.description}</p>
              <meta name="keywords" content={service.keywords} />
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default ServicesSection;
