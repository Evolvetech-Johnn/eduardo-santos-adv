"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-paper-alt">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-silver/10 via-paper/5 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-silver/30 bg-silver/10 text-silver text-sm font-mono mb-6 uppercase tracking-widest">
            Advocacia Especializada
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-ink leading-tight mb-6 max-w-4xl">
            Soluções jurídicas com <span className="text-silver italic">clareza</span> e <span className="text-silver italic">eficiência</span>.
          </h1>
          <p className="text-lg md:text-xl text-graphite/80 max-w-2xl mb-10 font-sans">
            Atendimento direto e transparente para resolver seus problemas com a seriedade e discrição que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#whatsapp"
              className="flex items-center gap-2 bg-whatsapp text-paper px-8 py-4 rounded-full text-lg font-medium hover:bg-whatsapp/90 transition-all shadow-lg hover:shadow-whatsapp/20 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Falar com o Advogado
            </a>
            <Link
              href="/sobre"
              className="flex items-center gap-2 bg-transparent text-ink border border-ink/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-ink hover:text-paper transition-all"
            >
              Conheça a Trajetória
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Statistics Section with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="mt-20 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-silver/20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-4xl md:text-5xl text-silver">4000+</span>
            <span className="font-sans text-sm uppercase tracking-widest text-graphite/70 font-bold">Atendimentos</span>
          </div>
          <div className="hidden md:block w-px h-full bg-silver/20 mx-auto"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-4xl md:text-5xl text-silver">5000+</span>
            <span className="font-sans text-sm uppercase tracking-widest text-graphite/70 font-bold">Consultas</span>
          </div>
          <div className="hidden md:block w-px h-full bg-silver/20 mx-auto"></div>
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-4xl md:text-5xl text-silver">33+</span>
            <span className="font-sans text-sm uppercase tracking-widest text-graphite/70 font-bold">Anos de Atuação</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
