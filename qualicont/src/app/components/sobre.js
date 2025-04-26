import Image from "next/image";

export function Sobre() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center px-6 py-10 gap-y-10">
        <h1 className="text-4xl font-bold mt-10 mb-10 text-white">
          QUEM SOMOS
        </h1>
        <div className="text-2xl text-left space-y-4 text-white">
          <p>
            Na QualiCont, números vão além de cálculos, eles contam a história
            do seu crescimento.
          </p>
          <p>
            Com uma equipe experiente e um atendimento personalizado, ajudamos
            empresas a otimizarem sua gestão financeira, reduzirem custos e
            alcançarem melhores resultados.
          </p>
          <p>
            Nosso compromisso é simplificar a contabilidade para que você possa
            tomar decisões estratégicas com segurança e tranquilidade.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/foto de serviços.jpg"
          alt="Sobre a Qualicont"
          width={250}
          height={250}
          className="rounded-4xl ml-20"
        />

        <Image
          src="/aperto de mao.jpg"
          alt="Sobre a Qualicont"
          width={250}
          height={250}
          className="rounded-4xl mr-20"
        />
      </div>
    </section>
  );
}
