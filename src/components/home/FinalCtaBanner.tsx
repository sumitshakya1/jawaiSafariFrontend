import React from 'react';
import { SITE_CONFIG } from '@/global/config/site.config';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function FinalCtaBanner() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#090d12] text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-margin-mobile md:px-margin text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-primary" />
          <span className="font-label-counter text-xs font-semibold text-primary tracking-[0.35em] uppercase">
            BEGIN YOUR EXPEDITION
          </span>
          <span className="w-8 h-[1px] bg-primary" />
        </div>

        <h2 className="font-display-hero text-3xl md:text-6xl uppercase tracking-tight text-white mb-6">
          Plan Your Jawai Story
        </h2>

        <p className="font-editorial-quote italic text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          “Granite thrones sculpted by antiquity, where predators walk amidst quiet temples. Your customized story begins with a single conversation.”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            customMessage="Hi Ghoomosa, I would like to plan a complete Jawai trip. Please connect me with a destination expert."
            size="lg"
            variant="editorial"
          >
            Connect on WhatsApp (+91 73000 03101)
          </WhatsAppButton>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="px-8 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            <span>Call: {SITE_CONFIG.phone}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-xs font-mono text-white/40">
          <span>Ghoomosa.in • Rajasthan</span>
          <span>•</span>
          <span>No Obligation Quotation</span>
          <span>•</span>
          <span>Tailored Safaris & Stays</span>
        </div>
      </div>
    </section>
  );
}
