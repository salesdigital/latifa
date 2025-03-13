'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';

const testimonialImages = [
  {
    src: '/testemunhas/testemunho-1.jpg',
    alt: 'Depoimento de cliente satisfeito',
  },
  {
    src: '/testemunhas/testemunho-2.jpg',
    alt: 'Depoimento de cliente satisfeito',
  },
  {
    src: '/testemunhas/testemunho-3.jpg',
    alt: 'Depoimento de cliente satisfeito',
  },
  {
    src: '/testemunhas/testemunho-4.jpg',
    alt: 'Depoimento de cliente satisfeito',
  },
  {
    src: '/testemunhas/testemunho-5.jpg',
    alt: 'Depoimento de cliente satisfeito',
  },
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

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-red-50 via-white to-orange-50">
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
            Depoimentos
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center mb-16 text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Veja o que nossos clientes têm a dizer sobre nossas consultas e trabalhos espirituais
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialImages.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(testimonial.src)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.alt}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-orange-400 fill-orange-400"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox for viewing testimonials */}
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
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Depoimento ampliado"
                width={800}
                height={1000}
                className="object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}