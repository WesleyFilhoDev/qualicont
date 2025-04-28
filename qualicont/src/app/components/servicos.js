import Image from "next/image";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg lg:w-110 h-50 justify-center">
      <div className=" w-64 bg-blue-950 p-1 rounded-md ">
        <Image src={icon} alt={title} width={200} height={200} />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="min-h-screen">
      <div>
        <h1 className="text-4xl font-bold mt-10 mb-10 text-center text-white">
          SERVIÇOS
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 lg:grid grid-cols-2 justify-items-center items-center lg:px-[200px] py-10">
        <ServiceCard
          icon="/notebook.png"
          title="Contabilidade Digital"
          description="Modernizamos a gestão contábil da sua empresa com tecnologia e eficiência. Automatizamos processos, e fornecemos insights financeiros estratégicos para impulsionar seu crescimento. Tudo 100% online, com segurança e praticidade."
        />

        <ServiceCard
          icon="/seta.png"
          title="Contabilidade Consultiva"
          description="Oferecemos análises estratégicas e insights financeiros para impulsionar o crescimento do seu negócio. Com acompanhamento personalizado, ajudamos na tomada de decisões inteligentes, reduzindo riscos e maximizando resultados."
        />

        <ServiceCard
          icon="/icones maos.png"
          title="Assecibilidade Empresarial"
          description="Oferece suporte estratégico para a gestão do seu negócio, otimizando processos, reduzindo custos e garantindo conformidade fiscal. Com nossa expertise, sua empresa cresce de forma segura e eficiente."
        />

        <ServiceCard
          icon="/balança.png"
          title="Planejamento Tributário"
          description="Ajudamos sua empresa a pagar menos impostos de forma legal e estratégica. Analisamos seu regime fiscal, identificamos oportunidades de economia e garantimos o cumprimento das obrigações, reduzindo riscos e aumentando a lucratividade."
        />
      </div>
    </section>
  );
}
