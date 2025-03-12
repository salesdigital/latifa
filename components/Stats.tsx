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
    { id: 1, value: '+25', name: 'anos prestando atendimento espiritual' },
    { id: 2, value: '+1000', name: 'trabalhos realizados\ncom sucesso' },
    { id: 3, value: '+1500', name: 'relacionamentos restabelecidos' },
    { id: 4, value: '+600', name: 'atendimentos\nfeitos' },
  ];

  return (
    <section className="bg-gradient-to-br w-full bg-white flex items-center py-12 md:py-0">
      <div className="bg-white py-24 sm:py-32 w-full">
        <Container>
          <motion.dl 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={statsVariants}
                custom={index}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600 whitespace-pre-line">
                  {stat.name}
                </dt>
                <motion.dd 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                >
                  {stat.value}
                </motion.dd>
              </motion.div>
            ))}
          </motion.dl>
        </Container>
      </div>
    </section>
  );
};

export default Stats;
