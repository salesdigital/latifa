"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";

const HERO_PAIN_POINTS = [
  "Seu relacionamento esfriou?",
  "Ele(a) se afastou?",
  "Sente que algo está errado?",
];

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <Container className="flex flex-col items-center gap-10 py-12 md:flex-row md:gap-14 md:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Latifa Sensitiva
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-red-700 md:text-6xl font-tanpearl">
            Descubra o que está bloqueando sua vida amorosa
          </h1>
          <p className="mb-7 text-lg text-red-600/95 md:text-2xl">
            Atendimento espiritual sigiloso e imediato para relacionamentos.
          </p>

          <ul className="mb-6 space-y-2 text-base font-medium text-gray-700 md:text-lg">
            {HERO_PAIN_POINTS.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>

          <p className="mb-8 text-base text-gray-700 md:text-lg">
            Descubra agora com uma consulta espiritual.
          </p>

          <WhatsAppButton
            className="w-full px-8 py-5 text-base md:w-auto md:text-lg"
            label="Falar agora no WhatsApp"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              Atendimento imediato
            </span>
            <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              100% sigiloso
            </span>
            <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Poucos horários hoje
            </span>
          </div>
        </div>

        <motion.div
          className="relative w-full max-w-[520px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-orange-300/25 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-red-300/25 blur-3xl" />
          <Image
            priority
            src="/taro.jpeg"
            alt="Mesa de tarot para consulta espiritual focada em relacionamento"
            width={520}
            height={640}
            className="relative h-auto w-full rounded-2xl border-4 border-white object-cover shadow-2xl"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
