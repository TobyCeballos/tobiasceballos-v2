"use client"
import { HeroSection } from "./components/hero-section";
import { StoryCard } from "./components/story-card";
import { TestimonialStack } from "./components/testimonial-stack";
import { TeamSection } from "./components/team-section";
import { ValuesSection } from "./components/values-section";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "¿Quiénes somos? | Tobias Ceballos"; // Cambia esto según la página
  }, []);
  return (
    <main className="min-h-screen bg-neutral-950 text-white py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-fixed"
      style={{ backgroundImage: "url('./assets/bg.png')" }}>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StoryCard />
        <TestimonialStack />
        <TeamSection />
        <ValuesSection />
      </div>
    </main>
  );
}