import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jawai Travel Blog & Safari Stories | Ghoomosa',
  description:
    'Reviewed, experience-led travel guides, wildlife photography tips, seasonal notes, and safari stories from the granite hills of Jawai.',
};

const BLOG_ARTICLES = [
  {
    slug: 'complete-jawai-travel-guide',
    title: 'Complete Jawai Travel Guide: What to Know Before You Go',
    category: 'Pillar Guide',
    date: 'October 2026',
    author: 'Ghoomosa Field Team',
    desc: 'Everything you need to plan a trip to Jawai: route maps, best times, wildlife expectations, and why no ethical operator can guarantee sightings.',
    readTime: '6 min read',
    targetLink: '/jawai-travel-guide',
  },
  {
    slug: 'best-time-to-visit-jawai-seasonal-guide',
    title: 'Best Time to Visit Jawai: Season-by-Season Guide',
    category: 'Seasonal Planning',
    date: 'October 2026',
    author: 'Ghoomosa Field Team',
    desc: 'Comparing winter flamingos, summer waterhole tracking, and monsoon emerald landscapes across the Aravalli kopjes.',
    readTime: '4 min read',
    targetLink: '/best-time-to-visit-jawai',
  },
  {
    slug: 'things-to-do-in-jawai-beyond-leopard-safari',
    title: 'Things to Do in Jawai Beyond the Leopard Safari',
    category: 'Experiences',
    date: 'October 2026',
    author: 'Ghoomosa Field Team',
    desc: 'From Jawai Dam bird watching to 4x4 rock crawling and living Rabari pastoral culture walks.',
    readTime: '5 min read',
    targetLink: '/things-to-do-in-jawai',
  },
  {
    slug: 'how-to-reach-jawai-routes',
    title: 'How to Reach Jawai from Udaipur, Jodhpur, Jaipur and Ahmedabad',
    category: 'Transport & Logistics',
    date: 'October 2026',
    author: 'Ghoomosa Field Team',
    desc: 'Accurate airport distances, driving hours, train junction stops at Falna and Jawai Bandh, and private taxi transfers.',
    readTime: '4 min read',
    targetLink: '/how-to-reach-jawai',
  },
  {
    slug: 'responsible-wildlife-travel-jawai',
    title: 'Travel Responsibly in Jawai: Wildlife & Community Etiquette',
    category: 'Conservation',
    date: 'October 2026',
    author: 'Ghoomosa Field Team',
    desc: 'The 12 golden principles every traveler should follow to protect leopards, respect Rabari shepherds, and keep the wilderness pristine.',
    readTime: '5 min read',
    targetLink: '/responsible-travel',
  },
];

export default function BlogHubPage() {
  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Travel Blog</span>
        </div>

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Editorial & Guides
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jawai Safari Blog & Expedition Guides
          </h1>
          <p className="text-base text-white/70 max-w-2xl leading-relaxed">
            Reviewed, experience-led and fact-checked travel guides designed to help you plan an unforgettable wilderness and cultural expedition in Jawai.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {BLOG_ARTICLES.map((art, idx) => (
            <Link
              key={idx}
              href={art.targetLink}
              className="block p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e8a455]/50 transition-all group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/50 mb-3">
                <span className="text-[#e8a455] font-bold uppercase">{art.category}</span>
                <span>
                  {art.date} • {art.readTime} • By {art.author}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#e8a455] transition-colors mb-3">
                {art.title}
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-4">{art.desc}</p>
              <span className="text-xs font-mono uppercase text-white/80 group-hover:text-white flex items-center gap-1">
                <span>Read Full Guide</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
