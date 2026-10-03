'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { ContactRepository } from '@/core/repositories/ContactRepository';
import { ContactRequest } from '@/core/models/ContactRequest';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    expeditionInterest: '02_SAFARI',
    preferredDates: '',
    notes: '',
    consentCheck: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      if (!formData.fullName || formData.fullName.length < 2) {
        throw new Error('Please enter your full name (minimum 2 characters).');
      }
      if (!formData.email || !formData.email.includes('@')) {
        throw new Error('Please provide a valid email address.');
      }
      if (!formData.consentCheck) {
        throw new Error('You must agree to the expedition protocols to proceed.');
      }

      const entity = new ContactRequest(formData);
      entity.validate();

      const repo = ContactRepository.getInstance();
      await repo.save(entity);

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-6rem)] bg-[#F8FAF8] text-[#263238] px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#005B5C]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#005B5C] font-bold">
            EXPEDITION CONCIERGE DESK
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display-brand font-bold text-[#005B5C] tracking-tight mb-4">
          Contact Ghoomosa Expedition Planning
        </h1>

        <p className="italic text-[#667085] text-base md:text-lg max-w-2xl mb-12 font-light">
          “Connect with our dedicated Jawai safari coordinators to curate tailor-made leopard safaris, verified luxury stays, and private transportation.”
        </p>

        {submitted ? (
          <div className="bg-white border border-[#DDE7E5] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#EEF8F6] flex items-center justify-center text-[#005B5C] mb-2">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="text-2xl font-display-brand font-bold text-[#005B5C]">
              Briefing Request Received
            </h3>
            <p className="text-sm text-[#667085] max-w-md font-light">
              Your enquiry has been registered. Our chief expedition coordinator will
              contact you shortly with verified seasonal schedules and customized quotations.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  expeditionInterest: '02_SAFARI',
                  preferredDates: '',
                  notes: '',
                  consentCheck: false,
                });
              }}
              className="mt-6 px-6 py-3 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all"
            >
              SUBMIT ANOTHER REQUEST
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#DDE7E5] rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-sm"
          >
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-sm text-red-700">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="First & Last Name"
                required
              />
              <Input
                label="Direct Email *"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@domain.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Secure Phone / WhatsApp"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#667085] font-semibold">
                  Expedition Program *
                </label>
                <select
                  name="expeditionInterest"
                  value={formData.expeditionInterest}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAF8] text-[#263238] border border-[#DDE7E5] px-4 py-3 rounded-xl text-sm outline-none focus:border-[#005B5C]"
                >
                  <option value="01_JAWAI">01 — Jawai Leopard Safari &amp; Granite Kopjes</option>
                  <option value="02_SAFARI">02 — Flagship Tour Package (2N/3D)</option>
                  <option value="03_SANCTUARY">03 — Luxury Wilderness Resort &amp; Tents</option>
                  <option value="04_CELESTIAL">04 — Corporate Offsite &amp; Team Retreat</option>
                </select>
              </div>
            </div>

            <Input
              label="Anticipated Travel Dates / Month"
              name="preferredDates"
              value={formData.preferredDates}
              onChange={handleChange}
              placeholder="e.g. November 15-18 / Next Month"
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#667085] font-semibold">
                Specialized Requests, Group Size or Dietary Preferences
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#F8FAF8] text-[#263238] placeholder-[#667085]/60 border border-[#DDE7E5] p-4 rounded-xl text-sm outline-none focus:border-[#005B5C]"
                placeholder="Detail group size, photography preferences, or customized stay requirements..."
              />
            </div>

            <Checkbox
              name="consentCheck"
              checked={formData.consentCheck}
              onChange={handleChange}
              label="I acknowledge that all Jawai expeditions operate in strict adherence to responsible wildlife protocols, non-invasive optical practices, and local community respect."
            />

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-semibold text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2 shadow-sm transition-all cursor-pointer disabled:opacity-60"
              >
                <span>{loading ? 'TRANSMITTING REQUEST...' : 'REQUEST EXPEDITION BRIEFING'}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
