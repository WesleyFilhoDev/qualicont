import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white py-10 shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-gray-700 text-sm mb-4">
          Endereço: Avenida Perimetral Dom Fransisco, 942, Sala 03, Crato,
          Ceará.
        </p>

        <div className="flex gap-6 mb-4">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/seuinstagram/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="mailto:seuemail@dominio.com"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Qalicont Cariri. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
