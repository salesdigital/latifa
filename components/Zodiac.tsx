'use client';

import { motion } from 'motion/react';
import { Star, Hash, Quote } from 'lucide-react';

const zodiacSigns = [
  { name: 'Áries', period: '21/03 - 19/04', element: 'Fogo' },
  { name: 'Touro', period: '20/04 - 20/05', element: 'Terra' },
  { name: 'Gêmeos', period: '21/05 - 20/06', element: 'Ar' },
  { name: 'Câncer', period: '21/06 - 22/07', element: 'Água' },
  { name: 'Leão', period: '23/07 - 22/08', element: 'Fogo' },
  { name: 'Virgem', period: '23/08 - 22/09', element: 'Terra' },
  { name: 'Libra', period: '23/09 - 22/10', element: 'Ar' },
  { name: 'Escorpião', period: '23/10 - 21/11', element: 'Água' },
  { name: 'Sagitário', period: '22/11 - 21/12', element: 'Fogo' },
  { name: 'Capricórnio', period: '22/12 - 19/01', element: 'Terra' },
  { name: 'Aquário', period: '20/01 - 18/02', element: 'Ar' },
  { name: 'Peixes', period: '19/02 - 20/03', element: 'Água' },
];

const numerologyInfo = [
  {
    number: 1,
    title: 'Liderança',
    description: 'Independência, originalidade e determinação',
  },
  {
    number: 2,
    title: 'Harmonia',
    description: 'Cooperação, diplomacia e sensibilidade',
  },
  {
    number: 3,
    title: 'Expressão',
    description: 'Criatividade, comunicação e otimismo',
  },
  {
    number: 4,
    title: 'Estabilidade',
    description: 'Organização, disciplina e trabalho',
  },
  {
    number: 5,
    title: 'Liberdade',
    description: 'Mudança, aventura e versatilidade',
  },
  {
    number: 6,
    title: 'Harmonia',
    description: 'Amor, responsabilidade e equilíbrio',
  },
  {
    number: 7,
    title: 'Sabedoria',
    description: 'Análise, introspecção e espiritualidade',
  },
  {
    number: 8,
    title: 'Poder',
    description: 'Sucesso, autoridade e abundância',
  },
  {
    number: 9,
    title: 'Humanidade',
    description: 'Compaixão, idealismo e sabedoria',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function Zodiac() {
  return (
    <section id="oraculo" className="py-20 bg-gradient-to-b from-red-50 via-white to-orange-50">
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
            Oráculo Astrológico
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center mb-16 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Descubra os mistérios do zodíaco e da numerologia, e como eles podem guiar seu caminho espiritual.
          </motion.p>

          {/* Zodiac Signs */}
          <div className="mb-20">
            <h3 className="text-3xl font-signora text-center mb-12 text-red-600 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
              Signos do Zodíaco
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {zodiacSigns.map((sign) => (
                <motion.div
                  key={sign.name}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-orange-200 transition-colors duration-300 group-hover:text-orange-300" strokeWidth={1.5} />
                  <h4 className="text-xl font-signora text-red-600 mb-2">{sign.name}</h4>
                  <p className="text-gray-600 text-sm">{sign.period}</p>
                  <p className="text-orange-500 text-sm mt-1">Elemento: {sign.element}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Numerology */}
          <div>
            <h3 className="text-3xl font-signora text-center mb-12 text-red-600 flex items-center justify-center gap-2">
              <Hash className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
              Numerologia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {numerologyInfo.map((info) => (
                <motion.div
                  key={info.number}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-orange-200 transition-colors duration-300 group-hover:text-orange-300" strokeWidth={1.5} />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-orange-500">{info.number}</span>
                    <h4 className="text-xl font-signora text-red-600">{info.title}</h4>
                  </div>
                  <p className="text-gray-700">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 