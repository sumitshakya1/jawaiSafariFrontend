'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { GHOOMOSA_PACKAGES, GhoomosaPackage } from '@/global/constants/packages';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';
import { SITE_CONFIG } from '@/global/config/site.config';
import { GHOOMOSA_SOCIALS, SocialIconSVG } from '@/components/common/SocialIcons';

interface Slide {
  id: string;
  number: string;
  kicker: string;
  title: string;
  quote: string;
  coordinates: string;
  actionLabel: string;
  imageUrl: string;
  localFallbackUrl: string;
  chips?: { label: string; variant?: string }[];
  specs?: { label: string; value: string; isPrimary?: boolean }[];
  soundText?: string;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-01',
    number: '01',
    kicker: 'LAND OF THE LEOPARD',
    title: 'JAWAI',
    quote: '“Granite thrones sculpted by antiquity, where predators walk amidst quiet temples.”',
    coordinates: '25.10° N, 73.15° E — KOPJES EXPEDITION',
    actionLabel: 'EXPLORE MORE +',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpsLVyq-O-k06M9ro5BZ2twuDnq8V01cc6KE2OY2-pl3vJssFkEWFJ6ZjFkW1Ea3hpZNbwIrNp1LqrZMcP6k9gwSo1pTAGggUY85ZDKzlZTbclelVdRIwn6yi_TR62ZNDYW3mMSFynlU_4Aid8jThqgYNHZmQz4UBi8IXPIMy5TAw4QqKXb_HxHcGhfquWS26F4FKI8mRfMjCEz0cUl-u16mmgpFakVIyEZWbVJ4svF85hdDO7A-2',
    localFallbackUrl: '/images/jawai-hero.png',
    specs: [
      { label: 'HABITAT', value: 'Plutonic Rock Outcrops', isPrimary: true },
      { label: 'SPECIES', value: 'Panthera Pardus Fusca' },
      { label: 'SANCTUARY', value: 'Rabari Belt' },
    ],
  },
  {
    id: 'slide-02',
    number: '02',
    kicker: 'DUSK TRACKING & SAVANNAH',
    title: 'SAFARI',
    quote: '“Ghost of the granite boulders, stalking the golden amber twilight.”',
    coordinates: 'DUSK TRACKING & SAVANNAH — 25° 04′ N',
    actionLabel: 'EXPLORE MORE +',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIPiNWp9eFK-PVFUY4iOnThDWnm0511bfJG0cIkNYg3F2yxi44KRk6VoxGtUrnAejP1KSOCgIuwUJYDQ5CCLox8BuTIE1mGOOf2BWZ3_n2qkKWxAH-ptrX-qD5yW3p5ayBp7cEL3uZVkRxKoMvm19WFwxkpi0hzODspPEud_R-BTRsBcW0mv5jmdtIPDbdp_3uSryIcFlXS-VRjJTPP76TXpQYlQEm69OpbcINw1c1YSnGaznTutLy',
    localFallbackUrl: '/images/safari-hero.png',
    chips: [
      { label: 'Rabari Coexistence' },
      { label: 'Custom 4x4 Tracking' },
      { label: '25° 04′ N · Jawai Hills' },
    ],
  },
  {
    id: 'slide-03',
    number: '03',
    kicker: 'JAWAI DAM & LAKE SANCTUARY',
    title: 'SANCTUARY',
    quote: '“Where reflective waters meet ancient granite hills, fostering wild harmony across the sanctuary.”',
    coordinates: 'JAWAI WATER SANCTUARY — 25.1324° N, 73.1897° E',
    actionLabel: 'EXPLORE MORE +',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi4bN6KG0yG7Y2ro0_oFLqeeX7z7nqZkeRM6fU50zpUeDkwqD2QdHO03zAMn7PDNr3s14mTvGs4QTVQ81GsjQOJTrWdbgT24i13F4YSmi5pdb2RiimNmTP26-nQIysddNZcs3mXXpSWWAp-ehvTINrm-g13eDDomh6SJqxAUF1P6pNTuvYdFh169c2xy9jHxRmD46Me12ISTSwsUhwNrMWO7pgGRmgVldQ6m2yn7acAT7XMvf8hzM1',
    localFallbackUrl: '/images/sanctuary-hero.png',
    specs: [
      { label: 'ELEVATION', value: '580 MTRS' },
      { label: 'SOLITARY APEX', value: 'PANTHERA PARDUS FUSCA', isPrimary: true },
      { label: 'SANCTUARY WATERS', value: 'JAWAI DAM BASIN' },
    ],
    soundText: '38 DB AMBIENCE • LAKE WATERS',
  },
  {
    id: 'slide-04',
    number: '04',
    kicker: 'CELESTIAL TRANSIT & NEBULA',
    title: 'NOCTURNAL',
    quote: '“Where prehistoric granite cradles the quiet monarch beneath a billion burning suns.”',
    coordinates: 'BORTLE 2 ASTRONOMICAL BELT — 25.15° N, 73.22° E',
    actionLabel: 'EXPLORE MORE +',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkdZsQC5g0czXw5AkyxBJFXVynjxcEm6SNsdaaT6fbhnVaFtO4Het47TQ6fZtXaLoFhzAFAE5_IWGTq-QHu9BEmYPs7lJRxlfV3c94orI605nfPQ422-xz_L_gnWIoGvrXzgBj1L0x1Z1rt_DETl7rXeQ5wH36CixmgZxJscnVoHugymjSWYTCC41yrUCuGdJNJOVrSmKLDxk3unzWnUh-UjgQK_Bw9M6OK9rQnB-10Z0HvW04Gxtk',
    localFallbackUrl: '/images/celestial-hero.png',
    specs: [
      { label: 'LIGHT POLLUTION', value: 'CLASS 2 BORTLE' },
      { label: 'APEX WATCH', value: 'MIDNIGHT PROWL', isPrimary: true },
      { label: 'TERRAIN', value: 'MAGMA GRANITE RIFT' },
    ],
    chips: [
      { label: 'Milky Way Core' },
      { label: 'Astro-Wildlife Recon' },
      { label: 'Pitch Slate Void' },
    ],
    soundText: '24 DB QUIET • DEEP SKY OBSERVATORY',
  },
];

