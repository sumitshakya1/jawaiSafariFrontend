'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';
import { SITE_CONFIG } from '@/global/config/site.config';

export interface GuideSection {
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface GuidePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  author?: string;
  lastUpdated?: string;
  readingTime?: string;
  sections: GuideSection[];
  relatedPackages?: { name: string; slug: string; duration: string }[];
  relatedExperiences?: { name: string; slug: string }[];
}

export function GuidePageTemplate({
  title,
  subtitle,
  heroImage,
  author = 'Ghoomosa Field Naturalist Desk',
  lastUpdated = 'October 2026',
  readingTime = '6 min read',
  sections,
  relatedPackages = [],
  relatedExperiences = [],
}: GuidePageTemplateProps) {
  return (
    <article className="w-full min-h-screen bg-[#F8FAF8] text-[#263238] pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] min-h-[380px] max-h-[520px] overflow-hidden bg-[#003F40]">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003F40] via-[#003F40]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16 max-w-5xl mx-auto flex flex-col justify-end">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FDBA21] mb-3">
            <span>{readingTime}</span>
            <span>•</span>
            <span>Updated {lastUpdated}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display-brand text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/85 max-w-3xl font-light">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mt-12 space-y-12">
        {/* Author Header */}
        <div className="p-4 rounded-2xl bg-white border border-[#DDE7E5] flex items-center justify-between text-xs text-[#667085]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-lg">nature_people</span>
            </div>
            <div>
              <span className="font-semibold text-[#263238] block">{author}</span>
              <span className="text-[11px]">Verified Destination Guide</span>
            </div>
          </div>
          <span className="font-mono text-[11px]">{SITE_CONFIG.primaryDestination}</span>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DDE7E5] shadow-sm space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-display-brand text-[#005B5C]">
                {sec.title}
              </h2>
              <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>

              {sec.subsections && sec.subsections.length > 0 && (
                <div className="mt-6 space-y-4 pt-4 border-t border-[#DDE7E5]">
                  {sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <h3 className="text-base font-bold text-[#005B5C]">
                        {sub.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed">
                        {sub.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Packages & Experiences */}
        {relatedPackages.length > 0 && (
          <div className="p-8 rounded-3xl bg-[#EEF8F6] border border-[#0A7B75]/30 space-y-4">
            <h3 className="text-lg font-bold font-display-brand text-[#005B5C]">
              Featured Packages for This Route
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPackages.map((pkg, pIdx) => (
                <Link
                  key={pIdx}
                  href={`/jawai-tour-packages/${pkg.slug}`}
                  className="p-4 rounded-xl bg-white border border-[#DDE7E5] hover:border-[#005B5C] transition-colors flex items-center justify-between group"
                >
                  <div>
                    <span className="text-xs font-bold text-[#005B5C] group-hover:text-[#0A7B75] block">
                      {pkg.name}
                    </span>
                    <span className="text-[11px] text-[#667085]">{pkg.duration}</span>
                  </div>
                  <span className="material-symbols-outlined text-sm text-[#005B5C] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#005B5C] text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display-brand">
            Have Questions About This Guide?
          </h3>
          <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto font-light">
            Connect directly with our local expedition team on WhatsApp for road conditions, seasonal weather updates, and custom itinerary options.
          </p>
          <WhatsAppButton
            packageOrExperienceName={title}
            variant="whatsapp"
            size="md"
          >
            Chat with Destination Specialist
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
