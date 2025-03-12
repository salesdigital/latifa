'use client';

import { motion } from 'motion/react';
import { Sparkles, ScrollText, HeartHandshake, Stars, Flower2, Briefcase, Quote } from 'lucide-react';

const specialties = [
  {
    title: "Cartomante / Vidente",
    icon: Sparkles,
    description: "Leitura da sorte ou adivinhação usando um baralho de cartas."
  },
  {
    title: "Consulta de cartas",
    icon: ScrollText,
    description: "Além de trazer respostas, pode promover uma maior compreensão em torno de nós mesmos."
  },
  {
    title: "Trabalho de união",
    icon: HeartHandshake,
    description: "Reforça e destaca a ligação entre duas pessoas e o laço espiritual entre elas."
  },
  {
    title: "Astrologia",
    icon: Stars,
    items: [
      "Entenda quem você é",
      "Conheça os seus traços de personalidade",
      "Saiba seus pontos fortes e fracos",
      "Evolua para uma pessoa melhor"
    ]
  },
  {
    title: "Terapia Espiritual",
    icon: Flower2,
    items: [
      "Eliminar energias negativas",
      "Restaurar forças positivas",
      "Processo de consciência emocional e espiritual",
      "Correção das fragilidades"
    ]
  },
  {
    title: "Negócios",
    icon: Briefcase,
    items: [
      "Seja mais bem-sucedido",
      "Esteja preparado para os seus negócios",
      "Desperte novas ideias",
      "Esteja aberto para crescer"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-tanpearl text-center mb-16 text-red-600"
          >
            Especialidades
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center mb-16 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            O sucesso de um tratamento espiritual depende de cada caso e os resultados podem variar de pessoa para pessoa.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <motion.div
                key={specialty.title}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200 transition-colors duration-300 group-hover:text-orange-300" strokeWidth={1.5} />
                <div className="flex items-center gap-3 mb-4">
                  {specialty.icon && <specialty.icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />}
                  <h3 className="text-2xl font-signora text-red-600">{specialty.title}</h3>
                </div>
                {specialty.description ? (
                  <p className="text-gray-700">{specialty.description}</p>
                ) : (
                  <ul className="space-y-2">
                    {specialty.items?.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        variants={itemVariants}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 