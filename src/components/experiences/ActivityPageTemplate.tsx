'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExperienceItem } from '@/constants/experiencesData';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';
import { SITE_CONFIG } from '@/global/config/site.config';

interface ActivityPageTemplateProps {
  experience: ExperienceItem;
}

export function ActivityPageTemplate({ experience }: ActivityPageTemplateProps) {
  if (!experience) return null;

  return (
    <article className="w-full min-h-screen bg-[#F8FAF8] text-[#263238] pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative w-full h-[55vh] min-h-[420px] max-h-[600px] overflow-hidden bg-[#003F40]">
        <Image
          src={experience.heroImage}
          alt={experience.name}
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003F40] via-[#003F40]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 max-w-7xl mx-auto flex flex-col justify-end">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono uppercase tracking-widest mb-4 w-fit border border-white/20">
            <span className="material-symbols-outlined text-sm text-[#FDBA21]">explore</span>
            <span>{experience.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display-brand text-white tracking-tight leading-tight max-w-4xl">
            {experience.heroTitle || experience.name}
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/85 max-w-3xl font-light">
            {experience.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left 2 Cols: Details, Expectations, Inclusions */}
        <div className="lg:col-span-2 space-y-12">
          {/* Detailed Overview */}
          <div className="bg-white rounded-2xl p-8 border border-[#DDE7E5] shadow-sm space-y-4">
            <h2 className="text-2xl font-bold font-display-brand text-[#005B5C]">
              Overview & Landscape Context
            </h2>
            <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed whitespace-pre-line">
              {experience.longDesc}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] block">Scheduling & Timing</span>
              <span className="text-sm font-bold text-[#005B5C]">{experience.scheduling}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#DDE7E5] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#667085] block">Ideal For</span>
              <span className="text-sm font-bold text-[#005B5C]">{experience.idealTraveller?.join(', ') || 'Wildlife Enthusiasts'}</span>
            </div>
          </div>

          {/* What to Expect & What to Carry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] space-y-3">
              <h3 className="text-base font-bold text-[#005B5C] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0A7B75]">check_circle</span>
                <span>What to Expect</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#263238] font-light">
                {experience.whatToExpect?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A7B75] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DDE7E5] space-y-3">
              <h3 className="text-base font-bold text-[#005B5C] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F7941D]">backpack</span>
                <span>What to Carry</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#263238] font-light">
                {experience.whatToCarry?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F7941D] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Safety & Responsible Travel Note */}
          <div className="p-6 rounded-2xl bg-[#EEF8F6] border border-[#0A7B75]/30 space-y-2">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#005B5C] font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#0A7B75]">shield</span>
              <span>Field Safety & Responsible Tourism</span>
            </h3>
            <p className="text-xs text-[#263238] font-light leading-relaxed">
              {experience.criticalNote} {experience.responsibleTravelNote}
            </p>
          </div>

          {/* Plan Beyond Safari — Nearby Attractions */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DDE7E5] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DDE7E5] pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#005B5C] font-bold block">
                  Combine Your Expedition
                </span>
                <h3 className="text-lg font-bold font-display-brand text-[#005B5C]">
                  Plan Beyond Safari — Nearby Jawai Attractions
                </h3>
              </div>
              <Link
                href="/places-to-visit-in-jawai"
                className="text-xs font-mono uppercase text-[#005B5C] font-bold hover:text-[#0A7B75] flex items-center gap-1"
              >
                <span>All Places →</span>
              </Link>
            </div>

            <p className="text-xs text-[#667085] leading-relaxed">
              Enrich your safari with scenic reservoir views, ancient hill shrines, marble heritage temples, and living pastoral culture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <Link
                href="/jawai-dam"
                className="p-3.5 rounded-xl bg-[#F8FAF8] hover:bg-[#EEF8F6] border border-[#DDE7E5] transition-all group block"
              >
                <span className="text-xs font-bold text-[#005B5C] group-hover:text-[#0A7B75] block">Jawai Dam</span>
                <span className="text-[11px] text-[#667085]">Reservoir panoramas, crocodiles & winter flamingos.</span>
              </Link>
              <Link
                href="/jawai-hills"
                className="p-3.5 rounded-xl bg-[#F8FAF8] hover:bg-[#EEF8F6] border border-[#DDE7E5] transition-all group block"
              >
                <span className="text-xs font-bold text-[#005B5C] group-hover:text-[#0A7B75] block">Jawai Hills</span>
                <span className="text-[11px] text-[#667085]">Billion-year-old monolithic granite geology & viewpoints.</span>
              </Link>
              <Link
                href="/jawai-village-experience"
                className="p-3.5 rounded-xl bg-[#F8FAF8] hover:bg-[#EEF8F6] border border-[#DDE7E5] transition-all group block"
              >
                <span className="text-xs font-bold text-[#005B5C] group-hover:text-[#0A7B75] block">Rabari Village Experience</span>
                <span className="text-[11px] text-[#667085]">Living pastoral heritage and human-wildlife harmony.</span>
              </Link>
              <Link
                href="/ranakpur-jain-temple-near-jawai"
                className="p-3.5 rounded-xl bg-[#F8FAF8] hover:bg-[#EEF8F6] border border-[#DDE7E5] transition-all group block"
              >
                <span className="text-xs font-bold text-[#005B5C] group-hover:text-[#0A7B75] block">Ranakpur Jain Temple</span>
                <span className="text-[11px] text-[#667085]">15th-century marble temple with 1,444 carved pillars.</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar: WhatsApp Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-3xl p-8 border border-[#DDE7E5] shadow-lg space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#005B5C] block mb-1">
                INSTANT ENQUIRY
              </span>
              <h3 className="text-2xl font-bold font-display-brand text-[#005B5C]">
                Check Date Availability
              </h3>
              <p className="mt-2 text-xs text-[#667085] font-light">
                Every booking is personally confirmed against operator permissions and naturalist schedules.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#667085]">Quotation Style:</span>
                <span className="font-semibold text-[#005B5C]">Price on Request</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#667085]">Location:</span>
                <span className="font-semibold text-[#263238]">Jawai, Rajasthan</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#667085]">Vehicle Type:</span>
                <span className="font-semibold text-[#263238]">Open 4x4 Custom Jeep</span>
              </div>
            </div>

            <WhatsAppButton
              experienceName={experience.name}
              pageUrl={`/${experience.slug}`}
              variant="editorial"
              size="lg"
              className="w-full"
            >
              Get Quotation on WhatsApp
            </WhatsAppButton>

            <p className="text-[11px] text-center text-[#667085] font-light">
              Prefilled WhatsApp enquiry with activity context. Response within 30 minutes.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

