'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  {
    src: '/galeria/cartomante-1.jpg',
    alt: 'Cartomante realizando leitura espiritual',
  },
  {
    src: '/galeria/cartomante-2.jpg',
    alt: 'Consulta de tarô e cartas',
  },
  {
    src: '/galeria/cartomante-3.jpg',
    alt: 'Ritual espiritual e proteção',
  },
  {
    src: '/galeria/cartomante-4.webp',
    alt: 'Trabalho de amor e união',
  },
  {
    src: '/galeria/cartomante-5.jpg',
    alt: 'Trabalho de amor e união',
  },
  {
    src: '/galeria/cartomante-6.jpg',
    alt: 'Abeçoando pessoas na cachoeira',
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto "
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-tanpearl text-center mb-16 text-red-600"
          >
            Galeria
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center mb-16 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Conheça um pouco do meu trabalho através dessas imagens que capturam a essência da espiritualidade e do poder místico.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <motion.div
                key={image.src}
                variants={itemVariants}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 