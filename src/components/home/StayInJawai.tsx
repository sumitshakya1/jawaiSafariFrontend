'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';
import { JAWAI_HOTELS } from '@/constants/hotelsData';

export function StayInJawai() {
  const featuredStays = [
    {
      id: 'sujan-jawai',
      hotel: JAWAI_HOTELS[0],
      tag: 'WORLD TOP 50',
      highlightBadge: 'Ultra-Luxury Canvas Suites',
    },
    {
      id: 'jawai-nature-lodge',
      hotel: JAWAI_HOTELS[1],
      tag: 'HERITAGE SANCTUARY',
      highlightBadge: 'Eco-Luxury Kopje Views',
    },
    {
      id: 'amritara-jawai-sagar',
      hotel: JAWAI_HOTELS[2],
      tag: 'WILDERNESS RETREAT',
      highlightBadge: 'Dam View & Granite Boulders',
    },
  ];

  return (
    <section id="stay" className="relative w-full py-20 md:py-28 bg-[#F8FAF8] border-t border-[#DDE7E5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-[#005B5C]" />
              <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
                ACCOMMODATION CURATION
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
              Curated Stays & Luxury Camps
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#667085] max-w-2xl font-light">
              From Relais & Châteaux luxury tented camps to boutique heritage retreats tucked against private granite kopjes.
            </p>
          </div>

          <Link
            href="/jawai-hotels-resorts"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#005B5C] text-[#005B5C] hover:bg-[#EEF8F6] text-xs font-mono font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Explore All Stays Directory</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStays.map((item) => {
            const h = item.hotel;
            if (!h) return null;
            return (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DDE7E5] hover:border-[#0A7B75] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#EEF8F6]">
                  <Image
                    src={h.image}
                    alt={h.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/75 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#005B5C] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FDBA21] font-semibold block">
                      {h.categoryLabel || h.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {h.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs text-[#263238] font-light leading-relaxed line-clamp-3">
                      {h.overview}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#667085]">
                      <span className="material-symbols-outlined text-sm text-[#005B5C]">location_on</span>
                      <span>{h.location}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DDE7E5] flex items-center justify-between gap-2">
                    <Link
                      href="/jawai-hotels-resorts"
                      className="text-xs font-semibold text-[#005B5C] hover:text-[#0A7B75] transition-colors"
                    >
                      View Details
                    </Link>
                    <WhatsAppButton
                      packageOrExperienceName={`${h.name} Stay Enquiry`}
                      canonicalPath="/jawai-hotels-resorts"
                      variant="editorial"
                      size="sm"
                    >
                      Check Dates
                    </WhatsAppButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
