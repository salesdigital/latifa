'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';
import Container from './Container';

const testimonialImages = [
  { src: '/testemunhas/testemunho-1.jpg', alt: 'Depoimento real — reconexão amorosa' },
  { src: '/testemunhas/testemunho-2.jpg', alt: 'Depoimento real — proteção espiritual' },
  { src: '/testemunhas/testemunho-3.jpg', alt: 'Depoimento real — clareza e orientação' },
  { src: '/testemunhas/testemunho-4.jpg', alt: 'Depoimento real — transformação de vida' },
  { src: '/testemunhas/testemunho-5.jpg', alt: 'Depoimento real — harmonia no relacionamento' },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="section-cosmic star-field relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Testemunhos reais ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Vozes que Encontraram o Caminho
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            Mais de 50.000 atendimentos realizados com foco em reconexão, clareza amorosa e
            transformação espiritual.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {testimonialImages.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group cursor-pointer overflow-hidden p-3"
              onClick={() => setSelectedImage(testimonial.src)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-3 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]"
                    strokeWidth={1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-void)]/95 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute right-4 top-4 text-[var(--text-secondary)] transition-colors hover:text-[var(--gold)]"
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
                className="mx-auto rounded-2xl border border-[var(--glass-border)] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
