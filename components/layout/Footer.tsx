import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SealBadge from "../ui/SealBadge";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-16 pb-8 border-t border-silver/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand & Seal */}
        <div className="md:col-span-1 flex flex-col items-start gap-6">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-medium text-paper">
              Dr. Eduardo
            </span>
            <span className="font-sans text-xs text-silver uppercase tracking-widest">
              Advocacia
            </span>
          </div>
          <SealBadge />
        </div>

        {/* Links */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h3 className="font-display text-lg text-silver">Navegação</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-paper/80 hover:text-paper hover:underline decoration-silver underline-offset-4 transition-all">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-paper/80 hover:text-paper hover:underline decoration-silver underline-offset-4 transition-all">
                Sobre o Advogado
              </Link>
            </li>
            <li>
              <Link href="/areas-de-atuacao" className="text-paper/80 hover:text-paper hover:underline decoration-silver underline-offset-4 transition-all">
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link href="/equipe" className="text-paper/80 hover:text-paper hover:underline decoration-silver underline-offset-4 transition-all">
                Nossa Equipe
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-paper/80 hover:text-paper hover:underline decoration-silver underline-offset-4 transition-all">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h3 className="font-display text-lg text-silver">Contato</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-paper/80">
              <Phone className="w-5 h-5 text-silver shrink-0 mt-0.5" />
              <span>(43) 99999-9999</span>
            </li>
            <li className="flex items-start gap-3 text-paper/80">
              <Mail className="w-5 h-5 text-silver shrink-0 mt-0.5" />
              <span>contato@dreduardo.com.br</span>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h3 className="font-display text-lg text-silver">Endereço</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-paper/80">
              <MapPin className="w-5 h-5 text-silver shrink-0 mt-0.5" />
              <span>Rua Exemplo, 123, Sala 45<br/>Centro, Londrina - PR</span>
            </li>
            <li className="flex items-start gap-3 text-paper/80">
              <Clock className="w-5 h-5 text-silver shrink-0 mt-0.5" />
              <span>Segunda a Sexta<br/>09h às 18h</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-paper/60 font-mono">
          &copy; {new Date().getFullYear()} Dr. Eduardo Advocacia. Todos os direitos reservados.
        </p>
        <p className="text-xs text-paper/60 font-mono">
          OAB/PR nº XXXX
        </p>
      </div>
    </footer>
  );
}
