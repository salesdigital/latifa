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
  variant?: "primary" | "whatsapp";
}

export default function WhatsAppButton({
  className = "",
  label = "Falar agora no WhatsApp",
  message = "Olá! Quero fazer uma consulta espiritual agora.",
  variant = "whatsapp",
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

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 font-[family-name:var(--font-dm-sans)] text-sm font-bold tracking-wide transition-all duration-400";

  const variants = {
    primary: `${baseStyles} border border-[var(--gold)]/30 bg-gradient-to-r from-[var(--gold)]/20 via-[var(--gold)]/10 to-[var(--gold)]/20 text-[var(--gold-bright)] shadow-lg shadow-[var(--gold)]/10 hover:border-[var(--gold)]/50 hover:shadow-xl hover:shadow-[var(--gold)]/20 hover:scale-[1.03]`,
    whatsapp: `${baseStyles} border border-emerald-500/20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.03]`,
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTrackClick}
      className={`${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      <MessageCircle className="z-10 h-5 w-5" />
      <span className="z-10">{label}</span>
    </a>
  );
}
