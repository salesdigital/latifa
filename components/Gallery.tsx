'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Expand } from 'lucide-react';
import Container from './Container';

const images = [
  { src: '/galeria/cartomante-1.jpg', alt: 'Ritual espiritual à beira-mar — oferenda a Iemanjá' },
  { src: '/galeria/cartomante-2.jpg', alt: 'Consulta de tarô e leitura de cartas' },
  { src: '/galeria/cartomante-3.jpg', alt: 'Ritual de proteção e limpeza espiritual' },
  { src: '/galeria/cartomante-4.webp', alt: 'Trabalho de amor e união espiritual' },
  { src: '/galeria/cartomante-5.jpg', alt: 'Ritual de prosperidade e abundância' },
  { src: '/galeria/cartomante-6.jpg', alt: 'Latifa em conexão espiritual na natureza' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-dark relative py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-14 text-center"
        >
          <p className="mb-3 font-[family-name:var(--font-dm-sans)] text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            ✦ Registos de fé ✦
          </p>
          <h2 className="font-tanpearl text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Conexões Espirituais
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-cormorant)] text-lg text-[var(--text-secondary)]">
            Momentos sagrados capturados em imagem — a essência da espiritualidade e do poder místico.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-[var(--glass-border)]"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-void)]/60 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-2">
                  <Expand className="h-6 w-6 text-[var(--gold)]" />
                  <p className="max-w-[200px] text-center font-[family-name:var(--font-dm-sans)] text-sm text-[var(--text-primary)]">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg-void)]/60 to-transparent" />
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
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[var(--glass-border)]"
              style={{ aspectRatio: "4/3" }}
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