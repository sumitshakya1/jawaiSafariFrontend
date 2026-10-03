'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function CorporateTourPage() {
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    mobile: '',
    workEmail: '',
    groupSize: '15-30 People',
    originCity: '',
    preferredDates: '',
    nights: '2 Nights / 3 Days',
    stayCategory: 'Luxury Resort Buyout',
    conferenceSetup: 'Yes - Audio/Visual Required',
    meals: 'Full Board with Gala Dinner',
    teamActivities: 'Safari + Technical Hill Drive + Stargazing',
    transfers: 'Required from Airport (Convoy)',
    budgetRange: 'Flexible',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = buildWhatsAppUrl({
    packageOrExperienceName: `Corporate Offsite RFP - ${formData.company || 'Enterprise Group'}`,
    canonicalPath: '/jawai-corporate-tour',
    customMessage: `Hi Ghoomosa, I would like to plan a Corporate Offsite in Jawai for ${formData.company}. Contact: ${formData.contactPerson} (${formData.mobile}, ${formData.workEmail}). Group Size: ${formData.groupSize}, Dates: ${formData.preferredDates}, Duration: ${formData.nights}, Stay: ${formData.stayCategory}, Conference: ${formData.conferenceSetup}, Activities: ${formData.teamActivities}. Please share a formal B2B proposal and quotation.`,
  });

  return (
    <div className="w-full bg-[#F8FAF8] text-[#263238] min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#667085] mb-6">
          <Link href="/" className="hover:text-[#005B5C] font-semibold">Home</Link>
          <span>/</span>
          <Link href="/jawai" className="hover:text-[#005B5C] font-semibold">Jawai</Link>
          <span>/</span>
          <span className="text-[#005B5C] font-bold">Corporate Tours & Offsites</span>
        </div>

        {/* Hero Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF8F6] border border-[#DDE7E5] text-[#005B5C] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
            B2B & Enterprise Solutions
          </span>
          <h1 className="text-3xl md:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
            Jawai Corporate Tours & Team Offsites
          </h1>
          <p className="text-sm md:text-base text-[#667085] leading-relaxed font-light">
            Plan a nature-led corporate offsite in Jawai with luxury accommodation, airport transfers, gourmet banquets, meeting setups, and curated outdoor team challenges coordinated through one single dedicated enquiry.
          </p>
        </div>

        {/* 6 Corporate Experience Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Leadership Retreat',
              icon: 'workspace_premium',
              desc: 'Executive suites, secluded granite boulder meeting pavilions, and focused strategic planning in quiet wilderness.',
            },
            {
              title: 'Sales & Team Offsite',
              icon: 'groups',
              desc: 'High-energy 4x4 off-road team navigation challenges, sunset team sundowners, and fireside celebration dinners.',
            },
            {
              title: 'Dealer / Partner Meet',
              icon: 'handshake',
              desc: 'Premium hospitality with customized welcome kits, branded itineraries, and memorable safari networking sessions.',
            },
            {
              title: 'Employee Reward Trip',
              icon: 'celebration',
              desc: 'Luxury glamping tents with plunge pools, curated wildlife drives, and rejuvenating spa treatments.',
            },
            {
              title: 'Conference + Wilderness',
              icon: 'cast_for_education',
              desc: 'Air-conditioned conference halls with high-speed Wi-Fi, audio-visual projectors, and open-air tea breaks.',
            },
            {
              title: 'Team Bonding & Culture',
              icon: 'nature_people',
              desc: 'Guided Rabari village cultural walks, sunset dam vistas, and telescope stargazing under dark skies.',
            },
          ].map((block, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#DDE7E5] shadow-sm hover:border-[#0A7B75] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-2xl">{block.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#005B5C] mb-2">{block.title}</h3>
              <p className="text-xs text-[#263238] font-light leading-relaxed">{block.desc}</p>
            </div>
          ))}
        </div>

        {/* Corporate RFP Lead Form */}
        <div className="p-6 md:p-12 rounded-3xl bg-white border border-[#DDE7E5] shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-display-brand text-[#005B5C]">Request a Customized Corporate Proposal</h2>
            <p className="text-xs text-[#667085] mt-1 font-light">
              Fill in your team requirements below, and our corporate travel manager will provide a tailored quote within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EEF8F6] text-[#005B5C] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="text-xl font-bold text-[#005B5C]">Corporate RFP Submitted</h3>
              <p className="text-sm text-[#263238] font-light max-w-md mx-auto leading-relaxed">
                Thank you, {formData.contactPerson} ({formData.company}). Our corporate lead executive will review your offsite requirements and send an itemized proposal.
              </p>
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs uppercase tracking-widest shadow-sm transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Direct WhatsApp Line for Corporates</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Company / Organization *</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Acme Technologies Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Contact Person *</label>
                  <input
                    required
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Shalini Mehta (HR Head)"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Mobile Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Work Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="e.g. corporate@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Group Size</label>
                  <select
                    value={formData.groupSize}
                    onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  >
                    <option value="8-15 People (Leadership)">8-15 People (Leadership)</option>
                    <option value="15-30 People (Team Offsite)">15-30 People (Team Offsite)</option>
                    <option value="30-60 People (Mid Size)">30-60 People (Mid Size)</option>
                    <option value="60-120+ People (Resort Buyout)">60-120+ People (Resort Buyout)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Origin City</label>
                  <input
                    type="text"
                    value={formData.originCity}
                    onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                    placeholder="e.g. Mumbai, Delhi, Ahmedabad"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Preferred Dates</label>
                  <input
                    type="text"
                    value={formData.preferredDates}
                    onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                    placeholder="e.g. 15-18 Nov 2026"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Duration</label>
                  <select
                    value={formData.nights}
                    onChange={(e) => setFormData({ ...formData, nights: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  >
                    <option value="1 Night / 2 Days">1 Night / 2 Days</option>
                    <option value="2 Nights / 3 Days">2 Nights / 3 Days</option>
                    <option value="3 Nights / 4 Days">3 Nights / 4 Days</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#263238] mb-1.5">Stay Category</label>
                  <select
                    value={formData.stayCategory}
                    onChange={(e) => setFormData({ ...formData, stayCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                  >
                    <option value="Luxury Wilderness Resort Buyout">Luxury Resort Buyout</option>
                    <option value="Premium Nature Camp">Premium Nature Camp</option>
                    <option value="Heritage Haveli Lodge">Heritage Haveli Lodge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#263238] mb-1.5">Conference & Team Activity Details</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention projector/sound setup, team activities, dietary requirements, or transfer needs."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAF8] border border-[#DDE7E5] text-[#263238] text-sm focus:border-[#0A7B75] focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-[#DDE7E5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#667085]">
                  Strict compliance with eco-sound limits (no high-decibel music in wildlife zones).
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-sm cursor-pointer"
                >
                  Request B2B Quotation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

