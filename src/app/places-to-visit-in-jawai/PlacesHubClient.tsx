'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AttractionItem } from '@/data/attractions/types';
import { AttractionEnquiryModal } from '@/components/attraction/AttractionEnquiryModal';

interface PlacesHubClientProps {
  attractions: AttractionItem[];
  masterFaqs: Array<{ question: string; answer: string }>;
}

export function PlacesHubClient({ attractions, masterFaqs }: PlacesHubClientProps) {
  const [selectedDistance, setSelectedDistance] = useState<string>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter logic
  const filteredAttractions = attractions.filter((item) => {
    // Distance filter
    if (selectedDistance === 'within_15') {
      if (item.distance_mode !== 'fixed_range' || (item.distance_km_max && item.distance_km_max > 15)) {
        return false;
      }
    } else if (selectedDistance === '15_40') {
      if (
        item.distance_mode !== 'fixed_range' ||
        !item.distance_km_min ||
        item.distance_km_min < 15 ||
        item.distance_km_min > 40
      ) {
        return false;
      }
    } else if (selectedDistance === '40_70') {
      if (
        item.distance_mode !== 'fixed_range' ||
        !item.distance_km_min ||
        item.distance_km_min < 40
      ) {
        return false;
      }
    } else if (selectedDistance === 'varies') {
      if (item.distance_mode === 'fixed_range') return false;
    }

    // Theme filter
    if (selectedTheme !== 'all' && item.theme.toLowerCase() !== selectedTheme.toLowerCase()) {
      return false;
    }

    // Duration filter
    if (selectedDuration !== 'all' && item.duration_type !== selectedDuration) {
      return false;
    }

    return true;
  });

  const whatsappUrl =
    'https://wa.me/917300003101?text=' +
    encodeURIComponent(
      'Hi Ghoomosa, I am looking to plan a trip covering places to visit in Jawai and nearby attractions. Please share custom itinerary recommendations and stay packages.'
    );

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-36 pb-20 px-6 md:px-12 bg-[#003F40] overflow-hidden text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Places to Visit in Jawai"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003F40] via-transparent to-[#003F40]/80" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/jawai" className="hover:text-white">Jawai</Link>
            <span>/</span>
            <span className="text-[#FDBA21] font-semibold">Attractions & Places</span>
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF8F6]/20 border border-[#EEF8F6]/30 text-white text-xs font-mono uppercase tracking-widest mb-4">
            Jawai Regional Destination Guide
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-tight mb-5">
            Places to Visit in Jawai & Nearby Attractions
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Discover Jawai beyond the safari - wildlife, granite hills, village culture, spiritual sites, heritage excursions and scenic day trips, all planned from one destination hub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md border border-[#FDBA21]/30 flex items-center gap-2"
            >
              <span>Build My Jawai Itinerary</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Expert (+91 73000 03101)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. AEO QUICK ANSWER CALLOUT */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#005B5C]/30 shadow-lg">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-7 h-7 rounded-full bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center text-sm font-bold">
              i
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold">
              Destination Authority Summary
            </span>
          </div>
          <p className="text-sm md:text-base text-[#263238] leading-relaxed font-medium">
            Jawai is more than a leopard safari destination. Around Jawai Bandh, travellers can combine wildlife landscapes with local temples, Rabari culture, Ranakpur Jain Temple, Kumbhalgarh Fort, Parshuram Mahadev and other nature and heritage stops. Ghoomosa organises these by distance, theme and trip duration to help you build a complete itinerary.
          </p>
        </div>
      </section>

      {/* 3. DESTINATION OVERVIEW ESSAY (700-1,000 words original SEO copy) */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-8">
        <div className="space-y-5 text-sm md:text-base text-[#263238] leading-relaxed font-light">
          <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C] mb-4">
            Understanding the Jawai Destination Ecosystem
          </h2>
          <p>
            The Jawai landscape in western Rajasthan represents one of the world’s most distinctive wilderness and cultural crossroads. Anchored around the massive Jawai Bandh reservoir in Pali district, this prehistoric terrain is defined by billion-year-old monolithic granite formations, acacia thorn scrub, fertile agricultural valleys and traditional pastoral settlements. While celebrated globally as India’s foremost habitat for wild leopards thriving in peaceful coexistence alongside local communities, the region offers a captivating variety of heritage, spiritual and natural excursions that reward travellers who look beyond vehicle game drives.
          </p>
          <p>
            When planning a journey to Jawai, understanding geographic orientation and travel distances is vital. Jawai Bandh serves as the central geographic reference point. Within an immediate 15-kilometre perimeter lie the vast embankments of Jawai Dam, home to wintering migratory bird colonies and basking marsh crocodiles, as well as the active granite kopjes where leopards have denned for centuries. Close by, serene hilltop shrines like Kambeshwar Mahadev Temple and Abhinav Mahavir Dham near Sumerpur provide spiritual pauses framed by panoramic valley vistas.
          </p>
          <p>
            Extending outwards between 40 and 70 kilometres, the landscape transitions seamlessly from open scrubland into the dense forests and steep mountain passes of the Aravalli Range. Here, travellers can experience world-class architectural wonders, including the 15th-century Ranakpur Jain Temple, internationally acclaimed for its 1,444 uniquely hand-carved marble pillars, the intimate mountain waters of Ranakpur Dam, and the sacred cavern of Parshuram Mahadev. Further eastward rises the formidable UNESCO World Heritage bastion of Kumbhalgarh Fort, with its 36-kilometre stone ramparts and Mewar royal legacy.
          </p>
          <p>
            At Ghoomosa, we design Jawai itineraries that balance early-morning predator tracking with relaxed midday heritage exploration, respectful Rabari cultural interactions and sunset reservoir reflections. Whether your journey is a brief two-night wildlife getaway or an extended five-day southern Rajasthan circuit, the guide below organizes every key landmark by distance, category and trip duration so you can craft a voyage tailored precisely to your travel rhythm.
          </p>
        </div>
      </section>

      {/* 4. CROSS-LINK NOTICE: THINGS TO DO VS PLACES TO VISIT */}
      <section className="max-w-5xl mx-auto px-6 mb-10">
        <div className="p-6 rounded-2xl bg-[#EEF8F6] border border-[#005B5C]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
              Distinct Exploration Paths
            </span>
            <h3 className="text-base font-bold text-[#005B5C]">
              Looking for Activities & Experiences Instead of Landmark Destinations?
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Explore our dedicated Activities Guide for 4x4 rock crawling, dawn tracking, dam birding schedules, and private sundowners.
            </p>
          </div>
          <Link
            href="/things-to-do-in-jawai"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white text-xs font-mono uppercase font-bold tracking-wider transition-all shadow-sm"
          >
            Things to Do in Jawai →
          </Link>
        </div>
      </section>

      {/* 5. INTERACTIVE FILTERS */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <div className="p-6 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DDE7E5] pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold">
              Filter Places by Distance, Theme & Duration:
            </span>
            <span className="text-xs font-mono text-[#667085]">
              Showing {filteredAttractions.length} places
            </span>
          </div>

          <div className="space-y-3">
            {/* Distance Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-[#667085] w-24">Distance:</span>
              {[
                { id: 'all', label: 'All Distances' },
                { id: 'within_15', label: 'Within 15 km' },
                { id: '15_40', label: '15 - 40 km' },
                { id: '40_70', label: '40 - 70 km' },
                { id: 'varies', label: 'Varies / Landscape' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedDistance(btn.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                    selectedDistance === btn.id
                      ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                      : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Theme Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-[#667085] w-24">Theme:</span>
              {[
                { id: 'all', label: 'All Themes' },
                { id: 'wildlife', label: 'Wildlife' },
                { id: 'nature', label: 'Nature' },
                { id: 'heritage', label: 'Heritage' },
                { id: 'temple', label: 'Temples' },
                { id: 'culture', label: 'Culture' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedTheme(btn.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                    selectedTheme === btn.id
                      ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                      : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-[#667085] w-24">Duration:</span>
              {[
                { id: 'all', label: 'All Durations' },
                { id: 'short_visit', label: 'Short Stop (1-2 Hrs)' },
                { id: 'half_day', label: 'Half Day (3-5 Hrs)' },
                { id: 'full_day', label: 'Full Day Excursion' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedDuration(btn.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                    selectedDuration === btn.id
                      ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                      : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. ATTRACTIONS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attr) => (
            <div
              key={attr.id}
              className="rounded-3xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#0A7B75] hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-[#EEF8F6]">
                  <Image
                    src={attr.hero_image}
                    alt={attr.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[11px] font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                    {attr.category}
                  </span>
                  <span className="absolute bottom-4 left-4 text-[11px] font-mono text-white bg-[#005B5C] px-2.5 py-0.5 rounded-md font-semibold">
                    {attr.distance_display}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors leading-snug">
                    {attr.name}
                  </h3>
                  <p className="text-xs text-[#263238] font-light leading-relaxed line-clamp-3">
                    {attr.short_answer}
                  </p>

                  <div className="pt-2 border-t border-[#DDE7E5] space-y-1 text-[11px] font-mono text-[#667085]">
                    <div className="flex items-center justify-between">
                      <span>Visit Time:</span>
                      <span className="text-[#263238] font-semibold">{attr.visit_duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Road Drive:</span>
                      <span className="text-[#263238] font-semibold">{attr.travel_time_display}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/${attr.slug}`}
                  className="w-full py-3 rounded-full bg-white hover:bg-[#EEF8F6] text-[#005B5C] font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 border border-[#005B5C] transition-all"
                >
                  <span>Explore Place Guide</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MASTER FAQS SECTION */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
            Trip Planning Guidance
          </span>
          <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
            Frequently Asked Questions on Jawai Attractions
          </h2>
        </div>

        <div className="space-y-4">
          {masterFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm space-y-2"
            >
              <h3 className="text-base font-bold text-[#005B5C]">
                {faq.question}
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PRIMARY CTA SECTION */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-8 md:p-14 rounded-3xl bg-[#005B5C] text-white text-center shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest font-semibold">
              Bespoke Destination Crafting
            </span>
            <h2 className="text-2xl sm:text-4xl font-display-brand font-bold tracking-tight">
              Ready to Explore Jawai Beyond the Safari?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Tell us your travel dates, preferred pace, and group size. Our local naturalists and trip designers will prepare an integrated itinerary with private 4x4 safaris, heritage day trips, and luxury stays.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-[#005B5C] hover:bg-[#EEF8F6] font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-md"
              >
                Build My Jawai Itinerary
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Talk to a Jawai Specialist (+91 73000 03101)</span>
              </a>
            </div>

            <div className="pt-4 text-[11px] font-mono text-white/75">
              Trip planning & stay consultation by Ghoomosa — &ldquo;Trips That Become Stories&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE MODAL */}
      <AttractionEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attractionName="Places to Visit in Jawai"
        attractionId="places-hub"
      />
    </div>
  );
}
