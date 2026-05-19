"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Container from "./Container";

const About = () => {
  return (
    <section id="sobre" className="section-dark star-field relative py-20 md:py-28 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Quem sou eu ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Latifa Sensitiva
          </h2>
          <p className="mt-2 font-signora text-base text-[var(--text-secondary)] md:text-lg">
            Sensitiva • Vidente • Espiritualista • Taróloga
          </p>
          <div className="mystic-divider mx-auto mt-6">
            <span className="text-[var(--gold)]">☽</span>
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-lg leading-[1.8] text-[var(--text-secondary)] md:text-xl">
              Desde a infância, vejo além do que os olhos alcançam. Há mais de 25 anos, dedico a minha
              vida a guiar pessoas através do véu do invisível — revelando verdades, reconectando
              almas e iluminando caminhos que pareciam perdidos.
            </p>
            <p className="mt-6 font-[family-name:var(--font-cormorant)] text-lg leading-[1.8] text-[var(--text-secondary)] md:text-xl">
              O meu trabalho é baseado na verdade e no respeito ao destino de cada um. Antes de
              qualquer ritual, faço previsões detalhadas para compreender a situação e garantir o
              melhor resultado. Com conhecimento, prática e forte conexão espiritual, ofereço suporte
              completo para quem busca clareza, amor e transformação.
            </p>
            <div className="mystic-divider mt-8">
              <span className="text-[var(--gold)]">✦</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-md flex-shrink-0"
          >
            <div className="glass-card overflow-hidden rounded-2xl p-2">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/galeria/cartomante-6.jpg"
                  alt="Latifa Sensitiva — Vidente e Taróloga com mais de 25 anos de experiência"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)]/40 to-transparent" />
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--gold-glow)] via-transparent to-[var(--crimson-soft)] blur-2xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
