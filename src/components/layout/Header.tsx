'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export function Header() {
  const pathname = usePathname();
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  // Toggle ambient night safari audio
  const toggleSound = async () => {
    if (!soundActive) {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

        if (!audioCtxRef.current) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          if (ctx.state === 'suspended') {
            await ctx.resume();
          }

          // Master volume gain
          const masterGain = ctx.createGain();
          masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.8);
          masterGain.connect(ctx.destination);
          masterGainRef.current = masterGain;

          // 1. Ambient Savanna Night Wind (Filtered Pink Noise with Slow Breeze Modulation)
          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.15;
            b6 = white * 0.115926;
          }

          const windNoise = ctx.createBufferSource();
          windNoise.buffer = noiseBuffer;
          windNoise.loop = true;

          const windFilter = ctx.createBiquadFilter();
          windFilter.type = 'lowpass';
          windFilter.frequency.setValueAtTime(450, ctx.currentTime);
          windFilter.Q.setValueAtTime(1.5, ctx.currentTime);

          // Slow breeze modulation
          const breezeLfo = ctx.createOscillator();
          breezeLfo.frequency.setValueAtTime(0.15, ctx.currentTime);
          const breezeLfoGain = ctx.createGain();
          breezeLfoGain.gain.setValueAtTime(180, ctx.currentTime);
          breezeLfo.connect(breezeLfoGain);
          breezeLfoGain.connect(windFilter.frequency);

          const windGain = ctx.createGain();
          windGain.gain.setValueAtTime(0.25, ctx.currentTime);

          windNoise.connect(windFilter);
          windFilter.connect(windGain);
          windGain.connect(masterGain);

          windNoise.start();
          breezeLfo.start();

          // 2. High-Frequency Aravalli Crickets Atmosphere
          const cricketGain = ctx.createGain();
          cricketGain.gain.setValueAtTime(0.04, ctx.currentTime);

          const cricketOsc = ctx.createOscillator();
          cricketOsc.type = 'sine';
          cricketOsc.frequency.setValueAtTime(4800, ctx.currentTime);

          // Fast cricket pulse modulation
          const cricketLfo = ctx.createOscillator();
          cricketLfo.type = 'sawtooth';
          cricketLfo.frequency.setValueAtTime(14, ctx.currentTime);

          const cricketLfoGain = ctx.createGain();
          cricketLfoGain.gain.setValueAtTime(0.03, ctx.currentTime);

          cricketLfo.connect(cricketLfoGain);
          cricketLfoGain.connect(cricketGain.gain);

          cricketOsc.connect(cricketGain);
          cricketGain.connect(masterGain);

          cricketOsc.start();
          cricketLfo.start();

          // 3. Warm Cinematic Luxury Ambient Drone (Deep Night Resonance)
          const droneGain = ctx.createGain();
          droneGain.gain.setValueAtTime(0.08, ctx.currentTime);

          const droneOsc1 = ctx.createOscillator();
          droneOsc1.type = 'sine';
          droneOsc1.frequency.setValueAtTime(110, ctx.currentTime); // A2

          const droneOsc2 = ctx.createOscillator();
          droneOsc2.type = 'triangle';
          droneOsc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3 fifth

          const droneFilter = ctx.createBiquadFilter();
          droneFilter.type = 'lowpass';
          droneFilter.frequency.setValueAtTime(220, ctx.currentTime);

          droneOsc1.connect(droneFilter);
          droneOsc2.connect(droneFilter);
          droneFilter.connect(droneGain);
          droneGain.connect(masterGain);

          droneOsc1.start();
          droneOsc2.start();
        } else {
          if (audioCtxRef.current.state === 'suspended') {
            await audioCtxRef.current.resume();
          }
          if (masterGainRef.current) {
            masterGainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
            masterGainRef.current.gain.setValueAtTime(
              Math.max(masterGainRef.current.gain.value, 0.001),
              audioCtxRef.current.currentTime
            );
            masterGainRef.current.gain.exponentialRampToValueAtTime(
              0.35,
              audioCtxRef.current.currentTime + 0.6
            );
          }
        }
        setSoundActive(true);
      } catch (err) {
        console.warn('Audio Context initialization error:', err);
        setSoundActive(true);
      }
    } else {
      if (audioCtxRef.current && masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
        masterGainRef.current.gain.setValueAtTime(
          Math.max(masterGainRef.current.gain.value, 0.001),
          audioCtxRef.current.currentTime
        );
        masterGainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.5
        );
      }
      setSoundActive(false);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Jawai', href: '/jawai', match: (p: string) => p === '/jawai' },
    { label: 'Experiences', href: '/jawai-leopard-safari', match: (p: string) => p.includes('safari') || p.includes('watching') || p.includes('dam') || p.includes('crocodile') || p.includes('hill-drive') || p.includes('village') || p.includes('photography') },
    { label: 'Packages', href: '/jawai-tour-packages', match: (p: string) => p.startsWith('/jawai-tour-packages') || p.includes('tour') },
    { label: 'Stay', href: '/jawai-hotels-resorts', match: (p: string) => p === '/jawai-hotels-resorts' || p === '/jawai-luxury-stays' },
    { label: 'Corporate', href: '/jawai-corporate-tour', match: (p: string) => p === '/jawai-corporate-tour' },
    { label: 'Travel Guide', href: '/jawai-travel-guide', match: (p: string) => p === '/jawai-travel-guide' || p === '/things-to-do-in-jawai' || p === '/best-time-to-visit-jawai' || p === '/how-to-reach-jawai' },
    { label: 'About', href: '/about', match: (p: string) => p === '/about' },
    { label: 'Contact', href: '/contact', match: (p: string) => p === '/contact' },
  ];

  const getQuoteUrl = buildWhatsAppUrl({
    packageOrExperienceName: 'Jawai Expedition Planning',
    canonicalPath: '/',
    customMessage:
      'Hi Ghoomosa, I would like to request a customized quotation for a Jawai trip. Please share options and availability.',
  });

  return (
    <header
      className="fixed top-0 left-0 w-full z-[60] bg-gradient-to-b from-black/80 via-black/25 to-transparent py-5 pointer-events-auto border-none transition-opacity duration-300"
    >
      <div className="w-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link
            className="flex flex-col group"
            href="/"
            title="Ghoomosa — Trips That Become Stories"
          >
            <span className="font-serif font-black text-lg md:text-xl lg:text-2xl tracking-[0.25em] text-white uppercase group-hover:text-[#e8a455] transition-colors leading-tight">
              GHOOMOSA
            </span>
            <span className="text-[9px] font-mono tracking-[0.22em] text-[#e8a455] uppercase block font-semibold">
              Trips That Become Stories
            </span>
          </Link>
        </div>

        {/* Center Nav */}
        <nav className="hidden xl:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] font-mono uppercase tracking-[0.18em] transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#e8a455] font-bold'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Sound + Get Quote (Primary CTA on far right) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Ambient Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer px-3.5 py-2 rounded-full border select-none ${
              soundActive
                ? 'text-[#e8a455] bg-[#e8a455]/15 border-[#e8a455]/40 shadow-[0_0_20px_rgba(232,164,85,0.25)]'
                : 'text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/25'
            }`}
            type="button"
            title={soundActive ? 'Mute Ambient Audio' : 'Play Ambient Jawai Safari Audio'}
          >
            {soundActive ? (
              <div className="flex items-center gap-[2px] h-3.5">
                <span className="w-[2px] h-3 bg-[#e8a455] animate-pulse" />
                <span className="w-[2px] h-2 bg-[#e8a455] animate-pulse [animation-delay:0.2s]" />
                <span className="w-[2px] h-3.5 bg-[#e8a455] animate-pulse [animation-delay:0.4s]" />
                <span className="w-[2px] h-1.5 bg-[#e8a455] animate-pulse [animation-delay:0.1s]" />
              </div>
            ) : (
              <span className="material-symbols-outlined text-sm text-[#e8a455]">
                graphic_eq
              </span>
            )}
            <span className="font-semibold">{soundActive ? '38 dB' : 'Sound'}</span>
          </button>

          {/* Primary CTA: Get Quote (Matching Sound button size & design) */}
          <a
            href={getQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] font-semibold transition-all duration-200 cursor-pointer px-3.5 py-2 rounded-full border select-none text-white/90 hover:text-white bg-white/5 hover:bg-[#e8a455]/15 border-white/10 hover:border-[#e8a455]/40 hover:shadow-[0_0_20px_rgba(232,164,85,0.25)]"
          >
            <span>Get Quote</span>
            <span className="material-symbols-outlined text-sm text-[#e8a455]">
              arrow_outward
            </span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-black/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 backdrop-blur-2xl max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-[#e8a455] py-2 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/jawai-safari-booking"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-[#e8a455] py-2 border-b border-white/5"
          >
            Safari Booking Enquiry
          </Link>
          <Link
            href="/responsible-travel"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-[#e8a455] py-2 border-b border-white/5"
          >
            Responsible Travel
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-white py-2"
          >
            Contact
          </Link>
          <a
            href={getQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Get Quote on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
