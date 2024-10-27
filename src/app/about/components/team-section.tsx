import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Tobias Ceballos",
    role: "CEO & Founder",
    image: "/assets/Toby.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Luz Altamirano",
    role: "Contadora",
    image: "/assets/Luz.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Valentin Vicente",
    role: "Ejecutivo de Ventas",
    image: "/assets/Lucho.png",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
] as const;

export function TeamSection() {
  return (
    <Card className="col-span-full border-neutral-800 p-12 bg-opacity-5"
      style={{ backgroundImage: "url('./assets/bg-2.jpg')" }}>
      <div className="text-center mb-12">
        <Users className="w-6 h-6 text-red-500 mx-auto" />
        <h2 className="text-3xl font-bold text-white mt-4">Nuestro equipo</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full border-4 border-neutral-800 shadow-lg"
              />
            </div>
            <h3 className="font-semibold text-xl text-white">{member.name}</h3>
            <p className="text-neutral-400 text-lg mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4 bg-blue">
              <a href={member.social.facebook} target="_blank">
                <Facebook className="w-7 h-7  text-neutral-400 hover:text-white" />
              </a>
              <a href={member.social.instagram} target="_blank">
                <Instagram className="w-7 h-7 text-neutral-400 hover:text-white" />
              </a>
              <a href={member.social.twitter} target="_blank">
                <Twitter className="w-7 h-7  text-neutral-400 hover:text-white" />
              </a>
              <a href={member.social.linkedin} target="_blank">
                <Linkedin className="w-7 h-7  text-neutral-400 hover:text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
