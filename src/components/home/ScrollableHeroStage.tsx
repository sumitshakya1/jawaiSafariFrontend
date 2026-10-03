'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Counter } from '@/components/ui/Counter';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface SlideData {
  id: string;
  slideNumber: string;
  totalSlides: string;
  kicker: string;
  title: string;
  quote: string;
  coordinates: string;
  coordinatesSubtext?: string;
  badgeLabel?: string;
  actionLabel: string;
  actionHref: string;
  imageUrl: string;
  localFallbackUrl: string;
  chips?: { label: string; variant: 'primary' | 'tertiary' | 'variant' }[];
  specsRibbon?: { label: string; value: string; isPrimary: boolean }[];
  soundFrequencyText?: string;
  progress: number;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'slide-01',
    slideNumber: '01',
    totalSlides: '04',
    kicker: 'LAND OF THE LEOPARD',
    title: 'JAWAI',
    quote: '“Granite thrones sculpted by antiquity, where predators walk amidst quiet temples.”',
    coordinates: '25.10° N, 73.15° E — KOPJES EXPEDITION',
    actionLabel: 'EXPLORE JAWAI',
    actionHref: '#quick-planner',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpsLVyq-O-k06M9ro5BZ2twuDnq8V01cc6KE2OY2-pl3vJssFkEWFJ6ZjFkW1Ea3hpZNbwIrNp1LqrZMcP6k9gwSo1pTAGggUY85ZDKzlZTbclelVdRIwn6yi_TR62ZNDYW3mMSFynlU_4Aid8jThqgYNHZmQz4UBi8IXPIMy5TAw4QqKXb_HxHcGhfquWS26F4FKI8mRfMjCEz0cUl-u16mmgpFakVIyEZWbVJ4svF85hdDO7A-2',
    localFallbackUrl: '/images/jawai-hero.png',
    specsRibbon: [
      { label: 'HABITAT', value: 'Plutonic Rock Outcrops', isPrimary: true },
      { label: 'SPECIES', value: 'Panthera Pardus Fusca', isPrimary: false },
      { label: 'SANCTUARY', value: 'Rabari Belt', isPrimary: false },
    ],
    progress: 25,
  },
  {
    id: 'slide-02',
    slideNumber: '02',
    totalSlides: '04',
    kicker: 'Dusk Tracking & Savannah',
    title: 'Safari',
    quote: '“Ghost of the granite boulders, stalking the golden amber twilight.”',
    coordinates: 'Dusk Tracking & Savannah',
    coordinatesSubtext: '25° 04′ N · Jawai Hills',
    badgeLabel: 'PHASE 02 · GOLDEN DUSK',
    actionLabel: 'EXPLORE EXPEDITIONS',
    actionHref: '#packages',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPiNWp9eFK-PVFUY4iOnThDWnm0511bfJG0cIkNYg3F2yxi44KRk6VoxGtUrnAejP1KSOCgIuwUJYDQ5CCLox8BuTIE1mGOOf2BWZ3_n2qkKWxAH-ptrX-qD5yW3p5ayBp7cEL3uZVkRxKoMvm19WFwxkpi0hzODspPEud_R-BTRsBcW0mv5jmdtIPDbdp_3uSryIcFlXS-VRjJTPP76TXpQYlQEm69OpbcINw1c1YSnGaznTutLy',
    localFallbackUrl: '/images/safari-hero.png',
    chips: [
      { label: 'Rabari Coexistence', variant: 'primary' },
      { label: 'Custom 4x4 Tracking', variant: 'tertiary' },
      { label: '25° 04′ N · Jawai Hills', variant: 'variant' },
    ],
    progress: 50,
  },
  {
    id: 'slide-03',
    slideNumber: '03',
    totalSlides: '04',
    kicker: 'NOCTURNAL CLIFF HABITAT',
    title: 'SANCTUARY',
    quote: '“Above the moonlit gorges, apex stillness dissolves into an ocean of ancient stars.”',
    coordinates: 'NOCTURNAL SANCTUARY PASS',
    coordinatesSubtext: '25.1324° N, 73.1897° E',
    badgeLabel: 'NOCTURNAL SANCTUARY PASS',
    actionLabel: 'EXPLORE EXPERIENCES',
    actionHref: '#experiences',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4bN6KG0yG7Y2ro0_oFLqeeX7z7nqZkeRM6fU50zpUeDkwqD2QdHO03zAMn7PDNr3s14mTvGs4QTVQ81GsjQOJTrWdbgT24i13F4YSmi5pdb2RiimNmTP26-nQIysddNZcs3mXXpSWWAp-ehvTINrm-g13eDDomh6SJqxAUF1P6pNTuvYdFh169c2xy9jHxRmD46Me12ISTSwsUhwNrMWO7pgGRmgVldQ6m2yn7acAT7XMvf8hzM1',
    localFallbackUrl: '/images/sanctuary-hero.png',
    specsRibbon: [
      { label: 'ELEVATION', value: '580 MTRS', isPrimary: false },
      { label: 'SOLITARY APEX', value: 'PANTHERA PARDUS FUSCA', isPrimary: true },
      { label: 'CELESTIAL TRANSIT', value: 'MILKY WAY CORE', isPrimary: false },
    ],
    soundFrequencyText: '38 DB AMBIENCE • ARAVALLI NIGHT',
    progress: 75,
  },
  {
    id: 'slide-04',
    slideNumber: '04',
    totalSlides: '04',
    kicker: 'CELESTIAL TRANSIT & NEBULA',
    title: 'NOCTURNAL',
    quote: '“Where prehistoric granite cradles the quiet monarch beneath a billion burning suns.”',
    coordinates: 'BORTLE 2 ASTRONOMICAL BELT',
    coordinatesSubtext: '25.15° N, 73.22° E',
    badgeLabel: 'ASTRONOMICAL EXPEDITION PASS',
    actionLabel: 'PLAN YOUR STORY',
    actionHref: '#quick-planner',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk',
    localFallbackUrl: '/images/celestial-hero.png',
    specsRibbon: [
      { label: 'LIGHT POLLUTION', value: 'CLASS 2 BORTLE', isPrimary: false },
      { label: 'APEX WATCH', value: 'MIDNIGHT PROWL', isPrimary: true },
      { label: 'TERRAIN', value: 'MAGMA GRANITE RIFT', isPrimary: false },
    ],
    chips: [
      { label: 'Milky Way Core', variant: 'primary' },
      { label: 'Astro-Wildlife Recon', variant: 'tertiary' },
      { label: 'Pitch Slate Void', variant: 'variant' },
    ],
    soundFrequencyText: '24 DB QUIET • DEEP SKY OBSERVATORY',
    progress: 100,
  },
];

