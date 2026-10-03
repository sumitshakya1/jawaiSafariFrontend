'use client';

import React from 'react';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/global/lib/whatsapp/buildWhatsAppUrl';

export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl({
    customMessage: `Hi Ghoomosa, I am looking to plan a trip to Jawai, Rajasthan. Please share available packages and quotation.`,
  });

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Floating tooltip */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 border border-primary/30 backdrop-blur-md shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[12px] font-medium text-white tracking-wide">
          Chat with Jawai Specialist
        </span>
        <span className="text-[11px] text-primary font-mono">{SITE_CONFIG.phone}</span>
      </div>

      {/* Main button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Ghoomosa"
        className="w-13 h-13 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.679-.702c.974.553 1.83.846 2.781.846h.001c3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.768-5.769-5.768zm7.653 5.765c0 4.225-3.438 7.663-7.654 7.663-1.309 0-2.544-.339-3.626-.934l-4.404 1.155 1.176-4.292c-.672-1.121-1.03-2.42-1.03-3.754 0-4.225 3.438-7.663 7.654-7.663 4.226 0 7.654 3.438 7.654 7.663zm-4.305 1.905c-.172-.086-1.02-.503-1.178-.56-.158-.057-.272-.086-.387.086-.115.172-.444.56-.545.674-.101.115-.201.129-.373.043-.172-.086-.727-.268-1.385-.855-.512-.456-.857-1.019-.958-1.191-.101-.172-.011-.265.076-.35.077-.077.172-.201.258-.302.086-.101.115-.172.172-.287.057-.115.029-.215-.014-.302-.043-.086-.387-.933-.531-1.278-.14-.337-.282-.291-.387-.296l-.33-.005c-.115 0-.302.043-.459.215-.158.172-.603.589-.603 1.436s.617 1.665.703 1.78c.086.115 1.214 1.854 2.941 2.6 1.727.747 1.727.498 2.043.469.316-.029 1.02-.416 1.163-.818.143-.402.143-.746.1-.818-.043-.072-.158-.115-.33-.201z" />
        </svg>
      </a>
    </aside>
  );
}
