'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AttractionItem } from '@/data/attractions/types';
import { AttractionEnquiryModal } from './AttractionEnquiryModal';
import {
  trackAttractionView,
  trackNearbyClick,
  trackAttractionWhatsAppClick,
  trackAttractionHotelClick,
} from '@/lib/analytics';

interface AttractionPageTemplateProps {
  attraction: AttractionItem;
}

export function AttractionPageTemplate({ attraction }: AttractionPageTemplateProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = urlParams.get(key);
        if (val) utm[key] = val;
      });
      setUtmParams(utm);

      trackAttractionView({
        attraction_id: attraction.id,
        page_url: window.location.href,
        landing_url: window.location.href,
        utm,
      });
    }
  }, [attraction.id]);

  const buildWhatsAppUrl = (ctaPosition: string) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : attraction.canonical_url;
    const source = utmParams['utm_source'] || 'website_direct';
    const msg = `Hi Ghoomosa, I want to plan a Jawai trip including ${attraction.name}.
Travel date:
Guests: 2
Pickup city: Udaipur / Jodhpur
Please share the best itinerary and package options.
Page: ${pageUrl}
Source: ${source}`;

    return `https://wa.me/917300003101?text=${encodeURIComponent(msg)}`;
  };

  const featuredProperties = [
    {
      id: 'sujan-jawai',
      name: 'SUJAN JAWAI',
      tag: 'Ultra-Luxury Tented Camp',
      image: '/images/resorts/sujan-jawai/sujan-jawai-luxury-safari-camp.webp',
      url: '/sujan-jawai',
      desc: 'Exclusive 10-tent conservation retreat with private pool suites and expert-guided wilderness drives.',
    },
    {
      id: 'j-wild-resort-jawai',
      name: 'J Wild Resort Jawai',
      tag: 'Private Pool Villas',
      image: '/images/resorts/j-wild/j-wild-resort-jawai.webp',
      url: '/j-wild-resort-jawai',
      desc: '11 private pool villas with mountain views and easy access to boulder safari kopjes.',
    },
    {
      id: 'bijapur-lodge-jawai',
      name: 'Bijapur Lodge Jawai',
      tag: 'Boutique Safari Lodge',
      image: '/images/resorts/bijapur-lodge/bijapur-lodge-jawai.webp',
      url: '/bijapur-lodge-jawai',
      desc: '6 intimate suites (~550 sq. ft.) with organic farm-to-table dining and swimming pool.',
    },
    {
      id: 'jawai-pugmark-safari-lodge',
      name: 'Jawai Pugmark Safari Lodge',
      tag: 'Cottages & Luxury Tents',
      image: '/images/resorts/jawai-pugmark/jawai-pugmark-safari-lodge.webp',
      url: '/jawai-pugmark-safari-lodge',
      desc: 'Nature-focused stay in Sena offering cottages, luxury tents, swimming pool, and high tea.',
    },
  ];

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-12 bg-[#003F40] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={attraction.hero_image}
            alt={attraction.name}
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003F40] via-transparent to-[#003F40]/80" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/70 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/places-to-visit-in-jawai" className="hover:text-white transition-colors">
              Places to Visit in Jawai
            </Link>
            <span>/</span>
            <span className="text-[#FDBA21] font-semibold">{attraction.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF8F6]/20 border border-[#EEF8F6]/30 text-white text-xs font-mono uppercase tracking-widest mb-4">
            <span>{attraction.category}</span>
            <span>•</span>
            <span className="text-[#FDBA21] font-semibold">{attraction.distance_display}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-white tracking-tight leading-tight mb-5">
            {attraction.h1}
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            {attraction.seo_description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md border border-[#FDBA21]/30 flex items-center gap-2"
            >
              <span>Plan My Jawai Trip</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            <a
              href={buildWhatsAppUrl('hero_button')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackAttractionWhatsAppClick({
                  attraction_id: attraction.id,
                  CTA_position: 'hero_button',
                  UTM: utmParams,
                })
              }
              className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Expert (+91 73000 03101)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER SECTION (AEO Block: 40-70 words) */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#005B5C]/30 shadow-lg">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-7 h-7 rounded-full bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center text-sm font-bold">
              i
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold">
              Quick Answer • Verified Summary
            </span>
          </div>
          <p className="text-sm md:text-base text-[#263238] leading-relaxed font-medium">
            {attraction.short_answer}
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* 3. AT-A-GLANCE TABLE */}
        <section>
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Logistics & Visit Parameters
            </span>
            <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
              {attraction.name} at a Glance
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#DDE7E5]">
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Approx. Distance</span>
                  <span className="text-xs font-mono font-bold text-[#005B5C] text-right">
                    {attraction.distance_display}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Road Travel Time</span>
                  <span className="text-xs font-mono font-bold text-[#005B5C] text-right">
                    {attraction.travel_time_display}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Reference Point</span>
                  <span className="text-xs font-mono text-[#263238] text-right">
                    {attraction.reference_point}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Category</span>
                  <span className="text-xs font-mono text-[#263238] text-right">
                    {attraction.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Visit Duration</span>
                  <span className="text-xs font-mono font-bold text-[#005B5C] text-right">
                    {attraction.visit_duration}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Best Time to Visit</span>
                  <span className="text-xs font-mono text-[#263238] text-right">
                    {attraction.best_time}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-[#667085] uppercase">Suitable For</span>
                  <span className="text-xs font-mono text-[#263238] text-right">
                    {attraction.best_for.slice(0, 3).join(', ')}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-[#EEF8F6] border-t border-[#DDE7E5] text-center">
              <span className="text-[11px] font-mono text-[#667085]">
                Note: All distances are approximate and route-dependent. Verified for travel planning from Jawai Bandh.
              </span>
            </div>
          </div>
        </section>

        {/* 4. OVERVIEW SECTION */}
        <section>
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Destination Background
            </span>
            <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
              Overview of {attraction.name}
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-[#263238] leading-relaxed font-light">
            {attraction.long_description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Wildlife / Sightings Disclaimer if relevant */}
          {(attraction.theme === 'Wildlife' || attraction.theme === 'Nature') && (
            <div className="mt-6 p-4 rounded-2xl bg-[#EEF8F6] border border-[#005B5C]/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#005B5C] text-lg shrink-0 mt-0.5">
                info
              </span>
              <p className="text-xs text-[#263238] leading-relaxed">
                <span className="font-bold text-[#005B5C]">Responsible Wildlife Note:</span> Leopard and other wildlife sightings are never guaranteed and depend on natural animal movement, weather, route access, local forest regulations and operating conditions.
              </p>
            </div>
          )}
        </section>

        {/* 5. WHY VISIT */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Key Highlights
            </span>
            <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
              Why Visit {attraction.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {attraction.why_visit.map((reason, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm flex items-start gap-3.5 hover:border-[#005B5C]/50 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center shrink-0 font-bold text-xs">
                  {idx + 1}
                </div>
                <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. QUESTION-LED H2 SECTIONS */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Detailed Questions Answered
            </span>
            <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
              Planning Your Visit to {attraction.name}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-bold text-[#005B5C] mb-2">
                Where is {attraction.name}?
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {attraction.question_sections.where_is_it}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-bold text-[#005B5C] mb-2">
                How far is {attraction.name} from Jawai Bandh?
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {attraction.question_sections.how_far}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-bold text-[#005B5C] mb-2">
                Is {attraction.name} worth visiting?
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {attraction.question_sections.is_it_worth_visiting}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-bold text-[#005B5C] mb-2">
                How much time is needed to visit?
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {attraction.question_sections.how_much_time}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm">
              <h3 className="text-lg font-bold text-[#005B5C] mb-2">
                Can {attraction.name} be combined with a leopard safari?
              </h3>
              <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                {attraction.question_sections.can_combine_safari}
              </p>
            </div>
          </div>
        </section>

        {/* 7. NEARBY / COMBINE WITH CARDS */}
        {attraction.nearby_attractions && attraction.nearby_attractions.length > 0 && (
          <section>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                Route Connections
              </span>
              <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
                Nearby Attractions to Combine with {attraction.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attraction.nearby_attractions.map((nearby, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm flex flex-col justify-between hover:border-[#005B5C] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold">
                        {nearby.distance || 'Nearby'}
                      </span>
                      <span className="material-symbols-outlined text-sm text-[#667085] group-hover:text-[#005B5C] transition-colors">
                        arrow_forward
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#005B5C] mb-1">
                      {nearby.name}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed mb-4">
                      {nearby.reason}
                    </p>
                  </div>

                  <Link
                    href={`/${nearby.slug}`}
                    onClick={() =>
                      trackNearbyClick({
                        from_attraction: attraction.id,
                        to_attraction: nearby.slug,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#005B5C] font-semibold hover:text-[#0A7B75]"
                  >
                    <span>View Guide</span>
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. SUGGESTED GHOOMOSA ITINERARY */}
        {attraction.suggested_itinerary && (
          <section className="p-8 md:p-10 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                Curated Travel Blueprint
              </span>
              <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C] mb-2">
                {attraction.suggested_itinerary.title}
              </h2>
              <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed">
                {attraction.suggested_itinerary.summary}
              </p>
            </div>

            <div className="space-y-4">
              {attraction.suggested_itinerary.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#005B5C] text-white text-[10px] font-mono font-bold inline-block">
                      {step.timeOrDay}
                    </span>
                    <h4 className="text-sm font-bold text-[#005B5C]">
                      {step.activity}
                    </h4>
                    {step.description && (
                      <p className="text-xs text-[#667085] leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. FAQ SECTION (SSR Indexable HTML) */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {attraction.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm space-y-2"
              >
                <h3 className="text-base font-bold text-[#005B5C]">
                  {item.question}
                </h3>
                <p className="text-xs md:text-sm text-[#263238] leading-relaxed font-light">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. NEARBY HOTELS / PROPERTIES BLOCK */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-1">
                Handpicked Stays
              </span>
              <h2 className="text-2xl md:text-3xl font-display-brand font-bold text-[#005B5C]">
                Wilderness Resorts Near {attraction.name}
              </h2>
            </div>
            <Link
              href="/jawai-hotels-resorts"
              className="text-xs font-mono uppercase text-[#005B5C] font-bold hover:text-[#0A7B75] flex items-center gap-1"
            >
              <span>Explore All Verified Stays</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProperties.map((hotel) => (
              <div
                key={hotel.id}
                className="rounded-2xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden flex flex-col justify-between group hover:border-[#005B5C] transition-all"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#EEF8F6]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-mono text-[#005B5C] font-bold shadow-sm">
                      {hotel.tag}
                    </span>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h3 className="text-base font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors leading-snug">
                      {hotel.name}
                    </h3>
                    <p className="text-[11px] text-[#667085] leading-relaxed line-clamp-3">
                      {hotel.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={hotel.url}
                    onClick={() =>
                      trackAttractionHotelClick({
                        attraction_id: attraction.id,
                        property_id: hotel.id,
                      })
                    }
                    className="w-full py-2 rounded-full bg-[#EEF8F6] hover:bg-[#005B5C] hover:text-white text-[#005B5C] font-bold text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1 transition-all text-center border border-[#005B5C]/20"
                  >
                    <span>View Property</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. PRIMARY GHOOMOSA CTA */}
        <section className="p-8 md:p-14 rounded-3xl bg-[#005B5C] text-white text-center shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBA21]/20 border border-[#FDBA21]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest font-semibold">
              Ghoomosa Tailored Travel Planning
            </span>
            <h2 className="text-2xl sm:text-4xl font-display-brand font-bold tracking-tight">
              Plan {attraction.name} with Ghoomosa
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Every Jawai trip is bespoke. Combine your visit to {attraction.name} with private 4x4 leopard safaris, handpicked luxury camps, local naturalists, and seamless regional road transfers.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-[#005B5C] hover:bg-[#EEF8F6] font-bold text-xs font-mono uppercase tracking-widest transition-all shadow-md"
              >
                Build My Jawai Itinerary
              </button>

              <a
                href={buildWhatsAppUrl('bottom_cta')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackAttractionWhatsAppClick({
                    attraction_id: attraction.id,
                    CTA_position: 'bottom_cta',
                    UTM: utmParams,
                  })
                }
                className="px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Chat on WhatsApp (+91 73000 03101)</span>
              </a>
            </div>

            <div className="pt-4 text-[11px] font-mono text-white/75">
              Trip planning and stay consultation by Ghoomosa — &ldquo;Trips That Become Stories&rdquo;
            </div>
          </div>
        </section>
      </div>

      {/* LEAD CAPTURE MODAL */}
      <AttractionEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attractionName={attraction.name}
        attractionId={attraction.id}
      />
    </div>
  );
}
