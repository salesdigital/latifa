'use client';

import { motion } from 'motion/react';
import { Sparkles, ScrollText, HeartHandshake, Stars, Flower2, Briefcase } from 'lucide-react';
import Container from './Container';

const specialties = [
  {
    title: "Cartomante & Vidente",
    icon: Sparkles,
    description: "Revelações profundas através da leitura de cartas — o destino fala para quem sabe ouvir."
  },
  {
    title: "Consulta de Cartas",
    icon: ScrollText,
    description: "Mais do que respostas: uma jornada de autoconhecimento e compreensão do seu caminho."
  },
  {
    title: "Trabalho de União",
    icon: HeartHandshake,
    description: "Reforça e ilumina o laço espiritual entre duas almas, trazendo harmonia e reconexão."
  },
  {
    title: "Astrologia",
    icon: Stars,
    items: [
      "Compreenda a sua essência mais profunda",
      "Descubra os seus traços de personalidade",
      "Conheça os seus pontos fortes e fragilidades",
      "Evolua para a melhor versão de si"
    ]
  },
  {
    title: "Terapia Espiritual",
    icon: Flower2,
    items: [
      "Eliminação de energias negativas",
      "Restauração de forças positivas",
      "Consciência emocional e espiritual",
      "Cura de fragilidades internas"
    ]
  },
  {
    title: "Negócios & Prosperidade",
    icon: Briefcase,
    items: [
      "Atração de sucesso e abundância",
      "Preparação espiritual para grandes decisões",
      "Despertar de novas oportunidades",
      "Abertura para o crescimento"
    ]
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="section-cosmic relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Áreas de atuação ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Especialidades Espirituais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            O sucesso de cada tratamento espiritual é único — os resultados dependem da energia,
            da fé e do caminho individual de cada alma.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden p-8"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--cosmic-purple)]/30 blur-2xl transition-all duration-500 group-hover:bg-[var(--gold-glow)]" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold-glow)] text-[var(--gold)]">
                    <specialty.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-signora text-xl text-[var(--gold-bright)]">{specialty.title}</h3>
                </div>

                {specialty.description ? (
                  <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                    {specialty.description}
                  </p>
                ) : (
                  <ul className="space-y-2.5">
                    {specialty.items?.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[var(--gold)]" />
                        <span className="font-[family-name:var(--font-cormorant)] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}