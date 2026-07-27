import { Metadata } from "next";
import SealBadge from "@/components/ui/SealBadge";

export const metadata: Metadata = {
  title: "Sobre o Advogado | Dr. Eduardo",
  description: "Conheça a trajetória de mais de 33 anos de atuação jurídica, pautada na ética, transparência e atendimento especializado.",
};

export default function Sobre() {
  return (
    <div className="flex flex-col w-full bg-paper pt-12 pb-24">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 w-full pt-10">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/3 shrink-0">
            {/* Placeholder Image */}
            <div className="w-full aspect-[3/4] bg-line/30 rounded-lg overflow-hidden border border-brass/20 flex items-center justify-center">
              <span className="font-mono text-sm text-graphite/40">FOTO DO ADVOGADO</span>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-2">
                Eduardo Santos
              </h1>
              <p className="font-mono text-sm text-brass uppercase tracking-widest font-bold">
                Advogado Sênior
              </p>
            </div>
            
            <SealBadge className="my-2" />

            <div className="prose prose-lg prose-p:text-graphite/80 prose-p:font-sans prose-p:leading-relaxed">
              <p>
                Com mais de <strong>33 anos de atuação</strong> no Direito, minha trajetória é marcada pelo compromisso inabalável com a ética, a transparência e a defesa técnica dos interesses de meus clientes.
              </p>
              <p>
                Formado pela [Nome da Instituição] em [Ano], construí uma carreira sólida focada no atendimento consultivo e contencioso, sempre priorizando soluções claras e objetivas para problemas complexos.
              </p>
              <p>
                Acredito que o papel do advogado vai muito além do processo: trata-se de garantir segurança jurídica e tranquilidade em momentos desafiadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 w-full mt-24">
        <h2 className="font-display text-3xl text-ink mb-12 text-center border-b border-brass/30 pb-4 inline-block mx-auto">
          Nossos Princípios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Ética e Sigilo", text: "Tratamento rigoroso de informações e respeito absoluto aos limites éticos da profissão." },
            { title: "Transparência", text: "Comunicação clara e realista sobre os riscos e as perspectivas de cada demanda jurídica." },
            { title: "Atendimento Direto", text: "Proximidade com o cliente, garantindo que o seu caso seja tratado com a devida exclusividade e atenção." },
          ].map((value, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 bg-paper-alt rounded-lg border border-line/50">
              <h3 className="font-display text-xl text-brass">{value.title}</h3>
              <p className="font-sans text-graphite/80 leading-relaxed text-sm">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