export function VerticalScrollPresentation() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<GhoomosaPackage | null>(null);

  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);

  const goToNextSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    setActiveIdx((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0));
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 850);
  }, []);

  const goToPrevSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : SLIDES.length - 1));
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 850);
  }, []);

  const goToSlide = (idx: number) => {
    if (isAnimatingRef.current || idx === activeIdx) return;
    setActiveIdx(idx);
    isAnimatingRef.current = true;
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 850);
  };

  // Mouse wheel scroll listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent standard document scrolling so the vertical slide transition controls the view
      e.preventDefault();
      if (isAnimatingRef.current) return;

      if (e.deltaY > 25) {
        goToNextSlide();
      } else if (e.deltaY < -25) {
        goToPrevSlide();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const delta = touchStartYRef.current - e.changedTouches[0].clientY;
      if (delta > 45) {
        goToNextSlide();
      } else if (delta < -45) {
        goToPrevSlide();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimatingRef.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide]);

  const currentSlide = SLIDES[activeIdx];

  return (
    <div className="relative w-full h-screen min-h-[100svh] overflow-hidden select-none bg-[#F8FAF8]">
      {/* 1. FIXED PINNED TOP LEFT SLIDE COUNTER (Flips smoothly on scroll) */}
      <div className="fixed top-24 md:top-28 left-6 md:left-margin z-40 pointer-events-auto flex items-center gap-3">
        <div className="flex items-baseline overflow-hidden h-9">
          <div
            className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateY(-${activeIdx * 2.25}rem)` }}
          >
            {SLIDES.map((s) => (
              <span
                key={s.id}
                className="font-display-hero text-2xl md:text-3xl font-extrabold text-white h-9 flex items-center"
              >
                {s.number}
              </span>
            ))}
          </div>
          <span className="font-label-counter text-xs md:text-sm text-white/40 ml-1.5 self-center">
            / 04
          </span>
        </div>
      </div>

      {/* 2. FIXED PINNED TOP RIGHT COORDINATES TAG */}
      <div className="fixed top-24 md:top-28 right-6 md:right-margin z-40 pointer-events-none hidden sm:flex items-center gap-2.5 px-4 py-2 bg-[#F8FAF8]/70 backdrop-blur-md border border-white/10 shadow-2xl">
        <span className="w-1.5 h-1.5 rounded-full bg-[#005B5C] animate-pulse shadow-[0_0_8px_#FDBA21]" />
        <span className="font-label-nav text-label-nav text-[#667085] uppercase tracking-[0.22em]">
          {currentSlide.coordinates}
        </span>
      </div>

      {/* 3. FIXED PINNED LEFT SIDE RAIL (Progress Line, Text, Down Arrow) */}
      <div className="fixed left-6 md:left-margin top-[46%] -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4 pointer-events-auto">
        {/* Track Line with moving segment */}
        <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#005B5C] transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              height: '33%',
              top: `${(activeIdx / (SLIDES.length - 1)) * 67}%`,
            }}
          />
        </div>

        {/* Vertical Text prompt */}
        <button
          onClick={goToNextSlide}
          className="group flex flex-col items-center gap-2 cursor-pointer pt-2"
          title="Click to scroll down"
        >
          <span className="font-label-nav text-[9px] uppercase tracking-[0.3em] text-white/50 group-hover:text-primary transition-colors [writing-mode:vertical-rl] rotate-180">
            scroll down to explore
          </span>
          <span className="material-symbols-outlined text-[13px] text-primary rotate-90 group-hover:translate-y-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* 4. VERTICAL SLIDING CANVAS CONTAINER */}
      <div
        className="w-full h-full flex flex-col transition-transform duration-850 ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform"
        style={{
          transform: `translateY(-${activeIdx * 100}%)`,
        }}
      >
        {SLIDES.map((slide, sIdx) => (
          <section
            key={slide.id}
            className="w-full h-screen min-h-[100svh] flex-shrink-0 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Full-bleed Scenic Photo Layer */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out ${
                activeIdx === sIdx ? 'scale-100' : 'scale-105'
              }`}
              style={{
                backgroundImage: `url('${slide.imageUrl}'), url('${slide.localFallbackUrl}')`,
              }}
            />

            {/* Ambient Vignette & Scrims */}
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest/90 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-surface-container-lowest/20 to-surface-container-lowest/70 pointer-events-none" />

            {/* Top clearance */}
            <div className="h-28 w-full" />

            {/* Slide Centerpiece Content */}
            <div className="relative z-10 px-margin-mobile md:px-margin max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto pointer-events-none">
              {/* Kicker */}
              <div className="pointer-events-auto inline-flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-6 h-[1px] bg-[#005B5C]" />
                <span className="font-label-counter text-[11px] font-semibold text-primary tracking-[0.35em] uppercase">
                  {slide.kicker}
                </span>
                <span className="w-6 h-[1px] bg-[#005B5C]" />
              </div>

              {/* Massive Monolith Title */}
              <h1 className="pointer-events-auto font-display-hero text-headline-lg-mobile md:text-[7.5rem] lg:text-[9.5rem] leading-none font-extrabold tracking-tighter text-white drop-shadow-2xl uppercase transition-transform duration-700">
                {slide.title}
              </h1>

              {/* Editorial Quote */}
              <p className="pointer-events-auto font-editorial-quote italic text-body-md md:text-editorial-quote text-white/80 max-w-xl mx-auto mt-4 md:mt-6 leading-relaxed px-4 drop-shadow-sm">
                {slide.quote}
              </p>

              {/* Chips row */}
              {slide.chips && (
                <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 mt-6">
                  {slide.chips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-4 py-1.5 bg-[#F8FAF8]/60 border border-white/10 text-white/80 text-xs font-mono tracking-wider backdrop-blur-sm"
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              )}

              {/* Micro-specs Ribbon */}
              {slide.specs && (
                <div className="pointer-events-auto hidden lg:flex items-center gap-8 mt-7 px-6 py-2.5 bg-[#F8FAF8]/50 backdrop-blur-md border border-white/10 shadow-2xl">
                  {slide.specs.map((spec, spIdx) => (
                    <React.Fragment key={spIdx}>
                      {spIdx > 0 && <div className="w-1 h-1 bg-white/20 rounded-full" />}
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

              {/* Sound Frequency Monitor */}
              {slide.soundText && (
                <div className="pointer-events-auto mt-4 inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/5 text-[11px] font-mono text-white/60 tracking-wider">
                  <span className="material-symbols-outlined text-xs text-primary animate-pulse">
                    graphic_eq
                  </span>
                  <span>{slide.soundText}</span>
                </div>
              )}
            </div>

            {/* Bottom Row inside each slide: Explore More Button on Right */}
            <div className="relative z-30 w-full px-margin-mobile md:px-margin pb-20 md:pb-24 flex items-end justify-between pointer-events-none">
              <div className="hidden md:block">
                {/* Spacer to balance the layout */}
              </div>

              <div className="pointer-events-auto ml-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#005B5C] text-on-primary font-bold text-xs md:text-sm uppercase tracking-widest px-6 md:px-8 py-3.5 md:py-4 flex items-center gap-2 shadow-[0_4px_25px_rgba(232,164,85,0.3)] hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>{slide.actionLabel}</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5. FIXED PINNED BOTTOM BAR (Discover nature, Mouse icon, Social links) */}
      <div className="fixed bottom-6 md:bottom-8 left-0 w-full z-40 pointer-events-none px-margin-mobile md:px-margin flex items-end justify-between">
        <div className="pointer-events-auto">
          <span className="font-label-nav text-label-nav uppercase tracking-[0.2em] text-[#667085]/70">
            Discover nature
          </span>
        </div>

        {/* Center Mouse Scroll Wheel Icon */}
        <div className="pointer-events-auto hidden md:flex flex-col items-center gap-2">
          <button
            onClick={goToNextSlide}
            className="w-5 h-9 rounded-full border border-on-surface/40 flex items-start justify-center pt-1.5 cursor-pointer hover:border-primary transition-colors"
            title="Scroll to next slide"
          >
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </button>
        </div>

        {/* Right spacer */}
        <div className="w-10" />
      </div>

      {/* 6. EXPEDITION PACKAGES & BRIEFING MODAL (Opens upon clicking EXPLORE MORE +) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="bg-[#F8FAF8] border border-primary/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">
                  GHOOMOSA • EXPEDITION MANIFEST
                </span>
              </div>
              <h2 className="font-display-hero text-2xl md:text-4xl text-white uppercase">
                Curated Jawai Expeditions
              </h2>
              <p className="text-body-sm text-[#667085] mt-1">
                Select an expedition to inspect the day-by-day itinerary or request a customized written quotation on WhatsApp (+91 73000 03101).
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {GHOOMOSA_PACKAGES.slice(0, 4).map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white/70 border border-white/10 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-primary px-2 py-0.5 bg-primary/10 border border-primary/20">
                        {pkg.id}
                      </span>
                      <span className="text-[11px] font-mono text-white/60">
                        {pkg.duration}
                      </span>
                    </div>
                    <h3 className="font-display-hero text-lg text-white uppercase mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#667085] line-clamp-2 mb-4">
                      {pkg.overview}
                    </p>
                    <div className="text-[11px] font-mono text-white/50 mb-4">
                      Best For: {pkg.bestFor}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-bold">
                      PRICE ON REQUEST
                    </span>
                    <WhatsAppButton
                      packageId={pkg.id}
                      packageName={pkg.name}
                      duration={pkg.duration}
                      size="sm"
                      variant="editorial"
                    >
                      Get Quote
                    </WhatsAppButton>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Notice */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              <span>Direct WhatsApp Desk: {SITE_CONFIG.phone}</span>
              <a
                href="/contact"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Request Custom Briefing Form</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
