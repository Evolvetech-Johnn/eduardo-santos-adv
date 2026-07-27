import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Dr. Eduardo",
  description: "Fale conosco. Agende uma consulta para analisarmos o seu caso com a devida atenção.",
};

export default function Contato() {
  return (
    <div className="flex flex-col w-full bg-paper pt-12 pb-24 min-h-screen">
      <section className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-10">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-ink mb-4">
            Fale Conosco
          </h1>
          <p className="font-sans text-graphite/80 max-w-2xl mx-auto">
            Entre em contato para agendarmos um horário. Nossa equipe está pronta para lhe atender.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Informações */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-ink uppercase tracking-wider text-sm mb-1">Telefone / WhatsApp</h3>
                  <p className="font-sans text-graphite text-lg">(43) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-ink uppercase tracking-wider text-sm mb-1">E-mail</h3>
                  <p className="font-sans text-graphite text-lg">contato@dreduardo.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-ink uppercase tracking-wider text-sm mb-1">Endereço</h3>
                  <p className="font-sans text-graphite text-lg">Rua Exemplo, 123, Sala 45<br/>Centro, Londrina - PR, 86000-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-ink uppercase tracking-wider text-sm mb-1">Horário de Atendimento</h3>
                  <p className="font-sans text-graphite text-lg">Segunda a Sexta, das 09h às 18h</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-line/30 rounded-xl border border-line flex items-center justify-center overflow-hidden">
              <span className="font-mono text-sm text-graphite/50">MAPA AQUI (Iframe Google Maps)</span>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-paper-alt p-8 md:p-10 rounded-2xl border border-line shadow-sm">
            <h2 className="font-display text-2xl text-ink mb-6">Envie uma Mensagem</h2>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans text-sm font-medium text-graphite">Nome Completo</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/50 transition-all" placeholder="Seu nome..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-sm font-medium text-graphite">Telefone / WhatsApp</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/50 transition-all" placeholder="(43) 90000-0000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-sm font-medium text-graphite">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/50 transition-all" placeholder="voce@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-sm font-medium text-graphite">Como podemos ajudar?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-paper border border-line rounded-lg focus:outline-none focus:border-brass/50 focus:ring-1 focus:ring-brass/50 transition-all resize-none" placeholder="Descreva brevemente o seu caso..."></textarea>
              </div>
              <button type="button" className="w-full bg-ink text-paper py-4 rounded-lg font-medium mt-2 hover:bg-ink-700 transition-colors">
                Enviar Mensagem
              </button>
              <p className="text-xs text-graphite/50 text-center mt-2">
                As informações enviadas são tratadas com total sigilo.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
