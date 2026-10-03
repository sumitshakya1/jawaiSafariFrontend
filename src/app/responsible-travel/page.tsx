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
    desc: 'Keep noise low and let wildlife remain undisturbed in their natural granite caves.',
    icon: 'volume_off',
  },
  {
    title: 'Say No to Plastic',
    desc: 'Avoid single-use plastic and help keep Jawai’s pristine boulder landscapes clean.',
    icon: 'delete_sweep',
  },
  {
    title: 'Respect Wildlife',
    desc: 'Never feed, chase, provoke or disturb animals during game drives.',
    icon: 'pets',
  },
  {
    title: 'Arrive Early',
    desc: 'Reach at least 30 minutes before your confirmed safari or activity departure time.',
    icon: 'schedule',
  },
  {
    title: 'No Flash Photography',
    desc: 'Protect wildlife eyesight by avoiding artificial flash during dawn, dusk, and nocturnal sightings.',
    icon: 'flash_off',
  },
  {
    title: 'Follow Your Guide',
    desc: 'Always follow instructions from your verified naturalist, tracker, or driver.',
    icon: 'badge',
  },
  {
    title: 'Keep a Safe Distance',
    desc: 'Do not ask operators to approach wildlife too closely for photographs.',
    icon: 'straighten',
  },
  {
    title: 'Do Not Litter',
    desc: 'Carry all waste back to the lodge and dispose of it in designated recycling bins.',
    icon: 'recycling',
  },
  {
    title: 'Respect Local Communities',
    desc: 'Respect traditions, sacred temples, property, and local Rabari pastoral ways of life.',
    icon: 'diversity_1',
  },
  {
    title: 'Ask Before Photographing People',
    desc: 'Always obtain courteous consent before photographing village residents or private spaces.',
    icon: 'photo_camera',
  },
  {
    title: 'Avoid Loud Music',
    desc: 'Keep natural and community buffer areas peaceful. No loudspeakers in wilderness zones.',
    icon: 'music_off',
  },
  {
    title: 'Wildlife Is Wild',
    desc: 'Sightings depend entirely on natural animal movements and can never be artificially guaranteed.',
    icon: 'nature',
  },
];

export default function ResponsibleTravelPage() {
  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C]">Home</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Responsible Travel</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Conservation & Etiquette
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Responsible Travel & Wildlife Awareness
          </h1>
          <p className="text-sm md:text-base text-[#667085] italic font-light">
            &ldquo;Explore freely. Travel responsibly. Leave only footprints and stories behind.&rdquo;
          </p>
        </div>

        {/* 12 Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {GUIDELINES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center shrink-0 border border-[#005B5C]/20">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#667085]">#{idx + 1}</span>
                  <h3 className="text-base font-bold text-[#005B5C]">{item.title}</h3>
                </div>
                <p className="text-xs text-[#263238] font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] text-center shadow-sm">
          <h3 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-2">
            Join Us in Preserving the Jawai Habitat
          </h3>
          <p className="text-sm text-[#263238] font-light max-w-xl mx-auto mb-6 leading-relaxed">
            Ghoomosa is dedicated to ethical wildlife encounters, supporting Rabari craft communities, and keeping the granite kopjes pristine.
          </p>
          <Link
            href="/jawai-tour-packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-sm"
          >
            <span>Explore Ethical Safari Packages</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
