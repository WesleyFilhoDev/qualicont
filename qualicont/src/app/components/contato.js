import { Image } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({ nome, numero }) {
  return (
    <div className="hover:scale-105 transition-transform duration-300 active:scale-95">
      <a
        href={`https://wa.me/${numero}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="text-xl font-semibold">{nome}</span>
      </a>
    </div>
  );
}

export function Contato() {
  return (
    <section id="contato" className="min-h-screen pt-20">
      <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 px-6 py-10">
        <h1 className="text-4xl font-bold text-white">CONTATO</h1>
        <h1 className="text-2xl text-center text-white">
          Entre em contato com nossa equipe de<br></br> especialistas agora
          mesmo!
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mb-0 lg:gap-20 px-6 py-10">
        <WhatsappButton nome="Davi Landim" numero={"5588981306699"} />
        <WhatsappButton nome="Paulo Welber" numero={"5585996103508"} />
      </div>
    </section>
  );
}
