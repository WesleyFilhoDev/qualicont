"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Image
            src="/Logo Quali Cont.png"
            alt="Logo da Qualicont"
            width={200}
            height={200}
            className="h-13 w-auto"
          />
        </div>

        <div className="hidden md:flex gap-8 text-gray font-normal text-lg">
          <a href="#home" className="hover:text-[#5490D3] transition-all">
            Home
          </a>
          <a href="#sobre" className="hover:text-[#5490D3] transition-all">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-[#5490D3] transition-all">
            Serviços
          </a>
          <a href="#contato" className="hover:text-[#5490D3] transition-all">
            Contato
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-gray">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <FaBars className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white absolute w-full top-16 left-0 p-4 flex flex-col items-center space-y-4`}
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-gray font-normal hover:text-[#5490D3] transition-all"
        >
          Home
        </a>
        <a
          href="#sobre"
          onClick={() => setIsOpen(false)}
          className="text-gray font-normal hover:text-[#5490D3] transition-all"
        >
          Sobre
        </a>
        <a
          href="#servicos"
          onClick={() => setIsOpen(false)}
          className="text-gray font-normal hover:text-[#5490D3] transition-all"
        >
          Serviços
        </a>
        <a
          href="#contato"
          onClick={() => setIsOpen(false)}
          className="text-gray font-normal hover:text-[#5490D3] transition-all"
        >
          Contato
        </a>
      </div>
    </nav>
  );
}
