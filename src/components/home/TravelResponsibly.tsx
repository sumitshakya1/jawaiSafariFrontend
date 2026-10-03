import React from 'react';
import { RESPONSIBLE_TRAVEL_PILLARS } from '@/global/constants/responsibleTravel';
import { SITE_CONFIG } from '@/global/config/site.config';

export function TravelResponsibly() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-surface-container-lowest text-white">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-primary" />
            <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
              ETHICAL WILDLIFE CODE
            </span>
            <span className="w-6 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white mb-3">
            Travel Responsibly
          </h2>
          <p className="font-editorial-quote italic text-lg text-white/70">
            “Explore freely. Travel responsibly. Leave only stories behind.”
          </p>
        </div>

        {/* 6 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {RESPONSIBLE_TRAVEL_PILLARS.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-low/40 border border-white/10 p-6 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="font-display-hero text-lg uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Wildlife Disclaimer Box */}
        <div className="p-6 md:p-8 bg-surface-container-low/70 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined">info</span>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-primary block">
                IMPORTANT CONSERVATION PRINCIPLE
              </span>
              <p className="text-xs text-white/80 mt-0.5">
                {SITE_CONFIG.disclaimers.wildlife}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 text-white/50 whitespace-nowrap">
            PRESERVE THE SILENCE
          </span>
        </div>
      </div>
    </section>
  );
}
