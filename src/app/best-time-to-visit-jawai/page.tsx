'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

interface SeasonData {
  id: string;
  name: string;
  months: string;
  badge: string;
  dayTemp: string;
  nightTemp: string;
  sightingRating: string;
  birdingRating: string;
  crowdLevel: string;
  image: string;
  summary: string;
  highlights: string[];
  whatToWear: string[];
}

const SEASONS: SeasonData[] = [
  {
    id: 'winter',
    name: 'Winter Season (Peak Explorer)',
    months: 'October to March',
    badge: 'Peak Safari Season',
    dayTemp: '20°C — 27°C',
    nightTemp: '7°C — 14°C (Crisp)',
    sightingRating: '★★★★★ (Exceptional - Basking Leopards)',
    birdingRating: '★★★★★ (Peak Migratory Flamingos & Cranes)',
    crowdLevel: 'Popular / Advance Booking Required',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    summary:
      'The golden season of Jawai. Crisp sunny mornings and chilly evenings encourage leopards to sunbathe for hours on sun-warmed granite rocks. Thousands of migratory birds create spectacular pink horizons at Jawai Dam.',
    highlights: [
      'Leopards bask openly on granite boulders from dawn until mid-morning',
      'Over 150 migratory avian species including Greater Flamingos, Demoiselle Cranes, and Pelicans at Jawai Dam',
      'Pleasant outdoor weather for technical rock climbing, bush tea, and village walks',
      'Deep, crystal-clear night skies for stargazing and astrophotography',
    ],
    whatToWear: [
      'Warm fleece jacket or windbreaker for open 05:45 AM morning safaris',
      'Woolen cap and gloves for December and January drives',
      'Layered cottons for mild afternoons',
    ],
  },
  {
    id: 'summer',
    name: 'Summer Season (High Wildlife Activity)',
    months: 'April to June',
    badge: 'High Predator Visibility',
    dayTemp: '34°C — 42°C',
    nightTemp: '22°C — 28°C',
    sightingRating: '★★★★★ (Predictable at Waterholes)',
    birdingRating: '★★★☆☆ (Resident Species Only)',
    crowdLevel: 'Low / Private Wilderness Tracks',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    summary:
      'With dry vegetation and limited natural springs, wildlife movement becomes exceptionally predictable. Leopards, hyenas, and jackals concentrate around shade caves and waterholes, creating prime viewing for serious wildlife photographers.',
    highlights: [
      'Predators stay close to natural springs and cave water pools',
      'Uncrowded tracks with virtually zero vehicle congestion',
      'Stunning crimson dust sunsets and golden hour photography light',
      'Marsh crocodiles actively basking along reservoir sandbanks',
    ],
    whatToWear: [
      'Breathable, lightweight linen or cotton clothing (khaki/tan shades)',
      'UV polarized sunglasses and wide-brim sun hat',
      'Sunscreen and high-electrolyte hydration bottles',
    ],
  },
  {
    id: 'monsoon',
    name: 'Monsoon Season (Emerald Wilderness)',
    months: 'July to September',
    badge: 'Lush Greenery & Full Dam',
    dayTemp: '28°C — 33°C',
    nightTemp: '20°C — 24°C',
    sightingRating: '★★★☆☆ (Lush Foliage / Scenic)',
    birdingRating: '★★★★☆ (Resident Breeding Birds)',
    crowdLevel: 'Quiet / Romantic Getaways',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    summary:
      'The arid granite hills transform into vibrant emerald green landscapes with rushing waterfalls and overflowing dam gates. Ideal for slow luxury travelers and couples wanting quiet romantic wilderness.',
    highlights: [
      'Spectacular green transformation of ancient Aravalli boulder kopjes',
      'High water levels and dramatic dam spillway vistas',
      'Serene luxury glamping with rain-washed wilderness air',
      'Resident bird breeding activity in lush scrublands',
    ],
    whatToWear: [
      'Quick-dry safari trousers and waterproof light jacket',
      'Sturdy closed shoes with rubber grip for damp rock trails',
      'Waterproof camera bag covers',
    ],
  },
];

