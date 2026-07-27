import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Equipe | Dr. Eduardo",
  description: "Conheça o corpo jurídico do nosso escritório.",
};

const team = [
  { name: "Eduardo Santos", role: "Sócio Fundador", oab: "OAB/PR XXXX", area: "Cível e Família" },
  { name: "Nome do Advogado 2", role: "Advogado Associado", oab: "OAB/PR YYYY", area: "Trabalhista" },
  { name: "Nome do Advogado 3", role: "Advogado Associado", oab: "OAB/PR ZZZZ", area: "Consumidor" },
];

export default function Equipe() {
  return (
    <div className="flex flex-col w-full bg-paper pt-12 pb-24 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-10">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">
            Nossa Equipe
          </h1>
          <p className="font-sans text-graphite/80 max-w-2xl mx-auto">
            Profissionais altamente qualificados, unidos pelo propósito de entregar excelência técnica e atendimento humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col bg-paper-alt border border-line rounded-lg overflow-hidden group">
              {/* Photo placeholder */}
              <div className="w-full aspect-[4/5] bg-line/30 flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-xs text-graphite/40">FOTO: {member.name}</span>
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors"></div>
              </div>
              <div className="p-6 flex flex-col items-center text-center gap-2">
                <h3 className="font-display text-xl text-ink">{member.name}</h3>
                <span className="font-mono text-xs text-brass uppercase tracking-widest">{member.role}</span>
                <div className="w-8 h-px bg-brass/30 my-2"></div>
                <p className="font-sans text-sm text-graphite/70">Área: {member.area}</p>
                <p className="font-mono text-xs text-graphite/50 mt-1">{member.oab}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
