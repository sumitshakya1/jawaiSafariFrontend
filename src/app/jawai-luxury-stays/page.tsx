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
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/jawai-hotels-resorts" className="hover:text-[#005B5C] transition-colors">Hotels & Resorts</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-semibold">Luxury Stays</span>
        </div>

        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF8F6] border border-[#005B5C]/20 text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Ultra-Luxury Safari & Royal Heritage
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Luxury Stays & Wilderness Suites in Jawai
          </h1>
          <p className="text-sm md:text-base text-[#263238] font-light leading-relaxed">
            The pinnacle of Indian wilderness hospitality. Featuring world-renowned canvas suites, private temperature-controlled plunge pools, 16th-century royal Rajput fortress estates, and private master trackers.
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
                className="rounded-3xl bg-white border border-[#DDE7E5] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#0A7B75] hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden bg-[#EEF8F6]">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003F40]/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold shadow-sm">
                      {hotel.tag}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-white font-semibold">
                      {hotel.location}
                    </span>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-mono text-[#005B5C] font-bold uppercase tracking-wider block mb-1">
                      {hotel.categoryLabel}
                    </span>
                    <h2 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-3 group-hover:text-[#0A7B75] transition-colors">
                      {hotel.name}
                    </h2>
                    <p className="text-xs md:text-sm text-[#263238] font-light leading-relaxed mb-6">
                      {hotel.overview}
                    </p>

                    <div className="space-y-2 mb-6">
                      {hotel.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#263238] font-light">
                          <span className="material-symbols-outlined text-sm text-[#005B5C] shrink-0 mt-0.5">
                            star
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-[#DDE7E5]">
                  <div className="flex items-center justify-between mb-4 pt-4">
                    <span className="text-xs font-mono text-[#667085]">{hotel.distanceFromStation}</span>
                    <span className="text-xs font-mono text-[#005B5C] font-bold uppercase">
                      Custom Bespoke Quote
                    </span>
                  </div>
                  <a
                    href={hotelWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-sm"
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
        <div className="p-8 md:p-12 rounded-3xl bg-[#EEF8F6] border border-[#DDE7E5] text-center shadow-sm">
          <h3 className="text-2xl font-display-brand font-bold text-[#005B5C] mb-2">Need Private Airport Transfers or Helicopter Charter?</h3>
          <p className="text-xs md:text-sm text-[#263238] font-light max-w-2xl mx-auto mb-6 leading-relaxed">
            We coordinate direct Mercedes / Innova Crysta transfers from Udaipur (UDR) or Jodhpur (JDH) airports directly to your resort doorstep, as well as Jawai helipad coordination.
          </p>
          <a
            href={buildWhatsAppUrl({
              packageOrExperienceName: 'VIP Airport & Helipad Transfer Coordination',
              canonicalPath: '/jawai-luxury-stays',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-[#263238] font-bold text-xs font-mono uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Talk to Luxury Concierge (+91 73000 03101)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
