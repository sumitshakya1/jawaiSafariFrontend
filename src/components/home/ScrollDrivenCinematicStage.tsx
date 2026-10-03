'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GHOOMOSA_PACKAGES } from '@/global/constants/packages';
import { WhatsAppButton } from '@/global/components/cta/WhatsAppButton';
import { SITE_CONFIG } from '@/global/config/site.config';
import { GHOOMOSA_SOCIALS, SocialIconSVG } from '@/components/common/SocialIcons';

interface Scene {
  id: string;
  number: string;
  kicker: string;
  title: string;
  fontSizeClass: string;
  titleOffsetClass: string;
  containerOffsetClass?: string;
  subtitle?: string;
  imageUrl: string;
  cutoutUrl?: string;
}

const SCENES: Scene[] = [
  {
    id: 'scene-01',
    number: '01',
    kicker: 'LAND OF THE LEOPARD',
    title: 'JAWAI',
    fontSizeClass: 'text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem]',
    titleOffsetClass: '-translate-y-14 sm:-translate-y-18 md:-translate-y-24',
    subtitle: 'Granite thrones sculpted by antiquity, where predators walk amidst quiet temples.',
    imageUrl: '/images/jawai-hero.png',
    cutoutUrl: '/images/jawai-cutout.png',
  },
  {
    id: 'scene-02',
    number: '02',
    kicker: 'DUSK TRACKING & SAVANNAH',
    title: 'SAFARI',
    fontSizeClass: 'text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] lg:text-[10.5rem]',
    titleOffsetClass: '-translate-y-12 sm:-translate-y-16 md:-translate-y-22',
    containerOffsetClass: '-translate-y-24 sm:-translate-y-32 md:-translate-y-40 lg:-translate-y-48',
    subtitle: 'Ghost of the granite boulders, stalking the golden amber twilight.',
    imageUrl: '/images/safari-hero.png',
    cutoutUrl: '/images/safari-cutout.png',
  },
  {
    id: 'scene-03',
    number: '03',
    kicker: 'JAWAI DAM & LAKE SANCTUARY',
    title: 'SANCTUARY',
    fontSizeClass: 'text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.8rem]',
    titleOffsetClass: '-translate-y-12 sm:-translate-y-16 md:-translate-y-22',
    containerOffsetClass: '-translate-y-24 sm:-translate-y-32 md:-translate-y-40 lg:-translate-y-48',
    subtitle: 'Where reflective waters meet ancient granite hills, fostering wild harmony across the sanctuary.',
    imageUrl: '/images/sanctuary-hero.png',
    cutoutUrl: '/images/sanctuary-cutout.png',
  },
  {
    id: 'scene-04',
    number: '04',
    kicker: 'CELESTIAL TRANSIT & NEBULA',
    title: 'NOCTURNAL',
    fontSizeClass: 'text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.8rem]',
    titleOffsetClass: '-translate-y-12 sm:-translate-y-16 md:-translate-y-22',
    containerOffsetClass: '-translate-y-24 sm:-translate-y-32 md:-translate-y-40 lg:-translate-y-48',
    subtitle: 'Where prehistoric granite cradles the quiet monarch beneath a billion burning suns.',
    imageUrl: '/images/celestial-hero.png',
    cutoutUrl: '/images/celestial-cutout.png',
  },
];

// ─── Smooth Easing Functions ──────────────────────────────────────────────────

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function sceneOpacity(idx: number, p: number): number {
  const d = Math.abs(p - idx);
  return d >= 1 ? 0 : easeInOut(1 - d);
}

// ─── Main Export: Shreyansh.io Overlapping Card-Stacking Scroll ────────────────

