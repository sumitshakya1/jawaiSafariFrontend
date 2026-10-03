import React from 'react';
import Link from 'next/link';
import { RESPONSIBLE_TRAVEL_PILLARS } from '@/global/constants/responsibleTravel';

export function TravelResponsibly() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#EEF8F6] text-[#263238]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[2px] bg-[#005B5C]" />
            <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
              ETHICAL WILDLIFE CODE
            </span>
            <span className="w-6 h-[2px] bg-[#005B5C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
            Travel Responsibly in Jawai
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#667085] font-light">
            Explore freely. Travel responsibly. Leave only stories behind. Our 12 golden rules for wildlife preservation and community respect.
          </p>
        </div>

        {/* 6 Grid Awareness Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_TRAVEL_PILLARS.slice(0, 6).map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-white border border-[#DDE7E5] hover:border-[#0A7B75] transition-colors shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF8F6] text-[#0A7B75] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#263238] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/responsible-travel"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Read Full 12 Golden Principles Charter</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
