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
Travel Month: ${travelMonth}
Travellers: ${travellers}
Stay Category: ${stayCategory}
Interests: ${interest}
Please share customized quotation and availability.`;

    const url = buildWhatsAppUrl({
      packageOrExperienceName: 'Custom Jawai Itinerary Builder',
      customMessage,
    });
    window.open(url, '_blank');
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#F8FAF8]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDE7E5] shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold text-[#005B5C] uppercase tracking-[0.25em] block mb-2">
              BUILD YOUR JAWAI STORY
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display-brand text-[#005B5C]">
              Request a Custom Itinerary
            </h2>
            <p className="mt-2 text-xs md:text-sm text-[#475467] font-light">
              Select your travel window and stay style. Our local team prepares a verified itinerary without obligation.
            </p>
          </div>

          <form onSubmit={handleWhatsAppEnquiry} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Travel Month */}
              <div>
                <label htmlFor="travelMonth" className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-semibold mb-2">
                  When Are You Planning?
                </label>
                <select
                  id="travelMonth"
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DDE7E5] rounded-xl px-4 py-3 text-xs text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0A7B75]/20 focus:border-[#0A7B75]"
                >
                  <option>October 2026</option>
                  <option>November 2026</option>
                  <option>December 2026</option>
                  <option>January 2027</option>
                  <option>February 2027</option>
                  <option>March 2027</option>
                  <option>April – September 2027 (Summer & Monsoon)</option>
                </select>
              </div>

              {/* Travellers */}
              <div>
                <label htmlFor="travellers" className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-semibold mb-2">
                  Number of Travellers
                </label>
                <select
                  id="travellers"
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DDE7E5] rounded-xl px-4 py-3 text-xs text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0A7B75]/20 focus:border-[#0A7B75]"
                >
                  <option>Solo Explorer (1 Person)</option>
                  <option>Couple / Pair (2 Adults)</option>
                  <option>Small Family (2 Adults + 1-2 Kids)</option>
                  <option>Group of Friends (4-8 Travellers)</option>
                  <option>Corporate Team (10+ Members)</option>
                </select>
              </div>

              {/* Stay Preference */}
              <div>
                <label htmlFor="stayCategory" className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-semibold mb-2">
                  Stay Style & Category
                </label>
                <select
                  id="stayCategory"
                  value={stayCategory}
                  onChange={(e) => setStayCategory(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DDE7E5] rounded-xl px-4 py-3 text-xs text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0A7B75]/20 focus:border-[#0A7B75]"
                >
                  <option>Ultra-Luxury Wilderness Camp (e.g. SUJÁN style)</option>
                  <option>Premium Heritage Lodge & Suites</option>
                  <option>Comfort Nature Retreat / Farm Stay</option>
                  <option>Eco Tents & Glamping</option>
                </select>
              </div>

              {/* Primary Interests */}
              <div>
                <label htmlFor="interest" className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-semibold mb-2">
                  Key Experiences
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#FFFFFF] border border-[#DDE7E5] rounded-xl px-4 py-3 text-xs text-[#263238] focus:outline-none focus:ring-2 focus:ring-[#0A7B75]/20 focus:border-[#0A7B75]"
                >
                  <option>Leopard Safari & Astrophotography</option>
                  <option>Wilderness Safari + Dam Birding</option>
                  <option>Family Safari & Rabari Village Culture</option>
                  <option>Romantic Wilderness & Private Sundowner</option>
                  <option>Photography Masterclass Trip</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#005B5C] hover:bg-[#0A7B75] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Request Quotation on WhatsApp</span>
              <span className="material-symbols-outlined text-base">chat</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
