'use client';

import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-tanpearl mb-6">
              Não adie sua resposta no amor
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Fale agora no WhatsApp para atendimento imediato, resposta rápida e total sigilo.
            </p>
            <WhatsAppButton label="Falar agora no WhatsApp" />
          </motion.div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 border-t border-white/10">
          <div>
            <h3 className="font-signora text-2xl mb-4">Latifa Sensitiva</h3>
            <p className="text-white/80">
              Ajudando pessoas a encontrarem seu caminho através da espiritualidade.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 97109-3420</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>latifa_tarologa79@yahoo.com</span>
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Cartomante / Vidente</li>
              <li>Consulta de cartas</li>
              <li>Trabalho de união</li>
              <li>Terapia Espiritual</li>
            </ul>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Sales Digital. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://www.instagram.com/salesdigital/" target="_blank" rel="noopener noreferrer">Sales Digital</a></p>
        </div>
      </div>
    </footer>
  );
} 
