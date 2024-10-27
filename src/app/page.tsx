"use client"
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import WorkLine from "@/components/WorkLine";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Tobias Ceballos | Consultoria Tecnologica"; // Cambia esto según la página
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WorkLine />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
