"use client";

import WhatsAppButton from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] md:bottom-8 md:right-8">
      <WhatsAppButton
        className="animate-pulse px-5 py-3 text-xs md:text-sm"
        label="Atendimento imediato"
      />
    </div>
  );
}
