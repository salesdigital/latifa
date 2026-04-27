"use client";
import { motion } from "motion/react";
import Container from "./Container";

const statsVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Stats = () => {
  const stats = [
    { id: 1, value: "+25", name: "anos de experiência espiritual" },
    { id: 2, value: "+2000", name: "atendimentos realizados" },
    { id: 3, value: "+1500", name: "casos amorosos orientados" },
    { id: 4, value: "Hoje", name: "atendimento imediato e sigiloso" },
  ];

  return (
    <section className="flex w-full items-center bg-gradient-to-b from-white via-red-50/40 to-white py-14 md:py-20">
      <div className="w-full">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Histórias Reais
            </p>
            <h2 className="text-3xl font-bold text-red-700 md:text-4xl font-tanpearl">
              Resultados Que Transformam Vidas!
            </h2>
          </motion.div>

          <motion.dl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={statsVariants}
                custom={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group rounded-2xl border border-red-100/80 bg-white/90 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/60"
              >
                <motion.dd
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="mb-3 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
                >
                  {stat.value}
                </motion.dd>
                <dt className="mx-auto max-w-[18ch] text-sm font-medium uppercase tracking-wider text-gray-600 md:text-base">
                  {stat.name}
                </dt>
                <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.dl>
        </Container>
      </div>
    </section>
  );
};

export default Stats;
