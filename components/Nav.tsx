"use client";

import Container from "./Container";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
          <div className="flex justify-center items-center py-2 text-white">
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1 items-center">


              </div>
              <a
                href="https://wa.me/5511971093420"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 cursor-pointer 
  bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 
  text-white px-7 py-4 rounded-xl font-extrabold text-sm tracking-wide
  shadow-lg shadow-green-500/30
  hover:scale-105 hover:shadow-xl hover:shadow-green-500/40
  transition-all duration-300 border border-white/10"
              >
                {/* Efeito brilho animado */}
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 blur transition"></span>

                <svg
                  className="size-5 z-10"
                  fill="#fff"
                  viewBox="0 0 308 308"
                >
                  <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781..." />
                </svg>

                <span className="z-10" style={{ fontFamily: "'Tanpearl', sans-serif" }}>
                  Fale comigo agora no WhatsApp
                </span>
              </a>
            </div>
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
