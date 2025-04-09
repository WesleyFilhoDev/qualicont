import Image from "next/image";

export function Hero() {
  return (
    <section className=" h-screen w-screen bg-gradient-to-b from-[#2B4A6D] to-[#5490D3] relative overflow-hidden">
      <div>
        <article className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="text-5xl font-bold mb-10 mt-10">
                Bem-vindo <br />à Qualicont.
              </h1>
            </div>
            <div>
              <button className="bg-white text-[#335275] rounded-4xl px-4 py-2">
                <a href="#">Fale Conosco</a>
              </button>
            </div>
            <div>
              <Image
                src="/foto dos dois copy.png"
                alt="Hero Image"
                width={320}
                height={320}
                className="flex justify-center items-center mt-10"
              />
            </div>
            <div className="w-full h-[128px] flex flex-row items-center justify-center bg-white text-[#335275]">
              <Image
                src="/maos.png"
                alt="icone maos hero"
                width={120}
                height={120}
                className=""
              />
              <h2 className="text-center text-2xl pt-2 mr-25">
                Confie em quem <br />
                entende de números e <br />
                transforma resultados.
              </h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
