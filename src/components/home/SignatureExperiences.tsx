'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GHOOMOSA_EXPERIENCES } from '@/global/constants/experiences';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function SignatureExperiences() {
  return (
    <section id="experiences" className="relative w-full py-20 md:py-28 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-[#005B5C]" />
              <span className="font-mono text-[11px] font-bold text-[#005B5C] tracking-[0.25em] uppercase">
                ACTIVE PURSUITS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display-brand text-[#005B5C] tracking-tight">
              Signature Jawai Experiences
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#667085] max-w-2xl font-light">
              From open-top leopard tracking across steep granite kopjes to serene wetland birding and authentic Rabari pastoral walks.
            </p>
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GHOOMOSA_EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="group bg-[#F8FAF8] rounded-2xl overflow-hidden border border-[#DDE7E5] hover:border-[#0A7B75] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#EEF8F6]">
                <Image
                  src={exp.imageUrl}
                  alt={exp.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[11px] font-mono font-bold text-[#005B5C] shadow-sm uppercase tracking-wider">
                    {exp.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {exp.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-4 border-t border-[#DDE7E5] flex items-center justify-between gap-3">
                  <Link
                    href={`/${exp.slug}`}
                    className="text-xs font-semibold text-[#005B5C] hover:text-[#0A7B75] flex items-center gap-1 transition-colors"
                  >
                    <span>Read Guide</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>

                  <WhatsAppButton
                    packageOrExperienceName={exp.name}
                    canonicalPath={`/${exp.slug}`}
                    variant="editorial"
                    size="sm"
                  >
                    Check Availability
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
