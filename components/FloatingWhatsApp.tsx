"use client";

import WhatsAppButton from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] md:bottom-8 md:right-8">
      <div className="relative">
        {/* Breathing glow ring */}
        <div className="absolute -inset-2 rounded-2xl bg-emerald-500/20 blur-xl" style={{ animation: "breathe 3s ease-in-out infinite" }} />
        <WhatsAppButton
          className="relative !px-5 !py-3 !text-xs md:!text-sm"
          label="Atendimento imediato"
        />
      </div>
    </div>
  );
}