export function ScrollDrivenCinematicStage() {
  const [activeIdx, setActiveIdx]       = useState(0);
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const handleScroll = useCallback(() => {
    const vh = window.innerHeight;
    // Determine which card is currently taking center stage in the viewport
    let current = 0;
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      // If card top is at or above viewport top, it's pinned/active
      if (rect.top <= vh * 0.4) {
        current = idx;
      }
    });
    setActiveIdx(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToCard = (index: number) => {
    const target = cardRefs.current[index];
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-[#07090e]">
      {/* ── Fixed Floating HUD Overlay Across All Stacking Cards ─────────────── */}

      {/* 1. Counter Top-Left (e.g. 01 / 04) */}
      <div className="fixed top-20 md:top-24 left-6 md:left-12 z-50 pointer-events-none flex items-baseline">
        <span className="font-mono text-2xl md:text-3xl font-black text-white tracking-wider">
          0{activeIdx + 1}
        </span>
        <span className="font-mono text-xs md:text-sm font-semibold text-white/40 ml-1.5">
          / 0{SCENES.length}
        </span>
      </div>

      {/* 2. Left Rail: Interactive Scene Dots & Quick Scroll */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 pointer-events-auto">
        <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
          <div
            className="absolute left-0 w-full bg-[#e8a455] will-change-transform"
            style={{
              height: '33%',
              top: `${(activeIdx / (SCENES.length - 1)) * 67}%`,
              transition: 'top 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />
        </div>
        <div className="flex flex-col gap-3 mt-1">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollToCard(i)}
              title={`Go to ${s.title}`}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                cursor: 'pointer',
                background: activeIdx === i ? '#e8a455' : 'rgba(255,255,255,0.3)',
                transform: activeIdx === i ? 'scale(1.5)' : 'scale(1)',
                transition: 'transform 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (activeIdx >= SCENES.length - 1) {
              const target = cardRefs.current[SCENES.length - 1];
              if (target) {
                const top = target.getBoundingClientRect().bottom + window.scrollY;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            } else {
              scrollToCard(activeIdx + 1);
            }
          }}
          className="group flex flex-col items-center gap-2 cursor-pointer pt-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors [writing-mode:vertical-rl] rotate-180">
            scroll to explore
          </span>
          <span className="material-symbols-outlined text-[13px] text-[#e8a455] rotate-90 group-hover:translate-y-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* 3. Bottom Status Bar & Mouse Wheel Indicator */}
      <div className="fixed bottom-6 md:bottom-8 left-0 w-full z-50 pointer-events-none px-6 md:px-12 flex items-end justify-between">
        <div className="pointer-events-auto">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            Discover nature
          </span>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="pointer-events-auto hidden md:flex flex-col items-center gap-2">
          <button
            onClick={() => {
              if (activeIdx >= SCENES.length - 1) {
                const target = cardRefs.current[SCENES.length - 1];
                if (target) {
                  const top = target.getBoundingClientRect().bottom + window.scrollY;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              } else {
                scrollToCard(activeIdx + 1);
              }
            }}
            className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center pt-1.5 cursor-pointer hover:border-[#e8a455] transition-colors"
            aria-label="Scroll down"
          >
            <div
              className="w-1 h-2 rounded-full bg-[#e8a455]"
              style={{ animation: 'scrollWheel 1.8s ease-in-out infinite' }}
            />
          </button>
        </div>

        {/* Right spacer */}
        <div className="w-10" />
      </div>

      {/* ── Overlapping Sticky Cards Stack (shreyansh.io interaction style) ── */}
      <div className="relative w-full">
        {SCENES.map((scene, i) => (
          <section
            key={scene.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`sticky top-0 w-full h-screen min-h-[100svh] overflow-hidden select-none bg-black flex flex-col justify-between ${
              i > 0
                ? 'rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[48px] shadow-[0_-30px_70px_rgba(0,0,0,0.95)] border-t border-white/15'
                : ''
            }`}
            style={{
              zIndex: i + 10,
            }}
          >
            {/* 1. Full-bleed Background 4K Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${scene.imageUrl}')`,
              }}
            />

            {/* 2. Atmospheric Ambient Scrims */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-30" />

            {/* 3. Top Spacer for Header Clearance */}
            <div className="relative z-10 w-full h-24 md:h-28" />

            {/* 4. Centerpiece Typography */}
            <div className={`relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto pointer-events-none pb-12 md:pb-16 ${scene.containerOffsetClass || ''}`}>
              {/* Kicker Accent */}
              <div className="pointer-events-auto inline-flex items-center gap-3 mb-2 md:mb-3">
                <span className="w-6 md:w-10 h-[1px] bg-[#e8a455]" />
                <span className="font-mono text-[10px] sm:text-xs md:text-sm font-semibold text-[#e8a455] tracking-[0.35em] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {scene.kicker}
                </span>
                <span className="w-6 md:w-10 h-[1px] bg-[#e8a455]" />
              </div>

              {/* Monumental Hero Title with Atmospheric Theme Gradient & Bottom Blur/Fade */}
              <h1
                className={`pointer-events-auto font-display-hero ${scene.fontSizeClass} leading-none font-black tracking-tight uppercase select-none bg-gradient-to-b from-white via-white/90 to-white/20 bg-clip-text text-transparent drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]`}
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0.05) 100%)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.45) 85%, rgba(0,0,0,0.05) 100%)',
                }}
              >
                {scene.title}
              </h1>

              {/* Poetic Subtitle */}
              {scene.subtitle && (
                <p className="pointer-events-auto font-editorial-quote italic text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto mt-3 md:mt-4 leading-relaxed px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  {scene.subtitle}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Curated Expedition Manifest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="bg-[#0e1015] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">
                  ADVENTURA • EXPEDITION MANIFEST
                </span>
              </div>
              <h2 className="font-display-hero text-2xl md:text-4xl text-white uppercase">
                Curated Jawai Expeditions
              </h2>
              <p className="text-xs text-white/50 mt-1">
                Request an immediate quotation on WhatsApp ({SITE_CONFIG.phone}).
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {GHOOMOSA_PACKAGES.slice(0, 4).map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white/5 border border-white/10 p-5 flex flex-col justify-between hover:border-white/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-primary px-2 py-0.5 bg-primary/10 border border-primary/20">
                        {pkg.id}
                      </span>
                      <span className="text-[11px] font-mono text-white/60">{pkg.duration}</span>
                    </div>
                    <h3 className="font-display-hero text-lg text-white uppercase mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-white/50 line-clamp-2 mb-4">{pkg.overview}</p>
                    <div className="text-[11px] font-mono text-white/40 mb-4">
                      Best For: {pkg.bestFor}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/80 font-bold">
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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/40">
              <span>Direct WhatsApp Desk: {SITE_CONFIG.phone}</span>
              <a href="/contact" className="text-white hover:underline flex items-center gap-1">
                <span>Request Custom Briefing Form</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollWheel {
          0%   { opacity: 1; transform: translateY(0); }
          60%  { opacity: 0; transform: translateY(12px); }
          61%  { opacity: 0; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        }
      `}</style>
    </div>
  );
}
