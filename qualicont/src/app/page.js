import Image from "next/image";
import { Hero } from "./components/hero";
import { Sobre } from "./components/sobre";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
    </main>
  );
}
