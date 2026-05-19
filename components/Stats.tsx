"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Container from "./Container";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count > 0 ? `+${count.toLocaleString('pt-BR')}` : target === 0 ? "Hoje" : "0"}{suffix}</span>;
}

const Stats = () => {
  const stats = [
    { id: 1, value: 25, label: "anos de experiência espiritual" },
    { id: 2, value: 50000, label: "atendimentos realizados" },
    { id: 3, value: 15000, label: "trabalhos espirituais realizados" },
    { id: 4, value: 8000, label: "casos amorosos orientados" },
  ];

  return (
    <section className="section-deep relative py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Resultados reais ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Vidas Transformadas pela Luz
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card group flex flex-col items-center justify-center p-6 text-center md:p-8"
            >
              <div className="mb-4 flex items-center justify-center overflow-visible font-tanpearl text-3xl font-bold leading-[1.8] py-4 sm:text-4xl lg:text-5xl">
                <span className="gold-text inline-block overflow-visible py-1">
                  <AnimatedCounter target={stat.value} />
                </span>
              </div>
              <p className="mx-auto max-w-[18ch] font-[family-name:var(--font-dm-sans)] text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                {stat.label}
              </p>
              <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
