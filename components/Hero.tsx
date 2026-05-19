"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";
import ZodiacWheel from "./ZodiacWheel";

const HERO_PAIN_POINTS = [
  "Sente que a energia entre vocês mudou?",
  "Ele(a) afastou-se sem explicação?",
  "Algo invisível está a bloquear o seu amor?",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with mystic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-void)]/80 via-[var(--bg-deep)]/70 to-[var(--bg-void)]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-void)]/60 to-transparent" />
      </div>

      {/* Star field */}
      <div className="star-field absolute inset-0 z-[1]" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 py-20 md:flex-row md:gap-16 lg:gap-20">
        {/* Text Column */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]"
          >
            ✦ Latifa Sensitiva ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 font-tanpearl text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gold-text">Os astros revelam</span>
            <br />
            <span className="text-[var(--text-primary)]">o que o coração</span>
            <br />
            <span className="crimson-text">já sabe</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl md:text-2xl"
          >
            Orientação espiritual profunda para quem busca respostas no amor.
            Cada consulta é uma jornada de revelação e reconexão.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 space-y-3 text-base text-[var(--text-secondary)] md:text-lg"
          >
            {HERO_PAIN_POINTS.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                className="flex items-center gap-3"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <WhatsAppButton
              className="w-full px-8 py-5 text-base md:w-auto md:text-lg"
              label="Revelar o meu caminho"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <span className="glass-card rounded-full px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[var(--gold)]">
              ✦ Atendimento imediato
            </span>
            <span className="glass-card rounded-full px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[var(--gold)]">
              ✦ 100% sigiloso
            </span>
            <span className="glass-card rounded-full px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs font-medium text-[var(--crimson-light)]">
              ✦ Poucos horários hoje
            </span>
          </motion.div>
        </div>

        {/* Zodiac Wheel */}
        <motion.div
          className="relative flex w-full max-w-[520px] items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <ZodiacWheel />
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] h-32 bg-gradient-to-t from-[var(--bg-void)] to-transparent" />
    </section>
  );
};

export default Hero;
