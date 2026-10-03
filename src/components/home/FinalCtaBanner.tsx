import React from 'react';
import { SITE_CONFIG } from '@/global/config/site.config';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function FinalCtaBanner() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#005B5C] text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#FDBA21]" />
          <span className="font-mono text-xs font-semibold text-[#FDBA21] tracking-[0.25em] uppercase">
            BEGIN YOUR JOURNEY
          </span>
          <span className="w-8 h-[2px] bg-[#FDBA21]" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display-brand text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Every Great Journey Starts with a Conversation
        </h2>

        <p className="mt-5 text-sm md:text-base text-white/85 max-w-2xl mx-auto font-light leading-relaxed">
          Share your dates, travel companions, and preferred stay style. Our Jawai specialists will craft a customized quotation.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            packageOrExperienceName="Direct Expedition Inquiry"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          >
            Plan My Jawai Trip on WhatsApp
          </WhatsAppButton>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-[#FDBA21]">call</span>
            <span>Call Concierge Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
