"use client";

import { MessageCircle } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface WhatsAppButtonProps {
  className?: string;
  label?: string;
  message?: string;
}

export default function WhatsAppButton({
  className = "",
  label = "Falar agora no WhatsApp",
  message = "Olá! Quero fazer uma consulta espiritual agora.",
}: WhatsAppButtonProps) {
  const whatsappNumber = "5511971093420";
  const whatsappMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleTrackClick = () => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "whatsapp_click",
      value: 1,
    });
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTrackClick}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-7 py-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 ${className}`}
    >
      <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 blur transition group-hover:opacity-100" />
      <MessageCircle className="z-10 size-5" />
      <span className="z-10">{label}</span>
    </a>
  );
}
