'use client';

import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "5511947451820"; // Format: country code + number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
              Pronta para sua consulta?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Entre em contato agora e descubra como posso te ajudar a encontrar as respostas que você procura.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-white/10">
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
                <span>(11) 94745-1820</span>
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