'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

interface RouteOption {
  id: string;
  city: string;
  distance: string;
  time: string;
  highway: string;
  roadQuality: string;
  bestFor: string;
  airport: string;
  cabEstimate: string;
  description: string;
  steps: string[];
}

const ROUTES: RouteOption[] = [
  {
    id: 'udaipur',
    city: 'From Udaipur',
    distance: '140 km',
    time: '2.5 — 3 Hours',
    highway: 'NH 27 (4-Lane Smooth Tollway)',
    roadQuality: 'Excellent 4-lane national highway through scenic Aravalli passes',
    bestFor: 'Flight travellers arriving at Maharana Pratap Airport (UDR)',
    airport: 'Udaipur Airport (UDR) — 140 km',
    cabEstimate: 'Innova Crysta / Ertiga / Sedan private transfers available',
    description:
      'The most popular and picturesque gateway to Jawai. Departing Udaipur, take NH27 westbound via Gogunda and Pindwara before taking the Nana-Bera exit into the core Jawai boulder region.',
    steps: [
      '00 km: Depart Udaipur / Maharana Pratap Airport (UDR)',
      '35 km: Pass scenic Gogunda mountain toll pass',
      '95 km: Pindwara junction heading north towards Nana',
      '140 km: Arrive at Jawai / Bera granite safari region',
    ],
  },
  {
    id: 'jodhpur',
    city: 'From Jodhpur',
    distance: '150 km',
    time: '3 — 3.5 Hours',
    highway: 'NH 62 via Pali & Sumerpur',
    roadQuality: 'Smooth state & national highway through Marwar countryside',
    bestFor: 'Heritage travellers connecting Mehrangarh Fort with Jawai',
    airport: 'Jodhpur Airport (JDH) — 150 km',
    cabEstimate: 'Direct private chauffeur pickup from Jodhpur hotels/airport',
    description:
      'Connecting the Blue City of Jodhpur with Jawai. Drive south along NH62 through Pali and Sanderao to Sumerpur / Jawai Bandh.',
    steps: [
      '00 km: Depart Jodhpur City / JDH Airport',
      '70 km: Pass industrial heritage town of Pali',
      '125 km: Sumerpur / Sheoganj commercial hub',
      '150 km: Enter Jawai Dam & Leopard sanctuary perimeter',
    ],
  },
  {
    id: 'ahmedabad',
    city: 'From Ahmedabad',
    distance: '290 km',
    time: '5 — 5.5 Hours',
    highway: 'NH 27 via Mehsana, Palanpur & Abu Road',
    roadQuality: 'High-speed 6-lane & 4-lane expressway and highway',
    bestFor: 'Weekend road trips from Gujarat and NRI arrivals via AMD Airport',
    airport: 'Sardar Vallabhbhai Patel Airport (AMD) — 290 km',
    cabEstimate: 'Convenient weekend return taxi packages available',
    description:
      'A seamless weekend road trip from Gujarat. Travel north via Mehsana and Abu Road before ascending the scenic Rajasthan border hills into Jawai.',
    steps: [
      '00 km: Depart Ahmedabad via SG Highway / Gandhinagar',
      '140 km: Pass Palanpur bypass',
      '210 km: Abu Road foothills (gateway to Mount Abu)',
      '290 km: Arrive at Jawai Safari Camp',
    ],
  },
  {
    id: 'train',
    city: 'By Train (Falna / Jawai Bandh)',
    distance: '15 — 35 km from stations',
    time: '20 — 40 mins station transfer',
    highway: 'Direct Rail Corridor (Delhi — Mumbai / Ahmedabad)',
    roadQuality: 'Quick asphalt village link from railway junction',
    bestFor: 'Vande Bharat / Ashram Express / Rajdhani train passengers',
    airport: 'N/A (Falna Junction FA or Jawai Bandh JWB)',
    cabEstimate: 'Station pickup & drop included in flagship packages',
    description:
      'Falna Junction (FA) is a major Western Railway stop served by over 30 express trains daily connecting Delhi, Mumbai, Jaipur, and Ahmedabad. Jawai Bandh (JWB) station is just 15 km from major lodges.',
    steps: [
      'Falna Junction (FA): 35 km (approx. 40 mins drive to lodges)',
      'Jawai Bandh Station (JWB): 15 km (approx. 20 mins drive to lodges)',
      'Mori Bera Station (MOI): 8 km (Local passenger trains)',
    ],
  },
];

