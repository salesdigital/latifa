'use client';

import { motion } from 'motion/react';
import Container from './Container';

const zodiacSigns = [
  { symbol: "♈", name: "Áries", period: "21/03 - 19/04", element: "Fogo" },
  { symbol: "♉", name: "Touro", period: "20/04 - 20/05", element: "Terra" },
  { symbol: "♊", name: "Gêmeos", period: "21/05 - 20/06", element: "Ar" },
  { symbol: "♋", name: "Câncer", period: "21/06 - 22/07", element: "Água" },
  { symbol: "♌", name: "Leão", period: "23/07 - 22/08", element: "Fogo" },
  { symbol: "♍", name: "Virgem", period: "23/08 - 22/09", element: "Terra" },
  { symbol: "♎", name: "Libra", period: "23/09 - 22/10", element: "Ar" },
  { symbol: "♏", name: "Escorpião", period: "23/10 - 21/11", element: "Água" },
  { symbol: "♐", name: "Sagitário", period: "22/11 - 21/12", element: "Fogo" },
  { symbol: "♑", name: "Capricórnio", period: "22/12 - 19/01", element: "Terra" },
  { symbol: "♒", name: "Aquário", period: "20/01 - 18/02", element: "Ar" },
  { symbol: "♓", name: "Peixes", period: "19/02 - 20/03", element: "Água" },
];

const numerologyInfo = [
  { number: 1, title: "Liderança", description: "Independência, originalidade e determinação" },
  { number: 2, title: "Harmonia", description: "Cooperação, diplomacia e sensibilidade" },
  { number: 3, title: "Expressão", description: "Criatividade, comunicação e otimismo" },
  { number: 4, title: "Estabilidade", description: "Organização, disciplina e trabalho" },
  { number: 5, title: "Liberdade", description: "Mudança, aventura e versatilidade" },
  { number: 6, title: "Equilíbrio", description: "Amor, responsabilidade e harmonia" },
  { number: 7, title: "Sabedoria", description: "Análise, introspecção e espiritualidade" },
  { number: 8, title: "Poder", description: "Sucesso, autoridade e abundância" },
  { number: 9, title: "Compaixão", description: "Humanidade, idealismo e sabedoria" },
];

const elementColors: Record<string, string> = {
  Fogo: "text-[var(--crimson-light)]",
  Terra: "text-[var(--gold)]",
  Ar: "text-[var(--text-secondary)]",
  Água: "text-blue-400/80",
};

export default function Zodiac() {
  return (
    <section id="oraculo" className="section-deep star-field relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Oráculo astrológico ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Os Mistérios do Zodíaco
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            Descubra a linguagem dos astros e da numerologia — e como eles podem iluminar o seu
            caminho espiritual.
          </p>
        </motion.div>

        {/* Zodiac Signs */}
        <div className="relative z-10 mb-20">
          <h3 className="mb-10 flex items-center justify-center gap-3 font-signora text-2xl text-[var(--gold-bright)] md:text-3xl">
            <span className="text-lg">☽</span>
            Signos do Zodíaco
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {zodiacSigns.map((sign, index) => (
              <motion.div
                key={sign.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card group cursor-default p-5 text-center"
              >
                <span className="mb-2 block text-3xl transition-transform duration-300 group-hover:scale-110">
                  {sign.symbol}
                </span>
                <h4 className="font-signora text-base text-[var(--gold-bright)]">{sign.name}</h4>
                <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-xs text-[var(--text-muted)]">
                  {sign.period}
                </p>
                <p className={`mt-1 font-[family-name:var(--font-dm-sans)] text-xs font-medium ${elementColors[sign.element]}`}>
                  {sign.element}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Numerology */}
        <div className="relative z-10">
          <h3 className="mb-10 flex items-center justify-center gap-3 font-signora text-2xl text-[var(--gold-bright)] md:text-3xl">
            <span className="text-lg">✦</span>
            Numerologia
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {numerologyInfo.map((info, index) => (
              <motion.div
                key={info.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card group p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="gold-text font-tanpearl text-3xl font-bold">{info.number}</span>
                  <h4 className="font-signora text-lg text-[var(--gold-bright)]">{info.title}</h4>
                </div>
                <p className="font-[family-name:var(--font-cormorant)] text-base text-[var(--text-secondary)]">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}