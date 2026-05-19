'use client';

import { motion } from 'motion/react';
import { Phone, Mail, Moon } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--bg-void)]">
      {/* CTA Section */}
      <div className="star-field relative py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <Moon className="mx-auto mb-6 h-8 w-8 text-[var(--gold)]" strokeWidth={1} />
            <h2 className="mb-4 font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
              O universo conspira
              <br />
              <span className="gold-text">a seu favor</span>
            </h2>
            <p className="mb-8 font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)] md:text-xl">
              Permita-se ser guiado(a). Fale agora e receba orientação espiritual
              com total sigilo e acolhimento.
            </p>
            <WhatsAppButton label="Iniciar a minha jornada espiritual" className="px-8 py-5 text-base md:text-lg" />
          </motion.div>
        </Container>
      </div>

      {/* Footer info */}
      <div className="border-t border-[var(--glass-border)]">
        <Container>
          <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-tanpearl text-2xl text-[var(--gold)]">Latifa Sensitiva</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-[var(--text-secondary)]">
                Guiando almas através da espiritualidade há mais de 25 anos.
                Cada jornada é sagrada, cada caminho é único.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--gold-bright)]">
                Contacto
              </h4>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[var(--gold-dim)]" />
                  <span className="font-[family-name:var(--font-cormorant)] text-base">(11) 97109-3420</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--gold-dim)]" />
                  <span className="font-[family-name:var(--font-cormorant)] text-base">latifa_tarologa79@yahoo.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--gold-bright)]">
                Serviços
              </h4>
              <ul className="space-y-2 font-[family-name:var(--font-cormorant)] text-base text-[var(--text-secondary)]">
                <li>Cartomante & Vidente</li>
                <li>Consulta de Cartas</li>
                <li>Trabalho de União</li>
                <li>Terapia Espiritual</li>
                <li>Proteção & Blindagem</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--glass-border)]">
        <Container>
          <div className="py-6 text-center font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-muted)]">
            <p>© {new Date().getFullYear()} Sales Digital. Todos os direitos reservados.</p>
            <p className="mt-1">
              Desenvolvido por{" "}
              <a
                href="https://www.instagram.com/salesdigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold-dim)] transition-colors hover:text-[var(--gold)]"
              >
                Sales Digital
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
