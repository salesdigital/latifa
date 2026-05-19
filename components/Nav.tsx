"use client";

import Container from "./Container";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Trabalhos", href: "#services" },
  { label: "Especialidades", href: "#specialties" },
  { label: "Oráculo", href: "#oraculo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const id = link.getAttribute("href")?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="relative z-50 border-b border-[var(--glass-border)] bg-gradient-to-r from-[var(--crimson)]/90 via-[var(--bg-deep)]/90 to-[var(--crimson)]/90 backdrop-blur-md">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-2.5 sm:flex-row sm:gap-5">
            <p className="flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-xs font-medium tracking-wide text-[var(--gold-bright)]">
              <Sparkles className="h-3 w-3" />
              Atendimento imediato • Resposta rápida • Poucos horários hoje
            </p>
            <WhatsAppButton
              className="!rounded-full !px-5 !py-2 !text-xs"
              label="Falar agora"
            />
          </div>
        </Container>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-[var(--glass-border)] bg-[var(--bg-void)]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between py-4">
            <a href="#" className="group flex items-center gap-2">
              <h2 className="font-tanpearl text-2xl font-bold text-[var(--gold)] transition-colors group-hover:text-[var(--gold-bright)]">
                Latifa Sensitiva
              </h2>
            </a>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--gold)]"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--gold)] to-transparent transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile menu toggle */}
            <button
              className="relative z-50 text-[var(--gold)] md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>

        {/* Mobile fullscreen overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--bg-void)]/98 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="font-tanpearl text-2xl text-[var(--text-primary)] transition-colors hover:text-[var(--gold)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-4"
                >
                  <WhatsAppButton label="Falar agora no WhatsApp" />
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Nav;
