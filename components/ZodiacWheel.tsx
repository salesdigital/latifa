"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ZodiacWheel() {
  return (
    <div className="roda-wrapper">
      {/* Pulsing mystical aura layers */}
      <div className="roda-aura roda-aura--1" />
      <div className="roda-aura roda-aura--2" />
      <div className="roda-aura roda-aura--3" />

      {/* Orbiting sparkle particles */}
      <div className="roda-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="roda-spark"
            style={{
              animationDelay: `${i * -1.2}s`,
              animationDuration: `${8 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* The spinning wheel image */}
      <motion.div
        className="roda-image"
        initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/roda-fortuna.png"
          alt="Roda dos signos do zodíaco girando"
          width={520}
          height={520}
          priority
          className="roda-image__img"
          sizes="(max-width: 420px) 260px, (max-width: 768px) 340px, (max-width: 1024px) 400px, 480px"
        />
      </motion.div>

      {/* Centre glow pulse */}
      <div className="roda-center-glow" />
    </div>
  );
}
