import React from 'react';
import Link from 'next/link';
import { SlideRepository } from '@/core/repositories/SlideRepository';
import { Counter } from '@/components/ui/Counter';
import { Button } from '@/components/ui/Button';
import { SideRail } from '@/components/layout/SideRail';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';

export default async function CelestialPage() {
  const slideRepo = SlideRepository.getInstance();
  const slide = await slideRepo.getBySlideNumber('04');

  const heroImage =
    slide?.imageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk';

  const astronomicalSpecs = [
    { id: 'astro-1', label: 'Dark Sky Index', value: 'Bortle Class 2 Zenith', highlight: true },
    { id: 'astro-2', label: 'Peak Milky Way Visibility', value: '23:30 — 03:45 IST', highlight: false },
    { id: 'astro-3', label: 'Photographic Sensor Threshold', value: 'ISO 6400 / f/1.8 Starlight', highlight: false },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Fullscreen Immersive Stage */}
      <section className="relative w-full min-h-[100svh] h-screen -mt-24 overflow-hidden select-none bg-[#F8FAF8]">
        {/* Full-bleed nocturnal backdrop with dynamic atmospheric gradation */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        {/* Multi-layered cinematic scrim overlays for contrast & depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-surface-container-lowest/20 to-surface-container-lowest/80 pointer-events-none" />

        {/* Pinned Slide Counter (Desktop Top Left) */}
        <div className="absolute left-6 md:left-16 top-28 z-30">
          <Link href="/" className="block group" title="Loop back to Slide 01: Jawai">
            <Counter current="04" total="04" variant="hairline" showHairline />
          </Link>
        </div>

        {/* Coordinate & Expedition Pass Badge (Desktop Top Right) */}
        <div className="absolute right-6 md:right-16 top-28 z-30 flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F8FAF8]/70 backdrop-blur-md border border-on-surface/10 rounded-none shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="w-1.5 h-1.5 -ml-4 rounded-full bg-primary" />
            <span className="font-label-nav text-[10px] tracking-[0.25em] uppercase text-[#263238] font-semibold">
              ASTRONOMICAL EXPEDITION PASS
            </span>
          </div>
          <div className="hidden lg:flex items-center px-3 py-2 bg-white/50 backdrop-blur-sm border border-on-surface/10 text-[#667085] font-label-counter text-[10px] tracking-widest">
            25.15° N, 73.22° E
          </div>
        </div>

        {/* Ambient Sound Frequency Lateral Rail (Desktop Right Center) */}
        <SideRail
          type="sound-frequency"
          text="24 DB QUIET"
          subtext="DEEP SKY OBSERVATORY"
        />

        {/* Center Stage Typography: Reference Layout Alignment */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between items-center px-margin-mobile md:px-margin pt-36 pb-24 text-center">
          <div className="w-full" />

          {/* Main Focal Content Group */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Subtitle Kicker */}
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <span className="w-6 md:w-10 h-[1px] bg-primary" />
              <p className="font-label-nav text-[10.5px] md:text-body-sm font-semibold tracking-[0.35em] uppercase text-primary">
                CELESTIAL TRANSIT &amp; NEBULA
              </p>
              <span className="w-6 md:w-10 h-[1px] bg-primary" />
            </div>

            {/* Grand Monolithic Display Headline */}
            <h1 className="font-display-hero text-[3.75rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.88] font-extrabold tracking-[-0.03em] uppercase text-[#263238] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
              NOCTURNAL
            </h1>

            {/* Poetic Literary Caption */}
            <p className="font-editorial-quote italic text-headline-sm md:text-editorial-quote text-[#263238]/85 max-w-xl text-center mx-auto mt-4 md:mt-5 drop-shadow-md font-normal leading-relaxed">
              “Where prehistoric granite cradles the quiet monarch beneath a billion burning suns.”
            </p>

            {/* Primary High-Impact CTA */}
            <div className="mt-8 md:mt-10">
              <Button
                href="/contact"
                variant="high-impact"
                icon="arrow_forward"
              >
                REQUEST EXPEDITION
              </Button>
            </div>
          </div>

          {/* Bottom Habitat Specs Ribbon */}
          <div className="w-full max-w-3xl flex items-center justify-between border-t border-on-surface/10 pt-4 text-[#667085] font-label-counter text-[11px] tracking-widest uppercase">
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[#263238]/40 text-[9px]">LIGHT POLLUTION</span>
              <span className="text-[#263238] font-semibold">CLASS 2 BORTLE</span>
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[#263238]/40 text-[9px]">APEX WATCH</span>
              <span className="text-primary font-semibold">MIDNIGHT PROWL</span>
            </div>
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[#263238]/40 text-[9px]">TERRAIN</span>
              <span className="text-[#263238] font-semibold">MAGMA GRANITE RIFT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Astronomical Chapter Deep-Dive */}
      <section
        className="w-full bg-[#F8FAF8] px-margin-mobile md:px-margin py-28 relative z-20"
        id="celestial-manifest"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {/* Chapter Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-on-surface/10">
            <div>
              <span className="font-label-nav text-label-nav text-primary tracking-[0.25em] uppercase">
                Phase 04 — Midnight Transit
              </span>
              <h2 className="font-display-hero text-headline-lg md:text-[3.25rem] text-[#263238] font-extrabold tracking-tight mt-2">
                ASTRONOMICAL EXPEDITION
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#667085] max-w-md">
              Free from artificial urban illumination, Jawai&apos;s isolated plutonic plateau
              stands as one of India&apos;s premier dark-sky corridors for deep astrophotography
              paired with nocturnal predator observation.
            </p>
          </div>

          {/* Cards & Parameters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <Card
                variant="geological-feature"
                badgeText="NEBULA APEX • SECTOR VII"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk"
                altText="Milky way astrophotography over granite cliffs"
                title="Deep Starlight Zenith"
                description="Equipped with specialized infrared vision optics and ultra-wide astrophotography rigs, trackers witness the silent movements of leopards traversing moonlit ridges under celestial arches."
                metricLabel="NIGHT SKY CLARITY"
                metricValue="99.4% EXTINCTION FREE"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-white border border-on-surface/5 p-8">
              <div className="space-y-4">
                <span className="font-label-nav text-label-nav text-primary tracking-widest uppercase">
                  OBSERVATORY METRICS
                </span>
                <DataTable items={astronomicalSpecs} variant="hairline" />
              </div>
              <Button href="/contact" variant="ghost">
                REQUEST ASTRONOMICAL BRIEFING
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
