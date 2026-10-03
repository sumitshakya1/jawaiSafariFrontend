import React from 'react';
import Link from 'next/link';
import { SlideRepository } from '@/core/repositories/SlideRepository';
import { Counter } from '@/components/ui/Counter';
import { Button } from '@/components/ui/Button';
import { SideRail } from '@/components/layout/SideRail';
import { Card } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';

export default async function SanctuaryPage() {
  const slideRepo = SlideRepository.getInstance();
  const slide = await slideRepo.getBySlideNumber('03');

  const heroImage =
    slide?.imageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4bN6KG0yG7Y2ro0_oFLqeeX7z7nqZkeRM6fU50zpUeDkwqD2QdHO03zAMn7PDNr3s14mTvGs4QTVQ81GsjQOJTrWdbgT24i13F4YSmi5pdb2RiimNmTP26-nQIysddNZcs3mXXpSWWAp-ehvTINrm-g13eDDomh6SJqxAUF1P6pNTuvYdFh169c2xy9jHxRmD46Me12ISTSwsUhwNrMWO7pgGRmgVldQ6m2yn7acAT7XMvf8hzM1';

  const protocolRows = [
    { id: 'prot-1', label: 'Tracking Method', value: 'Infrared & Optical Stalk', highlight: false },
    { id: 'prot-2', label: 'Night Range Patrol', value: '22:00 — 04:30 HRS', highlight: false },
    { id: 'prot-3', label: 'Vehicle Enclosure', value: 'Custom Open-Roof 4x4', highlight: true },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Fullscreen Immersive Stage */}
      <section className="relative w-full min-h-[100svh] h-screen -mt-24 overflow-hidden select-none bg-[#F8FAF8]">
        {/* Full-bleed nocturnal backdrop with dynamic atmospheric gradation */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          id="hero-bg"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />

        {/* Multi-layered cinematic scrim overlays for contrast & depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-surface-container-lowest/20 to-surface-container-lowest/80 pointer-events-none" />

        {/* Pinned Slide Counter (Desktop Top Left) */}
        <div className="absolute left-6 md:left-16 top-28 z-30">
          <Link href="/celestial" className="block group" title="Next Slide: Celestial">
            <Counter current="03" total="04" variant="hairline" showHairline />
          </Link>
        </div>

        {/* Coordinate & Expedition Pass Badge (Desktop Top Right) */}
        <div className="absolute right-6 md:right-16 top-28 z-30 flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2 bg-[#F8FAF8]/70 backdrop-blur-md border border-on-surface/10 rounded-none shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="w-1.5 h-1.5 -ml-4 rounded-full bg-primary" />
            <span className="font-label-nav text-[10px] tracking-[0.25em] uppercase text-[#263238] font-semibold">
              NOCTURNAL SANCTUARY PASS
            </span>
          </div>
          <div className="hidden lg:flex items-center px-3 py-2 bg-white/50 backdrop-blur-sm border border-on-surface/10 text-[#667085] font-label-counter text-[10px] tracking-widest">
            25.1324° N, 73.1897° E
          </div>
        </div>

        {/* Ambient Sound Frequency Lateral Rail (Desktop Right Center) */}
        <SideRail
          type="sound-frequency"
          text="38 DB AMBIENCE"
          subtext="ARAVALLI NIGHT"
        />

        {/* Center Stage Typography: Reference Layout Alignment */}
        <div className="relative z-20 w-full h-full flex flex-col justify-between items-center px-margin-mobile md:px-margin pt-36 pb-24 text-center">
          {/* Top Spacer / Vertical balance anchor */}
          <div className="w-full" />

          {/* Main Focal Content Group */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Subtitle Kicker */}
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <span className="w-6 md:w-10 h-[1px] bg-primary" />
              <p className="font-label-nav text-[10.5px] md:text-body-sm font-semibold tracking-[0.35em] uppercase text-primary">
                NOCTURNAL CLIFF HABITAT
              </p>
              <span className="w-6 md:w-10 h-[1px] bg-primary" />
            </div>

            {/* Grand Monolithic Display Headline */}
            <h1 className="font-display-hero text-[3.75rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.88] font-extrabold tracking-[-0.03em] uppercase text-[#263238] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
              SANCTUARY
            </h1>

            {/* Poetic Literary Caption */}
            <p className="font-editorial-quote italic text-headline-sm md:text-editorial-quote text-[#263238]/85 max-w-xl text-center mx-auto mt-4 md:mt-5 drop-shadow-md font-normal leading-relaxed">
              “Above the moonlit gorges, apex stillness dissolves into an ocean of ancient stars.”
            </p>

            {/* Primary High-Impact CTA matching inspiration reference */}
            <div className="mt-8 md:mt-10">
              <Button
                href="#explore-deep-dive"
                variant="high-impact"
                icon="arrow_forward"
              >
                EXPLORE SANCTUARY
              </Button>
            </div>
          </div>

          {/* Bottom Habitat Specs Ribbon */}
          <div className="w-full max-w-3xl flex items-center justify-between border-t border-on-surface/10 pt-4 text-[#667085] font-label-counter text-[11px] tracking-widest uppercase">
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[#263238]/40 text-[9px]">ELEVATION</span>
              <span className="text-[#263238] font-semibold">580 MTRS</span>
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[#263238]/40 text-[9px]">SOLITARY APEX</span>
              <span className="text-primary font-semibold">PANTHERA PARDUS FUSCA</span>
            </div>
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[#263238]/40 text-[9px]">CELESTIAL TRANSIT</span>
              <span className="text-[#263238] font-semibold">MILKY WAY CORE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Expedition Chapter Deep-Dive */}
      <section
        className="w-full bg-[#F8FAF8] px-margin-mobile md:px-margin py-28 relative z-20"
        id="explore-deep-dive"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {/* Chapter Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-on-surface/10">
            <div>
              <span className="font-label-nav text-label-nav text-primary tracking-[0.25em] uppercase">
                GEOLOGICAL VAULT
              </span>
              <h2 className="font-display-hero text-headline-lg md:text-[3.25rem] text-[#263238] font-extrabold tracking-tight mt-2">
                THE GRANITE CITADEL
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#667085] max-w-md">
              Formed over a billion years ago, Jawai&apos;s volcanic intrusions offer cavernous
              sanctuary for Rajasthan&apos;s free-ranging big cats, harmonized with nomadic Rabari
              guardians.
            </p>
          </div>

          {/* Asymmetrical Editorial 3-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Feature Card: Geological Cavity */}
            <div className="lg:col-span-7">
              <Card
                variant="geological-feature"
                badgeText="SECTOR IV • CAVERN APEX"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBIqlO0siNVsPh9ULo2UINIAaIL-Ut7gwewxF-1U-6ZMPwBrTd3fx8e2NCQfYdwRMGbvReNztzeDMQvuua9zWt-_mJr_Zgm1hTjJoMwm5b6DLK055kJyr_ltN0P814KUMb2qiUaNUuGPcMVSOTORyJRovBGyJu0Mgvpn4UrxZmduDhrZBD1e2vJoG_FcaiMlF5Q2P6PDzevnadCvJZCN7YAyuRUvcUdfqY_o4yUKHGwcAorgxmVgcRP"
                altText="Close up view of weathered prehistoric granite boulder cave textures with warm ambient camp embers highlighting mineral ridges against a pitch black night backdrop, high-contrast, editorial wildlife photography"
                title="Subterranean Twilight Boulders"
                description="Carved by seasonal monsoons and abrasive desert winds, these cavern networks trap afternoon warmth into freezing nocturnal hours, offering natural thermal nests for solitary predators."
                metricLabel="THERMAL RETENTION"
                metricValue="19.4° C CONSTANT"
              />
            </div>

            {/* Right Stacked Modules */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Spec Module: Stargazing Transit */}
              <div className="bg-white border border-on-surface/5 p-8 flex flex-col gap-6 group hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-label-nav text-label-nav text-primary tracking-widest uppercase">
                    SKY ARCHITECTURE
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">dark_mode</span>
                </div>
                <div>
                  <span className="font-display-hero text-headline-lg text-[#263238] font-extrabold leading-none">
                    BORTLE 2
                  </span>
                  <p className="font-body-sm text-[#667085] mt-1">
                    Zero light pollution threshold over sanctuary crags
                  </p>
                </div>
                <div className="relative w-full h-44 overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    data-alt="Dramatic night astrophotography over jagged Indian desert granite rock hill with starry Milky Way spiral galaxy core illuminated above silhouettes, deep cinematic indigo and bronze tones"
                    alt="Milky Way over granite crags"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk"
                  />
                </div>
              </div>

              {/* Module: Silent Tracking Parameters */}
              <div className="bg-white border border-on-surface/5 p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <span className="font-label-nav text-label-nav text-primary tracking-widest uppercase">
                    EXPEDITION PROTOCOL
                  </span>
                  <DataTable items={protocolRows} variant="hairline" />
                </div>
                <Button
                  href="/contact"
                  variant="ghost"
                >
                  REQUEST NIGHT EXPEDITION BRIEFING
                </Button>
              </div>
            </div>
          </div>

          {/* Wildlife Guardian Statement Quote */}
          <div className="w-full bg-white p-10 md:p-14 border-l-2 border-primary flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="font-editorial-quote italic text-headline-sm md:text-editorial-quote text-[#263238] font-normal">
                “We share this granite dome not by dominance, but by ancestral pact. When the sky
                turns black, the crags belong only to the spotted kings.”
              </p>
              <span className="block font-label-counter text-body-sm text-primary tracking-widest uppercase mt-4">
                — Mohan Rabari, Head Indigenous Tracker
              </span>
            </div>
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full border border-primary/30 p-1 flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px] text-primary">
                  psychology_alt
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
