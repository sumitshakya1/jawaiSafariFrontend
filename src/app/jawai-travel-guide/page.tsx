import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CURATED_MEDIA } from '@/constants/curatedMedia';
import { FLAGSHIP_PACKAGES } from '@/constants/packagesData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Jawai Travel Guide - Plan Your Complete Trip | Ghoomosa',
  description:
    'The complete Jawai planning handbook covering granite kopje geography, wildlife protocols, packing gear, 2N/3D itineraries and booking guidance.',
};

export default function JawaiTravelGuidePage() {
  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Expedition Handbook Planning',
    canonicalPath: '/jawai-travel-guide',
    customMessage:
      'Hi Ghoomosa, I am reading the Jawai Travel Guide handbook on your website. Please help me plan my customized expedition with safari and stay.',
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      {/* 1. Handbook Hero */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-[#DDE7E5] p-8 md:p-16 bg-[#003F40]">
          <div className="absolute inset-0 -z-10">
            <Image
              src={CURATED_MEDIA.leopard.hero}
              alt="Jawai Travel Guide"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest font-semibold">
                The Definitive Expedition Handbook
              </span>
              <span className="text-xs font-mono text-white/70 tracking-widest hidden sm:inline-block">
                25.10° N, 73.15° E • PALI, RAJASTHAN
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-[1.15] mb-6">
              Jawai Travel Guide: The Complete Wilderness & Cultural Handbook
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed font-light mb-8">
              Nestled where the ancient Aravalli mountains meet the Thar desert scrub, Jawai represents a living conservation marvel where wild cave-dwelling leopards and Rabari pastoralists share ancient granite kopjes in mutual harmony.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Ask a Trip Expert on WhatsApp</span>
              </a>
              <Link
                href="/jawai-tour-packages"
                className="px-6 py-3.5 rounded-full bg-white text-[#005B5C] font-semibold text-xs font-mono uppercase tracking-widest border border-white hover:bg-[#EEF8F6] transition-all"
              >
                View Tour Packages
              </Link>
            </div>

            {/* Expedition Telemetry Stats Bar */}
            <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] block font-semibold">Terrain</span>
                <span className="text-xs font-semibold text-white">Monolithic Granite Kopjes</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] block font-semibold">Apex Predator</span>
                <span className="text-xs font-semibold text-white">Indian Leopard (Panthera pardus)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] block font-semibold">Best Window</span>
                <span className="text-xs font-semibold text-white">Oct — Apr (Winter Flamingos)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] block font-semibold">Airport Gateway</span>
                <span className="text-xs font-semibold text-white">Udaipur UDR (140 km)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Handbook Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Handbook Articles */}
          <div className="lg:col-span-2 space-y-12">
            {/* Chapter 1: Landscape & Ecology */}
            <article className="rounded-3xl bg-white border border-[#DDE7E5] overflow-hidden shadow-sm hover:border-[#0A7B75] transition-all">
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#EEF8F6]">
                <Image
                  src={CURATED_MEDIA.leopard.gallery[0].url}
                  alt="Jawai Granite Kopjes"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#005B5C] border border-[#DDE7E5] text-[11px] font-mono font-bold shadow-sm">
                  CHAPTER 01 • GEOGRAPHY & ECOLOGY
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-4">
                  Why Jawai is Unique in World Wildlife
                </h2>
                <p className="text-sm md:text-base text-[#263238] leading-relaxed font-light mb-4">
                  Unlike fenced national parks where predators are confined by boundaries, Jawai is an open wilderness where leopards roam freely among billion-year-old volcanic granite boulders. The caves inside these massive kopjes provide natural thermal shelter during daytime heat.
                </p>
                <div className="p-5 rounded-2xl bg-[#EEF8F6] border border-[#DDE7E5] text-xs md:text-sm text-[#263238] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#005B5C] font-bold">✔</span>
                    <span>Zero recorded human-wildlife conflict for over 150 years.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#005B5C] font-bold">✔</span>
                    <span>Rabari shepherds revere leopards as sacred guardians of their deity.</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Chapter 2: Selecting Duration */}
            <article className="rounded-3xl bg-white border border-[#DDE7E5] overflow-hidden shadow-sm hover:border-[#0A7B75] transition-all">
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#EEF8F6]">
                <Image
                  src={CURATED_MEDIA.dam.gallery[0].url}
                  alt="Jawai Dam Panorama"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#005B5C] border border-[#DDE7E5] text-[11px] font-mono font-bold shadow-sm">
                  CHAPTER 02 • ITINERARY LOGIC
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-4">
                  Selecting the Right Itinerary Duration
                </h2>
                <div className="space-y-4 text-xs md:text-sm text-[#263238] font-light">
                  <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5]">
                    <strong className="text-[#005B5C] block mb-1 font-bold">1 Night / 2 Days (The Weekend Escape)</strong>
                    Best for travelers with tight schedules from Udaipur or Jodhpur. Includes 1-2 prime golden-hour game tracking sessions.
                  </div>
                  <div className="p-5 rounded-2xl bg-[#EEF8F6] border border-[#005B5C]/20">
                    <strong className="text-[#005B5C] block mb-1 font-bold">2 Nights / 3 Days (The Balanced Explorer — Recommended)</strong>
                    Covers morning and evening leopard tracking, Jawai Dam flamingos, crocodile spotting, and technical granite rock drives.
                  </div>
                  <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5]">
                    <strong className="text-[#005B5C] block mb-1 font-bold">3 Nights / 4 Days (The Slow Wilderness Immersion)</strong>
                    Unrushed slow travel with 4 game drives, Rabari cultural village walks, Devgiri rock temple visits, and luxury wellness.
                  </div>
                </div>
              </div>
            </article>

            {/* Chapter 3: Packing & Gear Checklist */}
            <article className="rounded-3xl bg-white border border-[#DDE7E5] p-6 md:p-8 shadow-sm hover:border-[#0A7B75] transition-all">
              <span className="text-xs font-mono text-[#005B5C] uppercase tracking-widest block mb-2 font-bold">
                CHAPTER 03 • GEAR & APPAREL
              </span>
              <h2 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-6">
                Essential Packing Checklist for Jawai
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5] space-y-2">
                  <span className="text-xs font-mono text-[#005B5C] font-bold block uppercase tracking-wider">Clothing & Footwear</span>
                  <ul className="text-xs text-[#263238] space-y-1.5 font-light">
                    <li>• Neutral earth tones (khaki, tan, olive)</li>
                    <li>• Windbreaker/Fleece for dawn safari breezes</li>
                    <li>• Closed shoes with rubber grip for granite kopjes</li>
                    <li>• UV sunglasses and wide-brim sun hat</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5] space-y-2">
                  <span className="text-xs font-mono text-[#005B5C] font-bold block uppercase tracking-wider">Optics & Photography</span>
                  <ul className="text-xs text-[#263238] space-y-1.5 font-light">
                    <li>• Telephoto zoom (70-200mm / 100-400mm / 200-600mm)</li>
                    <li>• Binoculars (8x42 or 10x42 magnification)</li>
                    <li>• Dust covers & lens cleaning blower</li>
                    <li>• Extra camera batteries (cold morning air drains power)</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-28 p-6 md:p-8 rounded-3xl bg-white border border-[#DDE7E5] space-y-6 shadow-sm">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#005B5C] block mb-1 font-bold">
                  Expedition Support
                </span>
                <h3 className="text-xl font-display-brand font-bold text-[#005B5C]">Plan Your Jawai Trip</h3>
                <p className="text-xs text-[#667085] mt-1 font-light">
                  Dedicated safari coordinator on call for dates & customized quotations.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE7E5] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Phone / WhatsApp</span>
                  <span className="font-mono text-[#005B5C] font-bold">+91 73000 03101</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#667085]">Pricing</span>
                  <span className="font-mono text-[#263238] font-semibold">Price on Request</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href="/jawai-safari-booking"
                className="w-full py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Book Safari Enquiry</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>

              <div className="pt-4 border-t border-[#DDE7E5]">
                <span className="text-[11px] text-[#667085] font-semibold block mb-3 uppercase tracking-wider font-mono">Explore Key Guides:</span>
                <div className="flex flex-col gap-2.5 text-xs font-mono text-[#005B5C]">
                  <Link href="/best-time-to-visit-jawai" className="hover:text-[#0A7B75] hover:underline transition-colors">
                    → Best Time to Visit (Seasons)
                  </Link>
                  <Link href="/how-to-reach-jawai" className="hover:text-[#0A7B75] hover:underline transition-colors">
                    → How to Reach (Route Finder)
                  </Link>
                  <Link href="/things-to-do-in-jawai" className="hover:text-[#0A7B75] hover:underline transition-colors">
                    → Things to Do in Jawai
                  </Link>
                  <Link href="/responsible-travel" className="hover:text-[#0A7B75] hover:underline transition-colors">
                    → 12 Golden Principles
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* 3. Featured Packages Section */}
        <section className="mt-20 pt-12 border-t border-[#DDE7E5]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] block mb-1 font-bold">
                Curated Expeditions
              </span>
              <h3 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
                Featured Flagship Packages
              </h3>
            </div>
            <Link
              href="/jawai-tour-packages"
              className="text-xs font-mono uppercase tracking-wider text-[#005B5C] hover:text-[#0A7B75] font-semibold inline-flex items-center gap-1"
            >
              <span>View All 10 Packages</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLAGSHIP_PACKAGES.slice(0, 3).map((pkg) => (
              <Link
                key={pkg.id}
                href={`/jawai-tour-packages/${pkg.slug}`}
                className="rounded-2xl bg-white border border-[#DDE7E5] overflow-hidden flex flex-col justify-between hover:border-[#0A7B75] hover:shadow-md transition-all group"
              >
                <div className="relative h-56 w-full bg-[#EEF8F6]">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#005B5C] font-bold text-[10px] font-mono shadow-sm">
                    {pkg.durationShort}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#667085] block mb-1">ID: {pkg.id}</span>
                    <h4 className="text-lg font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors mb-2">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-[#263238] font-light line-clamp-2 leading-relaxed mb-4">{pkg.overview}</p>
                  </div>
                  <span className="text-xs font-mono uppercase text-[#005B5C] font-semibold flex items-center gap-1">
                    <span>View Itinerary</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
