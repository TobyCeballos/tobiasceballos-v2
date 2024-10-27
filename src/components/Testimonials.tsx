"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Cristian Cerezuela",
    title: "CEO of StartTech",
    image: "/assets/testimonial-9.jpg",
    feedback:
      "Gracias al equipo, nuestro sitio web no solo es rápido y funcional, sino que también ha mejorado nuestra captación de clientes. ¡Súper recomendable!",
  },
  {
    name: "Ana Gómez",
    title: "Founder of MarketEase",
    image: "/assets/testimonial-2.jpeg",
    feedback:
      "Trabajar con este equipo ha sido un gran acierto. Nuestra página web ha mejorado drásticamente en rendimiento y diseño.",
  },
  {
    name: "Carlos Pérez",
    title: "CTO of Innovatech",
    image: "/assets/testimonial-3.jpeg",
    feedback:
      "El equipo hizo un trabajo increíble con nuestra plataforma. Es rápida, segura y fácil de usar. 100% recomendados.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      const isLastSlide = currentIndex === testimonials.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center bg-[#f5f4f5] w-3/4 rounded-3xl p-10 space-y-3">
        <div
          className={`w-40 h-40 rounded-full overflow-hidden transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="object-cover object-center w-full h-full"
          />
        </div>
        <p
          className={`text-center font-serif text-wrap text-2xl py-4 font-bold text-gray-900 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {`“${testimonials[currentIndex].feedback}”`}
        </p>
        <p
          className={`text-center font-bold font-serif text-3xl text-gray-700 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {testimonials[currentIndex].name}
        </p>
        <p
          className={`text-center font-mono text-gray-500 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {testimonials[currentIndex].title}
        </p>
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full hover:bg-gray-500 bg-gray-900"
          >
            <FaArrowLeft size={24} color="white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full hover:bg-gray-500 bg-gray-900"
          >
            <FaArrowRight size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
