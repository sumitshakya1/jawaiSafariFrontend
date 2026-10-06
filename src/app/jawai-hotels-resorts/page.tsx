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
  }).sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return (a.displayOrder || 99) - (b.displayOrder || 99);
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
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C] transition-colors font-semibold">Home</Link>
          <span>/</span>
          <Link href="/jawai" className="hover:text-[#005B5C] transition-colors font-semibold">Jawai</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-bold">Hotels & Resorts</span>
        </div>

        {/* Hero Banner */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF8F6] border border-[#DDE7E5] text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
            Curated Wilderness Accommodations
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Hotels & Resorts in Jawai — Verified Stays
          </h1>
          <p className="text-sm md:text-base text-[#667085] leading-relaxed max-w-2xl mx-auto font-light">
            From world-renowned Relais & Châteaux tented camps with private plunge pools to 16th-century royal Rajput heritage fortresses and authentic kopje glamping.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-2.5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm max-w-3xl mx-auto mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                  : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
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
                className={`rounded-3xl bg-white border shadow-sm overflow-hidden flex flex-col justify-between transition-all group duration-300 ${
                  hotel.isFeatured
                    ? 'border-[#005B5C] ring-2 ring-[#005B5C]/15 shadow-md'
                    : 'border-[#DDE7E5] hover:border-[#0A7B75] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Image Card Header */}
                  <div className="relative h-64 w-full overflow-hidden bg-[#EEF8F6]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                      {hotel.isFeatured ? (
                        <span className="px-3 py-1 rounded-full bg-[#005B5C] text-[10px] font-mono uppercase tracking-wider text-[#FDBA21] font-bold shadow-sm border border-[#FDBA21]/30">
                          ★ Featured / {hotel.primaryBadge || hotel.tag}
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                          {hotel.tag}
                        </span>
                      )}
                    </div>

                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#005B5C] text-[11px] font-mono text-white font-semibold shadow-sm">
                      {hotel.rating}
                    </span>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-[#FDBA21]">location_on</span>
                        {hotel.location}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#005B5C] font-bold uppercase tracking-wider block mb-1">
                      {hotel.eyebrow || hotel.categoryLabel}
                    </span>
                    <h2 className="text-xl font-bold text-[#005B5C] mb-2 group-hover:text-[#0A7B75] transition-colors leading-snug">
                      {hotel.name}
                    </h2>

                    {/* Secondary Badges for Featured Properties */}
                    {hotel.secondaryBadges && hotel.secondaryBadges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {hotel.secondaryBadges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2 py-0.5 rounded-md bg-[#EEF8F6] text-[10px] font-mono text-[#005B5C] font-semibold border border-[#005B5C]/20"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-[#263238] font-light leading-relaxed mb-5">
                      {hotel.overview}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-5 text-xs text-[#263238] border-t border-[#DDE7E5] pt-4">
                      {hotel.keyFeatures.slice(0, hotel.isFeatured ? 8 : 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-sm text-[#0A7B75] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className="text-[11px] leading-tight text-[#263238]">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hotel.amenities.slice(0, 6).map((amenity, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#EEF8F6] text-[10px] font-mono text-[#005B5C] border border-[#DDE7E5]"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-[#DDE7E5]">
                  <div className="flex items-center justify-between py-2 text-[11px] font-mono text-[#667085] mb-3">
                    <span>{hotel.distanceFromStation}</span>
                    <span className="text-[#005B5C] font-bold uppercase">Price on Request</span>
                  </div>

                  {hotel.detailsUrl ? (
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <Link
                        href={hotel.detailsUrl}
                        className="flex-1 py-3 px-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm text-center"
                      >
                        <span>{hotel.primaryCtaText || 'View Resort Details'}</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                      <Link
                        href={hotel.availabilityUrl || `${hotel.detailsUrl}#availability`}
                        className="flex-1 py-3 px-4 rounded-full bg-[#EEF8F6] hover:bg-[#DDE7E5] text-[#005B5C] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border border-[#005B5C]/30 text-center"
                      >
                        <span>Check Availability</span>
                      </Link>
                    </div>
                  ) : (
                    <a
                      href={hotelWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      <span>Check Room Availability</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Stay + Safari Packages */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold mb-2 block">
              Complete Seamless Expedition
            </span>
            <h3 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C] mb-2">
              Looking for Stay + Safari Combined Packages?
            </h3>
            <p className="text-xs md:text-sm text-[#263238] font-light max-w-xl leading-relaxed">
              Book all-inclusive packages with private 4x4 open Gypsy safaris, local naturalist trackers, airport transfers, and full-board dining.
            </p>
          </div>
          <Link
            href="/jawai-tour-packages"
            className="shrink-0 px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-sm"
          >
            Explore 10 Tour Packages →
          </Link>
        </div>
      </div>
    </div>
  );
}

