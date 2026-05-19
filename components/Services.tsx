'use client';

import { motion } from 'motion/react';
import { Heart, Eye, Shield, Coins } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Container from './Container';

const serviceCategories = [
  {
    title: "Revelações do Destino",
    icon: Eye,
    items: [
      "Tarô Online",
      "Leitura de Cartas",
      "Búzios Sagrados",
      "Leitura da Sorte",
      "Previsões Detalhadas"
    ]
  },
  {
    title: "Blindagem Espiritual",
    icon: Shield,
    items: [
      "Proteção contra inveja e mau-olhado",
      "Quebra de laço de almas",
      "Quebra de maldições",
      "Descarrego e abertura de caminhos",
      "Blindagem energética completa",
      "Quebra de feitiçaria e magia negra"
    ]
  },
  {
    title: "Reconexão Amorosa",
    icon: Heart,
    items: [
      "Amarração Amorosa",
      "Rituais de Amor",
      "União de casais",
      "Reconciliação amorosa",
      "Fortalecimento do vínculo"
    ]
  },
  {
    title: "Caminhos da Abundância",
    icon: Coins,
    items: [
      "Trabalhos para prosperidade",
      "Sucesso em grandes negócios",
      "Promoção profissional",
      "Abertura de caminhos financeiros",
      "Crescimento e realização"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-dark star-field relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Trabalhos sagrados ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Rituais que Transformam
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            Cada caso é único. Cada consulta é uma jornada personalizada de descoberta e cura,
            com total sigilo e respeito ao seu caminho.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group relative overflow-hidden p-8"
            >
              {/* Hover glow effect */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gold-glow)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gold-glow)] text-[var(--gold)]">
                    <category.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-signora text-xl text-[var(--gold-bright)] md:text-2xl">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-[var(--text-secondary)]">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[var(--gold)]" />
                      <span className="font-[family-name:var(--font-cormorant)] text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card-strong relative z-10 mt-14 p-8 text-center md:p-12"
        >
          <h3 className="mb-3 font-tanpearl text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            O seu caso precisa de resposta agora?
          </h3>
          <p className="mb-6 font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            Atendimento imediato, sigiloso e com orientação espiritual profunda.
          </p>
          <WhatsAppButton label="Agendar consulta espiritual" />
        </motion.div>
      </Container>
    </section>
  );
}
