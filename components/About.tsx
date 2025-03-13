"use client";
import Image from "next/image";
import Container from "./Container";

const About = () => {
  return (
    <section id="sobre" className="bg-gradient-to-br from-red-800 via-red-600 to-red-500 bg-cover bg-center md:min-h-[calc(100vh-100px)] flex items-center py-12 md:py-0">
      <Container>
        <div className="flex flex-col items-center justify-center pt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white font-tanpearl text-center">
            Latifa Sensitiva
          </h2>
          <p className="text-white text-sm md:text-base text-center mt-2">
            Sensitiva, Vidente, Espiritualista, Taróloga
          </p>
          <hr className="w-32 md:w-24 h-1 bg-gradient-to-r from-orange-400 mt-4 md:mt-2 to-orange-300 mb-8 md:mb-6" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <p className="text-white text-base md:text-lg text-justify md:max-w-3xl mx-auto">
            Meu nome é Latifa e, desde criança, possuo o dom da vidência. Há 25 anos, dedico minha vida a ajudar pessoas através da espiritualidade, revelando caminhos, orientando decisões e trazendo soluções para questões amorosas e espirituais.

Meu trabalho é baseado na verdade e no respeito ao destino de cada um. Antes de qualquer ritual ou trabalho espiritual, faço previsões detalhadas para entender a situação e garantir o melhor resultado.

Com conhecimento, prática e forte conexão espiritual, ofereço suporte completo para quem busca clareza, amor e transformação.
            </p>
          </div>
          <div className="flex flex-col mb-10 items-center justify-center w-full md:w-fit rounded-lg overflow-hidden shadow-lg max-w-[500px] h-[500px]">
            <Image 
              src="/galeria/cartomante-6.jpg" 
              alt="About" 
              className="w-full h-auto object-cover"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
