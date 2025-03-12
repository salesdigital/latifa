'use client';

import { motion } from 'motion/react';
import { Heart, Eye, Shield, Coins, Quote } from 'lucide-react';

const serviceCategories = [
  {
    title: "Adivinhação e Leituras",
    icon: Eye,
    items: [
      "Tarô Online",
      "Cartas",
      "Búzios",
      "Leitura da Sorte",
      "Previsões Detalhadas"
    ]
  },
  {
    title: "Limpeza e Proteção Espiritual",
    icon: Shield,
    items: [
      "Trabalhos contra inveja e mal olhado",
      "Quebra de laço de almas",
      "Quebra de maldições",
      "Descarrego e abre caminho",
      "Blindagem Espiritual",
      "Quebra de feitiçaria e magia negra"
    ]
  },
  {
    title: "Amor e Relacionamentos",
    icon: Heart,
    items: [
      "Amarração Amorosa",
      "Rituais de Amor",
      "União de casais",
      "Reconciliação amorosa",
      "Fortalecimento do relacionamento"
    ]
  },
  {
    title: "Prosperidade e Sucesso",
    icon: Coins,
    items: [
      "Trabalhos para prosperidade",
      "Sucesso em grandes negócios",
      "Promoção na área profissional",
      "Abertura de caminhos financeiros",
      "Crescimento profissional"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-red-50 to-white">
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
            Trabalhos Realizados
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center mb-16 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Ofereço uma ampla gama de serviços espirituais, desde consultas e leituras até trabalhos poderosos para amor, proteção e prosperidade. Cada trabalho é personalizado para atender às suas necessidades específicas.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-200 transition-colors duration-300 group-hover:text-orange-300" strokeWidth={1.5} />
                <div className="flex items-center gap-3 mb-4">
                  {category.icon && <category.icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />}
                  <h3 className="text-2xl font-signora text-red-600">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 