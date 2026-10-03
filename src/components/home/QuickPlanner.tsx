'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/global/config/site.config';
import { buildWhatsAppUrl } from '@/global/lib/whatsapp/buildWhatsAppUrl';

export function QuickPlanner() {
  const [travelMonth, setTravelMonth] = useState('October 2026');
  const [travellers, setTravellers] = useState('2 Adults');
  const [stayCategory, setStayCategory] = useState('Luxury Wilderness Camp');
  const [interest, setInterest] = useState('Leopard Safari & Astrophotography');

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Hi Ghoomosa, I am planning a Jawai trip.
- Travel Month: ${travelMonth}
- Travellers: ${travellers}
- Stay Preference: ${stayCategory}
- Primary Interest: ${interest}
Please share customized packages and best quotation.`;

    const url = buildWhatsAppUrl({ customMessage });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="quick-planner"
      className="relative w-full py-12 md:py-16 bg-surface-container-lowest border-y border-white/10 z-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="bg-surface-container-low/80 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary">
                  FAST QUOTATION DESK
                </span>
              </div>
              <h3 className="font-display-hero text-2xl md:text-3xl text-white uppercase tracking-tight">
                Plan Your Jawai Story
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Tell us your travel window and preferences. Our destination desk prepares an itemized proposal via WhatsApp.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block text-[11px] font-mono px-3 py-1 bg-primary/10 border border-primary/20 text-primary">
                NO ONLINE PAYMENT REQUIRED • 100% TAILORED
              </span>
            </div>
          </div>

          <form onSubmit={handleWhatsAppEnquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Travel Month */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                Travel Month / Dates
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-surface-container-lowest border border-white/15 text-white px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
              >
                <option value="October 2026">October 2026 (Migratory Dawn)</option>
                <option value="November 2026">November 2026 (Pleasant Wildlife)</option>
                <option value="December 2026">December 2026 (Winter Peak)</option>
                <option value="January 2027">January 2027 (Crisp Mornings)</option>
                <option value="February 2027">February 2027 (Golden Sunlight)</option>
                <option value="March 2027">March 2027 (Summer Twilight Prowl)</option>
              </select>
            </div>

            {/* Travellers Count */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                Travellers
              </label>
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full bg-surface-container-lowest border border-white/15 text-white px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
              >
                <option value="Solo Traveller">Solo Adventurer</option>
                <option value="2 Adults (Couple)">2 Adults (Couple / Romantic)</option>
                <option value="Family (2 Adults + 1-2 Kids)">Family (2 Adults + Kids)</option>
                <option value="Small Group (4-6 Travellers)">Small Group (4-6 Friends)</option>
                <option value="Corporate Offsite (10+ Travellers)">Corporate Offsite (10+)</option>
              </select>
            </div>

            {/* Stay Preference */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                Stay Category
              </label>
              <select
                value={stayCategory}
                onChange={(e) => setStayCategory(e.target.value)}
                className="w-full bg-surface-container-lowest border border-white/15 text-white px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
              >
                <option value="Luxury Wilderness Camp">Luxury Wilderness Tented Lodge</option>
                <option value="Boutique Nature Cottages">Boutique Granite Cottages</option>
                <option value="Heritage Haveli & Homestay">Heritage Haveli & Homestay</option>
                <option value="Experiential Safari Camp">Experiential Nature Camp</option>
              </select>
            </div>

            {/* Submit WhatsApp CTA */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-primary-container/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(232,164,85,0.3)] active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span className="text-xs md:text-sm">Get WhatsApp Quote</span>
              </button>
            </div>
          </form>

          {/* Micro trust text */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
            <span>Direct WhatsApp: {SITE_CONFIG.phone}</span>
            <span>Response Window: Typically within 30 minutes</span>
            <span>No booking charges • Free itinerary consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
