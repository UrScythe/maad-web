"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppBtn() {
  return (
    <a
      href="https://wa.me/593980798205?text=Hola%20MAAD,%20estoy%20interesado%20en%20realizar%20una%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-black border border-neutral-800 hover:border-neutral-500 text-white p-4 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center group hover:scale-105"
      title="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-white/5 scale-100 group-hover:animate-ping pointer-events-none" />
      <MessageSquare size={20} className="group-hover:rotate-6 transition-transform duration-300" />
      
      {/* Small green pulsing dot for online status */}
      <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
    </a>
  );
}
