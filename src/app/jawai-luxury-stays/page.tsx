import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JAWAI_HOTELS } from '@/constants/hotelsData';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export const metadata: Metadata = {
  title: 'Luxury Stays & Ultra-Luxury Camps in Jawai | Ghoomosa',
  description:
    'Experience high-end wilderness luxury in Jawai with private plunge pool suites, Relais & Châteaux style camps, dedicated master naturalists and fine dining.',
};

export default function LuxuryStaysPage() {
  const luxuryHotels = JAWAI_HOTELS.filter(
    (h) => h.category === 'ultra-luxury' || h.category === 'heritage-fort'
  );

  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/jawai-hotels-resorts" className="hover:text-white transition-colors">Hotels & Resorts</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Luxury Stays</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Ultra-Luxury Safari & Royal Heritage
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Luxury Stays & Wilderness Suites in Jawai
          </h1>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            The pinnacle of Indian wilderness hospitality. Featuring world-renowned Relais & Châteaux canvas suites, private temperature-controlled plunge pools, 16th-century royal Rajput fortress estates, and private master trackers.
          </p>
        </div>

        {/* Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {luxuryHotels.map((hotel) => {
            const hotelWhatsApp = buildWhatsAppUrl({
              packageOrExperienceName: `${hotel.name} (Ultra Luxury Suite)`,
              canonicalPath: '/jawai-luxury-stays',
              customMessage: `Hi Ghoomosa, I am inquiring about booking a luxury suite at *${hotel.name}* in Jawai. Please share availability and bespoke inclusions.`,
            });

            return (
              <div
                key={hotel.id}
                className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#e8a455]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-[#e8a455] border border-[#e8a455]/30">
                      {hotel.tag}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-white/80">
                      {hotel.location}
                    </span>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-mono text-[#e8a455] uppercase tracking-wider block mb-1">
                      {hotel.categoryLabel}
                    </span>
                    <h2 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-[#e8a455] transition-colors">
                      {hotel.name}
                    </h2>
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-6">
                      {hotel.overview}
                    </p>

                    <div className="space-y-2 mb-6">
                      {hotel.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/85">
                          <span className="material-symbols-outlined text-sm text-[#e8a455] shrink-0 mt-0.5">
                            star
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-white/50">{hotel.distanceFromStation}</span>
                    <span className="text-xs font-mono text-[#e8a455] font-bold uppercase">
                      Custom Bespoke Quote
                    </span>
                  </div>
                  <a
                    href={hotelWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#e8a455] to-[#c98335] hover:from-[#ffc27e] hover:to-[#e8a455] text-black font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(232,164,85,0.3)]"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>Request Luxury Quotation</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Helicopter & VIP Transfer Notice */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need Private Airport Transfers or Helicopter Charter?</h3>
          <p className="text-xs md:text-sm text-white/70 max-w-2xl mx-auto mb-6">
            We coordinate direct Mercedes / Innova Crysta transfers from Udaipur (UDR) or Jodhpur (JDH) airports directly to your resort doorstep, as well as Jawai helipad coordination.
          </p>
          <a
            href={buildWhatsAppUrl({
              packageOrExperienceName: 'VIP Airport & Helipad Transfer Coordination',
              canonicalPath: '/jawai-luxury-stays',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Talk to Luxury Concierge (+91 73000 03101)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
