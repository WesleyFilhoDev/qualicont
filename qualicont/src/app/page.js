import Image from "next/image";
import { Hero } from "./components/hero";
import { Sobre } from "./components/sobre";
import { Services } from "./components/servicos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Services />
    </main>
  );
}
