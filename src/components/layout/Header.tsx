'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export function Header() {
  const pathname = usePathname();
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

          // 1. Ambient Savanna Night Wind
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

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(320, ctx.currentTime);

          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(0.18, ctx.currentTime);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(140, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(filter.frequency);
          lfo.start();

          windNoise.connect(filter);
          filter.connect(masterGain);
          windNoise.start();

          // 2. Midnight Field Crickets (High pitch subtle pulse)
          const cricketOsc = ctx.createOscillator();
          cricketOsc.type = 'sine';
          cricketOsc.frequency.setValueAtTime(4600, ctx.currentTime);

          const cricketGain = ctx.createGain();
          cricketGain.gain.setValueAtTime(0.015, ctx.currentTime);

          const tremolo = ctx.createOscillator();
          tremolo.frequency.setValueAtTime(14, ctx.currentTime);
          const tremoloGain = ctx.createGain();
          tremoloGain.gain.setValueAtTime(0.012, ctx.currentTime);
          tremolo.connect(tremoloGain);
          tremoloGain.connect(cricketGain.gain);
          tremolo.start();

          cricketOsc.connect(cricketGain);
          cricketGain.connect(masterGain);
          cricketOsc.start();
        } else {
          if (audioCtxRef.current.state === 'suspended') {
            await audioCtxRef.current.resume();
          }
          if (masterGainRef.current) {
            masterGainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
            masterGainRef.current.gain.setValueAtTime(
              masterGainRef.current.gain.value,
              audioCtxRef.current.currentTime
            );
            masterGainRef.current.gain.exponentialRampToValueAtTime(
              0.35,
              audioCtxRef.current.currentTime + 0.5
            );
          }
        }
        setSoundActive(true);
      } catch (err) {
        console.warn('Audio Context interaction error:', err);
      }
    } else {
      if (audioCtxRef.current && masterGainRef.current) {
        masterGainRef.current.gain.cancelScheduledValues(audioCtxRef.current.currentTime);
        masterGainRef.current.gain.setValueAtTime(
          masterGainRef.current.gain.value,
          audioCtxRef.current.currentTime
        );
        masterGainRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.4
        );
        setTimeout(() => {
          setSoundActive(false);
        }, 400);
      } else {
        setSoundActive(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
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
      className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDE7E5] py-2.5 sm:py-3'
          : 'bg-white border-b border-[#DDE7E5]/80 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="w-full px-3.5 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link
            className="flex items-center group"
            href="/"
            title="Ghoomosa – Trips That Become Stories"
          >
            <Image
              src="/images/ghoomosa-logo.png"
              alt="Ghoomosa – Trips That Become Stories"
              width={220}
              height={74}
              priority
              quality={90}
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Center Nav - Charcoal text #263238, active/hover Deep Teal #005B5C */}
        <nav className="hidden xl:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[12px] font-mono uppercase tracking-[0.16em] transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#005B5C] font-bold border-b-2 border-[#005B5C]'
                    : 'text-[#263238] hover:text-[#005B5C] font-medium'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Sound + Get Quote (Deep Teal CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          {/* Ambient Sound Toggle Button - hidden on tiny mobile, visible sm+ */}
          <button
            onClick={toggleSound}
            className={`hidden sm:flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border select-none ${
              soundActive
                ? 'text-[#005B5C] bg-[#EEF8F6] border-[#0A7B75] shadow-sm font-semibold'
                : 'text-[#263238] hover:text-[#005B5C] bg-[#F8FAF8] hover:bg-[#EEF8F6] border-[#DDE7E5]'
            }`}
            type="button"
            title={soundActive ? 'Mute Ambient Audio' : 'Play Ambient Jawai Safari Audio'}
            aria-label={soundActive ? 'Mute Ambient Audio' : 'Play Ambient Jawai Safari Audio'}
          >
            {soundActive ? (
              <div className="flex items-center gap-[2px] h-3.5">
                <span className="w-[2px] h-3 bg-[#005B5C] animate-pulse" />
                <span className="w-[2px] h-2 bg-[#005B5C] animate-pulse [animation-delay:0.2s]" />
                <span className="w-[2px] h-3.5 bg-[#005B5C] animate-pulse [animation-delay:0.4s]" />
                <span className="w-[2px] h-1.5 bg-[#005B5C] animate-pulse [animation-delay:0.1s]" />
              </div>
            ) : (
              <svg className="w-3.5 h-3.5 fill-current text-[#005B5C]" viewBox="0 0 24 24">
                <path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" />
              </svg>
            )}
            <span className="font-semibold">{soundActive ? '38 dB' : 'Sound'}</span>
          </button>

          {/* Primary CTA: Get Quote (Deep Teal #005B5C) */}
          <a
            href={getQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] font-semibold transition-all duration-200 cursor-pointer px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white bg-[#005B5C] hover:bg-[#0A7B75] shadow-sm hover:shadow"
          >
            <span>Get Quote</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-[#263238] hover:text-[#005B5C] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-white border-b border-[#DDE7E5] px-6 py-6 flex flex-col gap-3 shadow-lg max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-mono uppercase tracking-wider text-[#263238] hover:text-[#005B5C] py-2 border-b border-[#DDE7E5]/50 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/jawai-safari-booking"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-[#263238] hover:text-[#005B5C] py-2 border-b border-[#DDE7E5]/50 font-medium"
          >
            Safari Booking Enquiry
          </Link>
          <Link
            href="/responsible-travel"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-[#263238] hover:text-[#005B5C] py-2 border-b border-[#DDE7E5]/50 font-medium"
          >
            Responsible Travel
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-wider text-[#263238] hover:text-[#005B5C] py-2"
          >
            Contact Concierge
          </Link>
          <a
            href={getQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest shadow-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Get Quote on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
