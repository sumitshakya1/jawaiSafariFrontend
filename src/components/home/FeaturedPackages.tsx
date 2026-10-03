'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GHOOMOSA_PACKAGES, GhoomosaPackage } from '@/global/constants/packages';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';

export function FeaturedPackages() {
  const [selectedPkg, setSelectedPkg] = useState<GhoomosaPackage | null>(null);

  return (
    <section id="packages" className="relative w-full py-20 md:py-28 bg-surface-container-lowest scroll-mt-24">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="w-6 h-[1px] bg-primary" />
              <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
                TAILORED EXPEDITION PLANS
              </span>
            </div>
            <h2 className="font-display-hero text-3xl md:text-5xl uppercase tracking-tight text-white">
              Flagship Jawai Packages
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="text-body-sm text-primary font-mono block">
              PRICE ON REQUEST • ALL-INCLUSIVE ITINERARIES
            </span>
            <span className="text-[12px] text-white/50">
              Quotation prepared dynamically based on dates, group size, and stay class
            </span>
          </div>
        </div>

        {/* 6 Flagship Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GHOOMOSA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-surface-container-low/60 border border-white/10 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              {/* Image & Header */}
              <div>
                <div className="relative w-full h-60 overflow-hidden bg-surface-container-lowest">
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                  
                  {/* Top tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">
                      {pkg.id}
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1 bg-surface-container-lowest/80 text-white border border-white/15 backdrop-blur-sm">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
                      BEST FOR: {pkg.bestFor}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display-hero text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant line-clamp-2 mb-5">
                    {pkg.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {pkg.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Day-wise snippet button */}
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="text-xs font-mono uppercase tracking-wider text-primary hover:underline flex items-center gap-1 mb-4"
                  >
                    <span>View Day-by-Day Itinerary</span>
                    <span className="material-symbols-outlined text-sm">visibility</span>
                  </button>
                </div>
              </div>

              {/* Pricing & CTA Footer */}
              <div className="p-6 pt-4 border-t border-white/10 bg-surface-container-lowest/50 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/50 uppercase">RATES</span>
                  <span className="text-xs font-mono text-primary font-bold tracking-wider">
                    PRICE ON REQUEST
                  </span>
                </div>
                <WhatsAppButton
                  packageId={pkg.id}
                  packageName={pkg.name}
                  duration={pkg.duration}
                  size="md"
                  variant="editorial"
                  className="w-full"
                >
                  Get Quote on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Day-wise Itinerary preview */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-surface-container-lowest border border-primary/40 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-primary">{selectedPkg.id}</span>
              <span className="text-xs font-mono text-white/40">•</span>
              <span className="text-xs font-mono text-white/60">{selectedPkg.duration}</span>
            </div>

            <h3 className="font-display-hero text-2xl md:text-3xl text-white uppercase mb-4">
              {selectedPkg.name}
            </h3>

            <p className="text-body-sm text-white/80 leading-relaxed mb-6">
              {selectedPkg.overview}
            </p>

            <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              Day-by-Day Expedition Timeline
            </h4>

            <div className="space-y-4 border-l border-primary/30 pl-4 mb-8">
              {selectedPkg.itinerary.map((item) => (
                <div key={item.day} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h5 className="font-display-hero text-sm text-white uppercase">
                    Day {item.day}: {item.title}
                  </h5>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-white/50">
                Transparent quotation shared based on confirmed dates
              </span>
              <WhatsAppButton
                packageId={selectedPkg.id}
                packageName={selectedPkg.name}
                duration={selectedPkg.duration}
                size="md"
                variant="editorial"
              >
                Request Quotation
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
