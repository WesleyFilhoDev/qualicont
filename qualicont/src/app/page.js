import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Sobre } from "./components/sobre";
import { Services } from "./components/servicos";
import { Contato } from "./components/contato";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Services />
      <Contato />
      <Footer />
    </main>
  );
}
