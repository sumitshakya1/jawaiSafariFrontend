'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { buildWhatsAppUrl } from '@/utils/whatsapp';

export default function SafariBookingEnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    slotPreference: 'Dawn (05:45 AM)',
    adults: '2',
    children: '0',
    vehiclePreference: 'Private 4x4 Gypsy',
    pickupLocation: 'Jawai Lodge / Falna Station',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappRedirectUrl = buildWhatsAppUrl({
    packageOrExperienceName: `Jawai Safari Enquiry (${formData.vehiclePreference})`,
    travelDate: formData.travelDate,
    travellers: `${formData.adults} Adults, ${formData.children} Children`,
    customMessage: `Hi Ghoomosa, I would like to book a Jawai Safari Enquiry for ${formData.name}. Date: ${formData.travelDate}, Slot: ${formData.slotPreference}, Travellers: ${formData.adults} Adults & ${formData.children} Children, Vehicle: ${formData.vehiclePreference}, Pickup: ${formData.pickupLocation}. Notes: ${formData.notes || 'None'}. Please confirm slot availability and quote.`,
  });

  return (
    <div className="w-full bg-[#0b0e15] text-[#e1e2ec] min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/jawai" className="hover:text-white">Jawai</Link>
          <span>/</span>
          <span className="text-[#e8a455]">Safari Enquiry</span>
        </div>

        {/* Title */}
        <div className="mb-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#e8a455]/15 border border-[#e8a455]/30 text-[#e8a455] text-xs font-mono uppercase tracking-widest mb-3">
            Safari Slot Enquiry
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Jawai Safari Enquiry & Availability
          </h1>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Share your preferred dates, slot preferences, and party size to check real-time tracker availability and receive a customized quotation.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-[#25D366]/40 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">Enquiry Received!</h2>
            <p className="text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our Jawai expedition team is reviewing your requested slot for <strong className="text-[#e8a455]">{formData.travelDate}</strong>.
            </p>
            <div>
              <a
                href={whatsappRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Continue & Finalize on WhatsApp (+91 73000 03101)</span>
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-[#e8a455] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">person</span>
                <span>1. Traveller Contact Details</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/70 mb-1.5">WhatsApp / Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. traveller@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Safari Details */}
            <div className="pt-6 border-t border-white/10">
              <h2 className="text-sm font-mono uppercase tracking-wider text-[#e8a455] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">calendar_month</span>
                <span>2. Safari Timing & Vehicle Preference</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Travel Date *</label>
                  <input
                    required
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Slot Preference</label>
                  <select
                    value={formData.slotPreference}
                    onChange={(e) => setFormData({ ...formData, slotPreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  >
                    <option value="Dawn (05:45 AM - 08:45 AM)">Dawn (05:45 AM - 08:45 AM)</option>
                    <option value="Dusk (04:15 PM - 07:15 PM)">Dusk (04:15 PM - 07:15 PM)</option>
                    <option value="Both Slots (Full Day Exploration)">Both Slots (Full Day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Adults</label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, '7+ Group'].map((num) => (
                      <option key={num} value={String(num)}>
                        {num} Adult{num === 1 ? '' : 's'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Children (under 12)</label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={String(num)}>
                        {num} Children
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Vehicle Type</label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  >
                    <option value="Private 4x4 Gypsy (Recommended)">Private 4x4 Gypsy (Recommended)</option>
                    <option value="Shared Safari Slot">Shared Safari Slot</option>
                    <option value="Dedicated Photography Vehicle with Bean Bags">Dedicated Photography Vehicle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/70 mb-1.5">Pickup Location in Jawai</label>
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Resort Name or Falna Junction"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="pt-6 border-t border-white/10">
              <label className="block text-xs text-white/70 mb-1.5">Special Requests or Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Interested in flamingos at Jawai dam, elderly guest assistance, or photography setup."
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#e8a455] focus:outline-none"
              />
            </div>

            {/* Consent & Submit */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/50 leading-relaxed">
                By submitting, you agree to our{' '}
                <Link href="/privacy-policy" className="text-[#e8a455] underline">
                  Privacy Policy
                </Link>{' '}
                and understand that wildlife sightings depend on natural animal movement.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit & Request Quote</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
