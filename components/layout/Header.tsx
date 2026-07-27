"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { name: "Equipe", href: "/equipe" },
  { name: "Contato", href: "/contato" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-display text-xl font-medium text-ink group-hover:text-silver transition-colors">
              Dr. Eduardo
            </span>
            <span className="font-sans text-xs text-graphite uppercase tracking-widest">
              Advocacia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-graphite hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-silver hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#whatsapp"
            className="flex items-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ink-700 transition-all hover:shadow-lg hover:shadow-ink/20"
          >
            <Phone className="w-4 h-4 text-whatsapp" />
            Falar no WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper border-b border-line overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-graphite hover:text-ink transition-colors py-2 border-b border-line/50"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#whatsapp"
                className="flex items-center justify-center gap-2 bg-ink text-paper px-5 py-3 rounded-md text-sm font-medium mt-2"
              >
                <Phone className="w-4 h-4 text-whatsapp" />
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
