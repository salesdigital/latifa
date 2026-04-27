"use client";

import Container from "./Container";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const navItems = [
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Trabalhos",
    href: "#services",
  },
  {
    label: "Especialidades",
    href: "#specialties",
  },
  {
    label: "Oráculo",
    href: "#oraculo",
  },
  {
    label: "Galeria",
    href: "#galeria",
  },
  {
    label: "Depoimentos",
    href: "#depoimentos",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const id = link.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-green-500">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-3 text-white md:flex-row md:gap-6">
            <p className="text-center text-sm font-semibold tracking-wide">
              Atendimento imediato • Resposta rápida • Poucos horários hoje
            </p>
            <WhatsAppButton
              className="px-6 py-3 text-xs md:text-sm"
              label="Falar agora no WhatsApp"
            />
          </div>
        </Container>
      </div>

      <header className="bg-white text-red-600 sticky top-0 z-50 shadow-md">
        <Container>
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600">Latifa Sensitiva</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-orange-500 transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-red-100">
            <Container>
              <ul className="py-4 space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-2 hover:text-orange-500 transition-colors duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
