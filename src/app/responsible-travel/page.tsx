import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Responsible Travel & Wildlife Awareness | Ghoomosa',
  description:
    'Explore freely. Travel responsibly. Discover Ghoomosa’s 12 wildlife and community guidelines for ethical travel in Jawai, Rajasthan.',
};

const GUIDELINES = [
  {
    title: 'Maintain Silence',
    desc: 'Keep noise low and let wildlife remain undisturbed.',
    icon: 'volume_off',
  },
  {
    title: 'Say No to Plastic',
    desc: 'Avoid single-use plastic and help keep Jawai clean.',
    icon: 'delete_sweep',
  },
  {
    title: 'Respect Wildlife',
    desc: 'Never feed, chase, provoke or disturb animals.',
    icon: 'pets',
  },
  {
    title: 'Arrive Early',
    desc: 'Reach at least 30 minutes before your confirmed safari or activity time.',
    icon: 'schedule',
  },
  {
    title: 'No Flash Photography',
    desc: 'Protect wildlife by avoiding flash during dawn/dusk and nocturnal sightings.',
    icon: 'flash_off',
  },
  {
    title: 'Follow Your Guide',
    desc: 'Always follow instructions from your naturalist, driver or authorized operator.',
    icon: 'badge',
  },
  {
    title: 'Keep a Safe Distance',
    desc: 'Do not ask operators to approach wildlife too closely for photographs.',
    icon: 'straighten',
  },
  {
    title: 'Do Not Litter',
    desc: 'Carry waste back to the lodge and dispose of it responsibly.',
    icon: 'recycling',
  },
  {
    title: 'Respect Local Communities',
    desc: 'Respect traditions, privacy, property and local Rabari ways of life.',
    icon: 'diversity_1',
  },
  {
    title: 'Ask Before Photographing People',
    desc: 'Obtain consent before photographing residents or private spaces.',
    icon: 'photo_camera',
  },
  {
    title: 'Avoid Loud Music',
    desc: 'Keep natural and community areas peaceful. No loud speakers in buffer zones.',
    icon: 'music_off',
  },
  {
    title: 'Wildlife Is Wild',
    desc: 'Sightings depend entirely on nature and can never be guaranteed.',
    icon: 'nature',
  },
];

export default function ResponsibleTravelPage() {
  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#FDBA21]">Responsible Travel</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#005B5C]/30 border border-[#0A7B75]/40 text-[#FDBA21] text-xs font-mono uppercase tracking-widest mb-3">
            Conservation & Etiquette
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Responsible Travel & Wildlife Awareness
          </h1>
          <p className="text-sm md:text-base text-white/70 italic">
            &ldquo;Explore freely. Travel responsibly. Leave only stories behind.&rdquo;
          </p>
        </div>

        {/* 12 Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {GUIDELINES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#005B5C]/20 text-[#FDBA21] flex items-center justify-center shrink-0 border border-[#0A7B75]/30">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-white/40">#{idx + 1}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-black/80 to-black/40 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Join Us in Preserving the Jawai Habitat</h3>
          <p className="text-xs text-white/70 max-w-xl mx-auto mb-6">
            Ghoomosa is dedicated to ethical wildlife encounters, supporting Rabari craft communities, and keeping the granite kopjes clean.
          </p>
          <Link
            href="/jawai-tour-packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FDBA21] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#FDBA21] transition-all"
          >
            <span>Explore Ethical Safari Packages</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