export default function BestTimeToVisitPage() {
  const [activeSeason, setActiveSeason] = useState<string>('winter');

  const currentSeason = SEASONS.find((s) => s.id === activeSeason) || SEASONS[0];

  const seasonalWhatsApp = buildWhatsAppUrl({
    packageOrExperienceName: `Seasonal Planning Enquiry (${currentSeason.name})`,
    canonicalPath: '/best-time-to-visit-jawai',
    customMessage: `Hi Ghoomosa, I am looking to travel to Jawai during ${currentSeason.months}. Please share seasonal safari availability, stay recommendations, and quotation.`,
  });

  return (
    <div className="w-full bg-[#07090e] text-[#e1e2ec] min-h-screen pb-32">
      {/* 1. Custom Hero Banner */}
      <section className="relative w-full pt-36 pb-20 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-black/90 via-[#07090e] to-[#07090e] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2000&q=85"
            alt="Best Time to Visit Jawai"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/80" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jawai" className="hover:text-white">Jawai</Link>
            <span>/</span>
            <span className="text-[#e8a455]">Seasonal Planning</span>
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-4">
            Climate & Wildlife Calendar
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            Best Time to Visit Jawai: Season-by-Season Guide
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Compare weather patterns, animal behavior, and migratory bird arrival dates across the year to choose the perfect season for your expedition.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={seasonalWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Check Seasonal Dates on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Season Matrix */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16">
        {/* Season Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SEASONS.map((season) => (
            <button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`px-6 py-3.5 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeSeason === season.id
                  ? 'bg-gradient-to-r from-[#e8a455] to-[#ffc27e] text-black font-bold shadow-[0_0_20px_rgba(232,164,85,0.4)] scale-105'
                  : 'bg-white/[0.04] text-white/70 hover:text-white border border-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {season.id === 'winter' ? 'ac_unit' : season.id === 'summer' ? 'wb_sunny' : 'water_drop'}
              </span>
              <span>{season.name.split(' (')[0]}</span>
              <span className="text-[10px] opacity-75 hidden sm:inline">({season.months})</span>
            </button>
          ))}
        </div>

        {/* Selected Season Card */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 overflow-hidden shadow-2xl mb-16">
          <div className="relative h-72 md:h-96 w-full">
            <Image
              src={currentSeason.image}
              alt={currentSeason.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-black/40 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#e8a455]/40 text-xs font-mono text-[#e8a455] uppercase tracking-wider">
              {currentSeason.badge} • {currentSeason.months}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white">
                  {currentSeason.name}
                </h2>
                <p className="text-xs md:text-sm text-white/80 max-w-2xl mt-1">
                  {currentSeason.summary}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12">
            {/* Climate & Telemetry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pb-8 border-b border-white/10">
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[10px] font-mono text-white/50 uppercase block mb-1">Daytime Temp</span>
                <span className="text-sm font-bold text-white">{currentSeason.dayTemp}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[10px] font-mono text-white/50 uppercase block mb-1">Night Temp</span>
                <span className="text-sm font-bold text-[#e8a455]">{currentSeason.nightTemp}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[10px] font-mono text-white/50 uppercase block mb-1">Leopard Sighting</span>
                <span className="text-xs font-bold text-[#25D366]">{currentSeason.sightingRating.split(' (')[0]}</span>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[10px] font-mono text-white/50 uppercase block mb-1">Birding Density</span>
                <span className="text-xs font-bold text-[#e8a455]">{currentSeason.birdingRating.split(' (')[0]}</span>
              </div>
            </div>

            {/* Highlights & Clothing Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8a455]">verified</span>
                  <span>Why Visit in {currentSeason.months}?</span>
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-white/80 font-light">
                  {currentSeason.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#e8a455]">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e8a455]">checkroom</span>
                  <span>Recommended Packing & Clothing</span>
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-white/80 font-light">
                  {currentSeason.whatToWear.map((wear, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#e8a455]">•</span>
                      <span>{wear}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
