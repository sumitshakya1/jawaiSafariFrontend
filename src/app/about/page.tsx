import React from 'react';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="w-full min-h-[calc(100vh-6rem)] bg-surface text-[#263238] px-margin-mobile md:px-margin py-16">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#005B5C]" />
            <span className="font-label-nav text-label-nav uppercase tracking-[0.25em] text-[#005B5C] font-bold">
              THE NOCTURNAL SAFARI EDITORIAL
            </span>
          </div>
          <h1 className="font-display-hero text-headline-lg md:text-[3.75rem] font-extrabold uppercase tracking-tight text-white leading-tight">
            Raw Geological Brutality Meets Editorial Elegance
          </h1>
          <p className="font-editorial-quote italic text-[#667085] text-xl md:text-2xl leading-relaxed max-w-3xl">
            “Formed over a billion years ago from subterranean magma cooling into colossal granite
            kopjes, Jawai is an ancient crucible where apex predators roam freely alongside nomadic
            shepherds under dark desert skies.”
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
          <div className="space-y-4">
            <span className="font-label-nav text-xs text-primary uppercase tracking-widest">
              The Rabari Coexistence Pact
            </span>
            <h2 className="font-headline-sm text-2xl font-bold text-white">
              Centuries of Sacred Custodianship
            </h2>
            <p className="font-body-md text-[#667085] leading-relaxed text-sm md:text-base">
              Unlike wildlife reserves enclosed by fences and artificial boundaries, Jawai is a living
              ecosystem where the red-turbaned Rabari pastoralists honor an unwritten ancestral pact.
              Leopards are considered sacred manifestations of Chamunda Mata, protected by the community
              as natural custodians of the kopjes.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-label-nav text-xs text-primary uppercase tracking-widest">
              Field Ethos &amp; Tracking
            </span>
            <h2 className="font-headline-sm text-2xl font-bold text-white">
              Zero-Intrusion Observation
            </h2>
            <p className="font-body-md text-[#667085] leading-relaxed text-sm md:text-base">
              Every expedition is curated with absolute respect for feline nocturnal habits. We deploy
              specialized low-lux infrared optics, maintain disciplined distance thresholds, and navigate
              strictly on natural gravel trails to prevent erosion of delicate savannah topsoil.
            </p>
          </div>
        </div>

        {/* Core Architectural Pillars */}
        <div className="bg-white border border-white/10 p-8 md:p-12 space-y-8">
          <span className="font-label-nav text-xs uppercase tracking-widest text-[#005B5C]">
            Editorial Design System Principles
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="font-label-counter text-xs text-white/50 tracking-widest">01</span>
              <h3 className="font-headline-sm text-lg font-bold text-white">Razor-Sharp Geometry</h3>
              <p className="font-body-sm text-xs text-[#667085] leading-relaxed">
                Strict 0px corner radius applied unconditionally across buttons, image viewports, and cards to evoke cut granite and precision expedition gear.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-label-counter text-xs text-white/50 tracking-widest">02</span>
              <h3 className="font-headline-sm text-lg font-bold text-white">Pitch Slate Canvas</h3>
              <p className="font-body-sm text-xs text-[#667085] leading-relaxed">
                Monochrome nocturnal slates (#10131a, #0b0e15) framed with golden amber accents (#FDBA21) mirroring sunset hitting raw volcanic kopjes.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-label-counter text-xs text-white/50 tracking-widest">03</span>
              <h3 className="font-headline-sm text-lg font-bold text-white">Literary Typography</h3>
              <p className="font-body-sm text-xs text-[#667085] leading-relaxed">
                Monolithic Montserrat 800 display titles paired with romantic Playfair Display editorial italics from historic field travel journals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div>
            <h4 className="font-headline-sm text-xl font-bold text-white">Ready for the nocturnal field?</h4>
            <p className="font-body-sm text-[#667085] text-sm mt-1">Join an upcoming seasonal tracking chapter in Jawai.</p>
          </div>
          <Button href="/contact" variant="primary-editorial" icon="arrow_forward">
            REQUEST EXPEDITION BRIEFING
          </Button>
        </div>
      </div>
    </div>
  );
}
