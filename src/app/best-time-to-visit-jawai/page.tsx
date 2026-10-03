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
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      {/* 1. Custom Hero Banner */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E5] p-8 md:p-16 bg-[#003F40]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2000&q=85"
              alt="Best Time to Visit Jawai"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/jawai" className="hover:text-white">Jawai</Link>
              <span>/</span>
              <span className="text-[#FDBA21]">Seasonal Planning</span>
            </div>

            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
              Climate & Wildlife Calendar
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-tight mb-6">
              Best Time to Visit Jawai: Season-by-Season Guide
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed font-light mb-8">
              Compare weather patterns, animal behavior, and migratory bird arrival dates across the year to choose the perfect season for your expedition.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={seasonalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Check Seasonal Dates on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Season Matrix */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Season Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SEASONS.map((season) => (
            <button
              key={season.id}
              onClick={() => setActiveSeason(season.id)}
              className={`px-6 py-3.5 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeSeason === season.id
                  ? 'bg-[#005B5C] text-white font-bold border border-[#005B5C] shadow-sm'
                  : 'bg-white text-[#263238] hover:text-[#005B5C] border border-[#DDE7E5] hover:border-[#0A7B75]'
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
        <div className="rounded-3xl bg-white border border-[#DDE7E5] overflow-hidden shadow-sm mb-16">
          <div className="relative h-72 md:h-96 w-full bg-[#EEF8F6]">
            <Image
              src={currentSeason.image}
              alt={currentSeason.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-black/30 to-transparent" />
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/95 text-[#005B5C] font-bold text-xs font-mono uppercase tracking-wider shadow-sm">
              {currentSeason.badge} • {currentSeason.months}
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-display-brand font-bold text-white">
                  {currentSeason.name}
                </h2>
                <p className="text-xs md:text-sm text-white/90 max-w-2xl mt-1 font-light">
                  {currentSeason.summary}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-12">
            {/* Climate & Telemetry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 pb-8 border-b border-[#DDE7E5]">
              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5]">
                <span className="text-[10px] font-mono text-[#667085] uppercase block mb-1">Daytime Temp</span>
                <span className="text-sm font-bold text-[#263238]">{currentSeason.dayTemp}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5]">
                <span className="text-[10px] font-mono text-[#667085] uppercase block mb-1">Night Temp</span>
                <span className="text-sm font-bold text-[#005B5C]">{currentSeason.nightTemp}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#EEF8F6] border border-[#005B5C]/20">
                <span className="text-[10px] font-mono text-[#005B5C] uppercase block mb-1 font-semibold">Leopard Sighting</span>
                <span className="text-xs font-bold text-[#005B5C]">{currentSeason.sightingRating.split(' (')[0]}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5]">
                <span className="text-[10px] font-mono text-[#667085] uppercase block mb-1">Birding Density</span>
                <span className="text-xs font-bold text-[#263238]">{currentSeason.birdingRating.split(' (')[0]}</span>
              </div>
            </div>

            {/* Highlights & Clothing Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#005B5C] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#005B5C]">verified</span>
                  <span>Why Visit in {currentSeason.months}?</span>
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-[#263238] font-light">
                  {currentSeason.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#005B5C] font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#005B5C] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#005B5C]">checkroom</span>
                  <span>Recommended Packing & Clothing</span>
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-[#263238] font-light">
                  {currentSeason.whatToWear.map((wear, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#005B5C] font-bold">•</span>
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
