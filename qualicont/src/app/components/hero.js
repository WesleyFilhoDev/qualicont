import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen ">
      <div className="px-6 py-10 flex flex-col justify-start min-h-screen gap-y-12">
        {/* TOPO: título + imagem */}
        <article className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-100">
          {/* Texto + botão */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-6">
              Bem-vindo <br /> à Qualicont.
            </h1>
            <button className="bg-white text-[#335275] rounded-full px-6 py-3 text-lg shadow-md hover:bg-[#e5eefa] hover:shadow-lg transition transform active:scale-95">
              <a href="#">Fale Conosco</a>
            </button>
          </div>

          {/* Imagem */}
          <div className="flex justify-center mt-5 mb-0 lg:justify-end lg:mt-20">
            <Image
              src="/foto dos dois copy.png"
              alt="Hero Image"
              width={400}
              height={430}
              className="w-[320px] h-[350px] lg:w-[400px] lg:h-[430px]"
            />
          </div>
        </article>

        {/* BASE: ícone + mensagem */}
        <div className="w-full flex flex-row items-center justify-center bg-white text-[#335275] p-4 rounded-md shadow-md -mt-14">
          <Image
            src="/maos.png"
            alt="icone maos hero"
            width={100}
            height={100}
            className="mr-4"
          />
          <h2 className="text-center md:text-2xl leading-snug">
            Confie em quem <br />
            entende de números e <br />
            transforma resultados.
          </h2>
        </div>
      </div>
    </section>
  );
}
