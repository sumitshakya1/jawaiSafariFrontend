import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full min-h-[calc(100vh-6rem)] bg-[#F8FAF8] text-[#263238] px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#005B5C]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#005B5C] font-bold">
              ABOUT GHOOMOSA JAWAI
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display-brand font-bold text-[#005B5C] tracking-tight leading-tight">
            Raw Geological Splendor Meets Curated Wildlife Safaris
          </h1>
          <p className="italic text-[#667085] text-lg md:text-xl leading-relaxed max-w-3xl font-light">
            “Formed over 850 million years ago from subterranean magma cooling into colossal granite
            kopjes, Jawai is an ancient crucible where wild leopards roam freely alongside Rabari
            pastoralists under wide open skies.”
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#DDE7E5]">
          <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-4">
            <span className="font-mono text-xs text-[#005B5C] uppercase tracking-widest font-bold">
              The Rabari Coexistence Pact
            </span>
            <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
              Centuries of Sacred Custodianship
            </h2>
            <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
              Unlike wildlife reserves enclosed by fences and artificial boundaries, Jawai is a living
              ecosystem where the red-turbaned Rabari pastoralists honor an unwritten ancestral pact.
              Leopards are considered sacred manifestations of Chamunda Mata, protected by the community
              as natural custodians of the kopjes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#DDE7E5] shadow-sm space-y-4">
            <span className="font-mono text-xs text-[#005B5C] uppercase tracking-widest font-bold">
              Field Ethos &amp; Tracking
            </span>
            <h2 className="text-2xl font-display-brand font-bold text-[#005B5C]">
              Zero-Intrusion Observation
            </h2>
            <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
              Every expedition is curated with absolute respect for feline habits. We deploy
              specialized trackers with deep local knowledge, maintain disciplined distance thresholds, and navigate
              strictly on natural gravel trails to prevent erosion of delicate savannah topsoil.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-white border border-[#DDE7E5] rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-[#005B5C] font-bold">
            Our Core Expedition Commitments
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#005B5C] font-bold tracking-widest">01</span>
              <h3 className="text-lg font-bold text-[#005B5C]">Verified Stays & Naturalists</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Hand-inspected wilderness lodges, tented camps, and certified local trackers ensuring safe, authentic encounters.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#005B5C] font-bold tracking-widest">02</span>
              <h3 className="text-lg font-bold text-[#005B5C]">Responsible Wildlife Code</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Strict speed limits, no off-roading across fragile scrubland, and complete avoidance of artificial spotlights.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#005B5C] font-bold tracking-widest">03</span>
              <h3 className="text-lg font-bold text-[#005B5C]">Transparent Expert Guidance</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Customized itineraries tailored for families, couples, photographers, and corporate teams with direct WhatsApp assistance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] shadow-sm">
          <div>
            <h4 className="text-xl font-display-brand font-bold text-[#005B5C]">Ready for your Jawai safari?</h4>
            <p className="text-sm text-[#667085] font-light mt-1">Join an upcoming seasonal tracking chapter in Jawai with Ghoomosa.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all shrink-0"
          >
            <span>Request Expedition Briefing</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
