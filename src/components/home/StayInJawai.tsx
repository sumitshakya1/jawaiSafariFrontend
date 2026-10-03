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
      hotel: JAWAI_HOTELS[0], // SUJÁN JAWAI
      tag: 'WORLD TOP 50',
      highlightBadge: 'Ultra-Luxury Canvas Suites',
    },
    {
      id: 'cheetagarh-resort',
      hotel: JAWAI_HOTELS[2], // WelcomHeritage Cheetagarh
      tag: 'LAKESIDE CHALETS',
      highlightBadge: 'Resort & Ayurvedic Spa',
    },
    {
      id: 'jawai-castle',
      hotel: JAWAI_HOTELS[4], // Jawai Castle Bera
      tag: '16TH-CENTURY FORT',
      highlightBadge: 'Royal Rajput Heritage',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0a0f14] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[1px] bg-[#e8a455]" />
              <span className="text-[11px] font-mono font-semibold text-[#e8a455] tracking-[0.35em] uppercase">
                ACCOMMODATION CURATION
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight text-white">
              Stay in Jawai — Handpicked Lodges
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-xs md:text-sm text-white/70 max-w-md">
              From Relais & Châteaux tented camps with private plunge pools to restored Rajput fortresses and granite kopje glamping.
            </p>
            <Link
              href="/jawai-hotels-resorts"
              className="text-xs font-mono text-[#e8a455] uppercase tracking-wider hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>View All 9 Verified Properties</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* 3 Featured Real Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStays.map(({ hotel, tag, highlightBadge }) => (
            <div
              key={hotel.id}
              className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-[#e8a455]/40 transition-all duration-300"
            >
              <div>
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#e8a455]/30 text-[#e8a455]">
                      {tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-white/80 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs text-[#e8a455]">location_on</span>
                    <span>{hotel.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#e8a455] uppercase tracking-widest block mb-1">
                    {highlightBadge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#e8a455] transition-colors leading-snug">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {hotel.overview}
                  </p>
                  <div className="text-[11px] font-mono text-white/60 mb-2">
                    <span className="text-[#e8a455] font-semibold">BEST FOR:</span> {hotel.idealFor}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5">
                <WhatsAppButton
                  customMessage={`Hi Ghoomosa, I am inquiring about stay availability for *${hotel.name}* in Jawai. Please share recommended room categories and quotation.`}
                  size="sm"
                  variant="editorial"
                  className="w-full"
                >
                  Check Stay Availability
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
