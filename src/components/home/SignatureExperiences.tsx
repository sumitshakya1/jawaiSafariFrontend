'use client';

import React from 'react';
import Image from 'next/image';
import { GHOOMOSA_EXPERIENCES } from '@/global/constants/experiences';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function SignatureExperiences() {
  return (
    <section id="experiences" className="relative w-full py-20 md:py-28 bg-[#0a0f14] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[1px] bg-primary" />
              <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
                CURATED FIELD ACTIVITIES
              </span>
            </div>
            <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white">
              Signature Jawai Experiences
            </h2>
          </div>
          <p className="text-body-sm text-on-surface-variant max-w-md">
            Every experience is accompanied by seasoned local naturalists and certified 4x4 drivers following strict ethical wildlife protocols.
          </p>
        </div>

        {/* 6 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GHOOMOSA_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-surface-container-low/60 border border-white/10 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 overflow-hidden bg-surface-container-lowest">
                <Image
                  src={exp.imageUrl}
                  alt={exp.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-surface-container-lowest/80 border border-white/10 text-primary backdrop-blur-sm">
                    {exp.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span>{exp.timing}</span>
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display-hero text-xl text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {exp.name}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant line-clamp-3 mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet highlights */}
                  <div className="space-y-1.5 mb-6">
                    {exp.whatToExpect.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="text-primary text-sm mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/40">
                    SEASON: {exp.season.split('(')[0]}
                  </span>
                  <WhatsAppButton
                    experienceName={exp.name}
                    size="sm"
                    variant="editorial"
                  >
                    Enquire
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