export default function HowToReachPage() {
  const [activeRoute, setActiveRoute] = useState<string>('udaipur');

  const currentRoute = ROUTES.find((r) => r.id === activeRoute) || ROUTES[0];

  const transferWhatsApp = buildWhatsAppUrl({
    packageOrExperienceName: `Transfer & Cab Enquiry (${currentRoute.city})`,
    canonicalPath: '/how-to-reach-jawai',
    customMessage: `Hi Ghoomosa, I am looking to book a private taxi transfer to Jawai ${currentRoute.city}. Please share vehicle options (Innova Crysta/Sedan), availability, and quote.`,
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pb-32">
      {/* 1. Custom Hero Banner */}
      <section className="relative w-full pt-36 pb-20 px-6 md:px-12 border-b border-white/10 bg-gradient-to-b from-black/90 via-[#07090e] to-[#07090e] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
            alt="How to Reach Jawai"
            fill
            className="object-cover opacity-25"
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
            <span className="text-[#FDBA21]">Route & Transport Guide</span>
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/15 border border-[#FDBA21]/30 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-4">
            Travel Logistics & Transfers
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            How to Reach Jawai by Road, Rail & Air
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Centrally positioned in Southern Rajasthan between Udaipur and Jodhpur, Jawai is seamlessly connected by multi-lane national highways, commercial airports, and direct rail lines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={transferWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105"
            >
              <span className="material-symbols-outlined text-base">local_taxi</span>
              <span>Book Airport / City Transfer on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Route Selector & Matrix */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16">
        {/* Origin City Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {ROUTES.map((route) => (
            <button
              key={route.id}
              onClick={() => setActiveRoute(route.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeRoute === route.id
                  ? 'bg-gradient-to-r from-[#FDBA21] to-[#c98335] text-black font-bold border border-[#FDBA21]/80 shadow-[0_0_20px_rgba(232,164,85,0.4)] scale-105'
                  : 'bg-white/[0.04] text-white/70 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {route.id === 'train' ? 'train' : 'directions_car'}
              </span>
              <span>{route.city}</span>
            </button>
          ))}
        </div>

        {/* Selected Route Detailed Card */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/15 p-6 md:p-12 shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-white/10 gap-6">
            <div>
              <span className="text-xs font-mono text-[#FDBA21] uppercase tracking-widest block mb-1">
                Selected Route
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white">
                {currentRoute.city} to Jawai
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-white border border-white/10 text-center">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Distance</span>
                <span className="text-sm font-bold text-white">{currentRoute.distance}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-white/10 text-center">
                <span className="text-[10px] font-mono uppercase text-white/50 block">Drive Time</span>
                <span className="text-sm font-bold text-[#FDBA21]">{currentRoute.time}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FDBA21]">route</span>
                  <span>Route Overview & Highway</span>
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {currentRoute.description}
                </p>
                <div className="mt-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/70">
                  <strong className="text-white">Highway:</strong> {currentRoute.highway}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FDBA21]">info</span>
                  <span>Ideal For</span>
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">{currentRoute.bestFor}</p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#25D366]">local_taxi</span>
                  <span>Private Cab Transfer Service</span>
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">{currentRoute.cabEstimate}</p>
                <a
                  href={transferWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-semibold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Enquire Transfer Price</span>
                </a>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FDBA21]">timeline</span>
                  <span>Key Milestones & Turn-by-Turn</span>
                </h3>
                <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                  {currentRoute.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 relative pl-7">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FDBA21] absolute left-[7px] top-1.5 ring-4 ring-black" />
                      <span className="text-xs text-white/80 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/50">
                Pickups can be arranged from airports, railway stations, or hotel doorsteps across Rajasthan & Gujarat.
              </div>
            </div>
          </div>
        </div>

        {/* 3. Train Junctions & Flights Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <span className="material-symbols-outlined text-3xl text-[#FDBA21] mb-3">flight</span>
            <h3 className="text-xl font-bold text-white mb-3">Commercial Airports Near Jawai</h3>
            <ul className="space-y-3 text-xs md:text-sm text-white/80 font-light">
              <li>
                <strong className="text-white">1. Udaipur Airport (UDR):</strong> 140 km | 2.5 hrs drive via NH27 (Best connectivity from Mumbai, Delhi, Bengaluru).
              </li>
              <li>
                <strong className="text-white">2. Jodhpur Airport (JDH):</strong> 150 km | 3 hrs drive via NH62.
              </li>
              <li>
                <strong className="text-white">3. Ahmedabad Airport (AMD):</strong> 290 km | 5 hrs drive (International terminal).
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <span className="material-symbols-outlined text-3xl text-[#FDBA21] mb-3">train</span>
            <h3 className="text-xl font-bold text-white mb-3">Nearest Railway Stations</h3>
            <ul className="space-y-3 text-xs md:text-sm text-white/80 font-light">
              <li>
                <strong className="text-white">1. Jawai Bandh Station (JWB):</strong> 15 km from core safari camps (Local & express stops).
              </li>
              <li>
                <strong className="text-white">2. Falna Junction (FA):</strong> 35 km | Major junction with daily Vande Bharat, Rajdhani, and Superfast express trains.
              </li>
              <li>
                <strong className="text-white">3. Abu Road Station (ABR):</strong> 95 km (Southern rail corridor).
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
