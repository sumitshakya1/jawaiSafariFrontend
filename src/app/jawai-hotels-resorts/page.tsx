'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { JAWAI_HOTELS, HotelItem } from '@/constants/hotelsData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function StaysInJawaiPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredHotels = JAWAI_HOTELS.filter((hotel) => {
    if (selectedCategory === 'all') return true;
    return hotel.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All Verified Stays' },
    { id: 'ultra-luxury', label: 'Ultra-Luxury & Plunge Pools' },
    { id: 'heritage-fort', label: 'Heritage Forts & Havelis' },
    { id: 'boutique-lodge', label: 'Boutique Stone Lodges' },
    { id: 'eco-glamping', label: 'Swiss Glamping Camps' },
  ];

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/jawai" className="hover:text-white transition-colors">Jawai</Link>
          <span>/</span>
          <span className="text-[#FDBA21]">Hotels & Resorts</span>
        </div>

        {/* Hero Banner */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FDBA21]/15 border border-[#FDBA21]/30 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-4">
            Curated Wilderness Accommodations
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Hotels & Resorts in Jawai — Verified Stays
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            From world-renowned Relais & Châteaux tented camps with private plunge pools to 16th-century royal Rajput heritage fortresses and authentic kopje glamping.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mx-auto mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#FDBA21] text-black font-bold shadow-[0_0_15px_rgba(232,164,85,0.35)]'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredHotels.map((hotel) => {
            const hotelWhatsApp = buildWhatsAppUrl({
              packageOrExperienceName: hotel.name,
              canonicalPath: `/jawai-hotels-resorts#${hotel.slug}`,
              customMessage: `Hi Ghoomosa, I am inquiring about room availability and pricing for *${hotel.name}* (${hotel.categoryLabel}) in Jawai. Please share seasonal rates and stay packages.`,
            });

            return (
              <div
                key={hotel.id}
                id={hotel.slug}
                className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all group duration-300"
              >
                <div>
                  {/* Image Card Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Top Badges */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-[#FDBA21] border border-[#FDBA21]/30">
                      {hotel.tag}
                    </span>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                      {hotel.rating}
                    </span>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-[#FDBA21]">location_on</span>
                        {hotel.location}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#FDBA21] uppercase tracking-wider block mb-1">
                      {hotel.categoryLabel}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FDBA21] transition-colors leading-snug">
                      {hotel.name}
                    </h2>
                    <p className="text-xs text-white/70 leading-relaxed mb-5">
                      {hotel.overview}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-5 text-xs text-white/80 border-t border-white/5 pt-4">
                      {hotel.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-sm text-[#FDBA21] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className="text-[11px] leading-tight text-white/85">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hotel.amenities.slice(0, 4).map((amenity, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-white/60 border border-white/5"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-white/5">
                  <div className="flex items-center justify-between py-2 text-[11px] font-mono text-white/60 mb-3">
                    <span>{hotel.distanceFromStation}</span>
                    <span className="text-[#FDBA21] font-semibold uppercase">Price on Request</span>
                  </div>

                  <a
                    href={hotelWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(37,211,102,0.25)]"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Check Room Availability</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Stay + Safari Packages */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FDBA21] mb-2 block">
              Complete Seamless Expedition
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
              Looking for Stay + Safari Combined Packages?
            </h3>
            <p className="text-xs md:text-sm text-white/70 max-w-xl">
              Book all-inclusive packages with private 4x4 open Gypsy safaris, local naturalist trackers, airport transfers, and full-board dining.
            </p>
          </div>
          <Link
            href="/jawai-tour-packages"
            className="shrink-0 px-8 py-4 rounded-full bg-gradient-to-r from-[#FDBA21] to-[#c98335] hover:from-[#FDBA21] hover:to-[#FDBA21] text-black font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(232,164,85,0.4)]"
          >
            Explore 10 Tour Packages →
          </Link>
        </div>
      </div>
    </div>
  );
}