export function ScrollableHeroStage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  // IntersectionObserver to detect which slide is currently in view as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
              setActiveIdx(index);
            }
          });
        },
        {
          threshold: [0.45, 0.6, 0.8],
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSlide = (idx: number) => {
    const target = slideRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlide = HERO_SLIDES[activeIdx];

  return (
    <div className="relative w-full">
      {/* Floating Pinned Lateral Header Elements (Stick over the 4 slides) */}
      <div className="sticky top-28 left-0 w-full z-30 pointer-events-none px-margin-mobile md:px-margin flex items-start justify-between -mb-28">
        {/* Active Slide Counter */}
        <div className="pointer-events-auto">
          <Counter
            current={currentSlide.slideNumber}
            total="04"
            variant="standard"
          />
        </div>

        {/* Dynamic Coordinate Tag */}
        <div className="pointer-events-auto hidden sm:flex items-center gap-2.5 px-4 py-2 bg-[#F8FAF8]/70 backdrop-blur-md shadow-2xl border border-white/5 transition-all duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#005B5C] animate-pulse shadow-[0_0_8px_#FDBA21]" />
          <span className="font-label-nav text-label-nav text-[#667085] uppercase tracking-[0.22em]">
            {currentSlide.coordinates}
          </span>
        </div>
      </div>

      {/* Floating Side Rail: Scroll Prompt & Slide Dots */}
      <div className="fixed left-6 md:left-margin top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-6 pointer-events-auto">
        <button
          onClick={() => scrollToSlide((activeIdx + 1) % HERO_SLIDES.length)}
          className="group flex flex-col items-center gap-3 cursor-pointer text-left"
          title="Scroll to next slide"
        >
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-300"
              style={{
                height: `${((activeIdx + 1) / HERO_SLIDES.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 group-hover:text-primary transition-colors [writing-mode:vertical-lr] rotate-180">
            SCROLL TO EXPLORE
          </span>
          <span className="material-symbols-outlined text-white/40 group-hover:text-primary transition-colors text-sm animate-bounce">
            arrow_downward
          </span>
        </button>

        {/* Quick jump dot indicators */}
        <div className="flex flex-col items-center gap-2 pt-2">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Jump to slide ${s.slideNumber}`}
              className={`w-1.5 transition-all duration-300 rounded-full ${
                activeIdx === idx
                  ? 'h-6 bg-[#005B5C] shadow-[0_0_8px_#FDBA21]'
                  : 'h-1.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full-bleed Vertical Scroll Container for the 4 Slides */}
      <div className="w-full">
        {HERO_SLIDES.map((slide, idx) => (
          <section
            key={slide.id}
            ref={(el) => {
              slideRefs.current[idx] = el;
            }}
            className="relative w-full min-h-[100svh] h-screen overflow-hidden flex flex-col justify-between select-none"
          >
            {/* Background Image Layer with smooth scale on scroll */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out will-change-transform scale-100"
              style={{
                backgroundImage: `url('${slide.imageUrl}'), url('${slide.localFallbackUrl}')`,
              }}
            />

            {/* Cinematic Multi-tier Gradient & Ambient Scrims */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface-container-lowest/30 to-surface-container-lowest/90 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-surface-container-lowest/20 to-surface-container-lowest/70 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent pointer-events-none" />

            {/* Top Spacer for Nav clearance */}
            <div className="h-28 w-full" />

            {/* Slide Centerpiece Content */}
            <div className="relative z-10 px-margin-mobile md:px-margin max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto pointer-events-none">
              {/* Kicker */}
              <div className="pointer-events-auto inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#005B5C]" />
                <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
                  {slide.kicker}
                </span>
                <span className="w-6 h-[1px] bg-[#005B5C]" />
              </div>

              {/* Main Headline */}
              <h2 className="pointer-events-auto font-display-hero text-headline-lg-mobile md:text-[7rem] lg:text-[8.5rem] leading-none font-extrabold tracking-tighter text-white drop-shadow-2xl uppercase">
                {slide.title}
              </h2>

              {/* Editorial Quote */}
              <p className="pointer-events-auto font-editorial-quote italic text-body-md md:text-editorial-quote text-white/85 max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed px-4 drop-shadow-md">
                {slide.quote}
              </p>

              {/* Optional Chips row for Slide 02 & 04 */}
              {slide.chips && slide.chips.length > 0 && (
                <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 mt-6">
                  {slide.chips.map((chip, cIdx) => (
                    <Chip key={cIdx} variant={chip.variant}>
                      {chip.label}
                    </Chip>
                  ))}
                </div>
              )}

              {/* Optional Specs Ribbon for Slide 01, 03 & 04 */}
              {slide.specsRibbon && slide.specsRibbon.length > 0 && (
                <div className="pointer-events-auto hidden md:flex items-center gap-8 mt-7 px-6 py-2.5 bg-[#F8FAF8]/50 backdrop-blur-md border border-white/5 shadow-2xl">
                  {slide.specsRibbon.map((spec, sIdx) => (
                    <React.Fragment key={sIdx}>
                      {sIdx > 0 && <div className="w-1 h-1 bg-white/20 rounded-full" />}
                      <div className="flex items-center gap-2">
                        <span className="font-label-nav text-[10px] text-white/40 uppercase tracking-widest">
                          {spec.label}
                        </span>
                        <span
                          className={`font-body-sm text-body-sm font-medium tracking-wide ${
                            spec.isPrimary ? 'text-primary' : 'text-white'
                          }`}
                        >
                          {spec.value}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Audio Monitor for Slide 03 & 04 */}
              {slide.soundFrequencyText && (
                <div className="pointer-events-auto mt-4 inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/5 text-[11px] font-mono text-white/60 tracking-wider">
                  <span className="material-symbols-outlined text-xs text-primary animate-pulse">
                    graphic_eq
                  </span>
                  <span>{slide.soundFrequencyText}</span>
                </div>
              )}
            </div>

            {/* Bottom Row: CTA Button & Scroll Cue */}
            <div className="relative z-20 w-full px-margin-mobile md:px-margin pb-16 flex items-end justify-between pointer-events-none">
              {/* Bottom Left: Coordinates Subtext if available */}
              <div className="pointer-events-auto hidden md:block">
                <span className="font-label-nav text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {slide.coordinatesSubtext || '25.10° N · 73.15° E — RAJASTHAN'}
                </span>
              </div>

              {/* Bottom Center: Animated Mouse Scroll Indicator */}
              <button
                onClick={() =>
                  idx === HERO_SLIDES.length - 1
                    ? document.getElementById('quick-planner')?.scrollIntoView({ behavior: 'smooth' })
                    : scrollToSlide(idx + 1)
                }
                className="pointer-events-auto mx-auto flex flex-col items-center gap-2 group cursor-pointer"
                title="Scroll down"
              >
                <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center pt-1.5 group-hover:border-primary transition-colors">
                  <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-primary transition-colors font-mono">
                  {idx === HERO_SLIDES.length - 1 ? 'DISCOVER PACKAGES' : 'SCROLL DOWN'}
                </span>
              </button>

              {/* Bottom Right: Slide CTA */}
              <div className="pointer-events-auto">
                <Button
                  href={slide.actionHref}
                  variant="primary-editorial"
                  icon="arrow_forward"
                >
                  {slide.actionLabel}
                </Button>
              </div>
            </div>

            {/* Timeline Progress Bar along the bottom of each slide */}
            <ProgressBar initialProgress={slide.progress} />
          </section>
        ))}
      </div>
    </div>
  );
}
