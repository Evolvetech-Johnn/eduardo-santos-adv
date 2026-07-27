"use client";

import { motion } from "framer-motion";
import { Scale, Users, Briefcase, ShoppingBag } from "lucide-react";

const areas = [
  {
    id: "civel",
    title: "Direito Cível",
    icon: Scale,
    description: "Atuamos na resolução de conflitos envolvendo contratos, obrigações, responsabilidade civil e direitos de propriedade. Orientação preventiva e representação em litígios para proteger seu patrimônio.",
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    icon: Briefcase,
    description: "Defesa técnica de direitos nas relações de trabalho. Análise de rescisões, horas extras, insalubridade e assessoria tanto para empregados quanto para prevenção de passivos nas empresas.",
  },
  {
    id: "familia",
    title: "Direito de Família e Sucessões",
    icon: Users,
    description: "Tratamento humanizado em casos de divórcio, pensão alimentícia, guarda, interdição, inventários e testamentos. Foco em soluções amigáveis sempre que possível para preservar as relações.",
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    icon: ShoppingBag,
    description: "Orientação e defesa em casos de práticas abusivas, serviços defeituosos, cobranças indevidas e problemas com planos de saúde ou companhias aéreas.",
  },
];

export default function AreasDeAtuacao() {
  return (
    <div className="flex flex-col w-full bg-paper pt-12 pb-24 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-10">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">
            Áreas de Atuação
          </h1>
          <p className="font-sans text-graphite/80 max-w-2xl mx-auto">
            Atendimento especializado e focado nas áreas fundamentais do Direito para resolver o seu problema com clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-paper-alt p-8 border border-line rounded-xl hover:border-silver/50 hover:shadow-lg hover:shadow-silver/5 transition-all group flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center text-silver group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl text-ink">{area.title}</h2>
                <div className="w-12 h-px bg-silver/40"></div>
                <p className="font-sans text-graphite/80 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
