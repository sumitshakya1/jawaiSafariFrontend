'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GHOOMOSA_SOCIALS, SocialIconSVG } from '@/components/common/SocialIcons';

export function Footer() {
  const pathname = usePathname();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the fixed minimal footer once scrolled deep into content on multi-section pages
      if (window.scrollY > 400 && pathname === '/') {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (pathname === '/') {
    return null;
  }

  return (
    <footer className="w-full fixed bottom-8 left-0 z-40 pointer-events-none transition-opacity duration-300">
      <div className="w-full px-margin-mobile md:px-margin flex items-end justify-between">
        <div className="pointer-events-auto">
          <span className="font-label-nav text-label-nav uppercase tracking-[0.2em] text-on-surface-variant/70">
            Discover nature
          </span>
        </div>

        <div className="pointer-events-auto hidden md:flex flex-col items-center gap-2">
          <div className="w-5 h-9 rounded-full border border-on-surface/40 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>

        <div className="w-10" />
      </div>
    </footer>
  );
}
