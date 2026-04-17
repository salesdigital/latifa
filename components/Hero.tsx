"use client"
import Image from "next/image";
import Container from "./Container";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 overflow-hidden via-orange-50 to-white bg-cover bg-center min-h-[calc(100vh-100px)] flex items-center">
      <Container className="flex flex-col mt-10 md:mt-0 md:flex-row justify-between items-center relative">
        <div className="max-w-3xl z-10">
          <h1 className="text-red-600 text-4xl md:text-6xl font-bold mb-4 font-tanpearl">
            Latifa Sensitiva
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-400 mb-6"></div>
          <p className="text-red-500/90 text-xl mb-8">
            Amarrações amorosas, simpatias, união de casais, adoçamentos e tarot
            online
          </p>
          <div className="prose prose-lg text-gray-700 mb-8">
            <p>
              Abra seus caminhos e conquiste seus sonhos com equilíbrio e harmonia.
            </p>
            <p>
              Com minha força espiritual, posso ajudá-lo(a) a remover obstáculos e trazer novas oportunidades para sua vida. A espiritualidade é um caminho poderoso para alcançar o que deseja.
            </p>
            <p>
              Fortaleça seu Anjo da Guarda e sinta sua proteção mais perto de você.
            </p>
            <p>
              Se seu relacionamento esfriou ou enfrenta desafios, há soluções! Meus trabalhos espirituais podem reacender a paixão e reconquistar quem você ama.
            </p>
            <p>
              Quer salvar seu casamento ou trazer de volta um grande amor? Com confiança e direcionamento espiritual, é possível restaurar a harmonia e a conexão verdadeira.
            </p>
            <p>
              Seu destino está em suas mãos. Dê o primeiro passo para a transformação e permita-me guiá-lo(a) nesse caminho!
            </p>
          </div>
          <a
            href="https://wa.me/5511971093420"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 cursor-pointer 
  bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 
  text-white px-7 py-4 rounded-xl font-extrabold text-sm tracking-wide
  shadow-lg shadow-green-500/30
  hover:scale-105 hover:shadow-xl hover:shadow-green-500/40
  transition-all duration-300 border border-white/10"
          >
            {/* Efeito brilho animado */}
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 blur transition"></span>

            <svg
              className="size-5 z-10"
              fill="#fff"
              viewBox="0 0 308 308"
            >
              <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781..." />
            </svg>

            <span className="z-10" style={{ fontFamily: "'Tanpearl', sans-serif" }}>
              Fale comigo agora no WhatsApp
            </span>
          </a>
        </div>
        <motion.div
          className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] md:left-60 mt-8 md:mt-0 "
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          <Image priority src="/roda-fortuna.png" alt="Roda da Fortuna - Consulta de Tarot e Previsões Espirituais com Latifa Sensitiva" className="md:w-[700px] md:h-[700px]" width={700} height={600} />
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
