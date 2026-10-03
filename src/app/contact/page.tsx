'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
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
    <div className="w-full min-h-[calc(100vh-6rem)] bg-surface text-on-surface px-margin-mobile md:px-margin py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-primary-container" />
          <span className="font-label-nav text-label-nav uppercase tracking-[0.25em] text-primary-container font-bold">
            EXPEDITION ACCESS DESK
          </span>
        </div>

        <h1 className="font-display-hero text-headline-lg md:text-[3.5rem] font-extrabold uppercase tracking-tight text-white mb-4">
          Request Night Expedition Briefing
        </h1>

        <p className="font-editorial-quote italic text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12">
          “Access to Jawai&apos;s nocturnal granite reserves is strictly curated to preserve the silent pact between indigenous trackers and apex leopards.”
        </p>

        {submitted ? (
          <div className="bg-surface-container-low border border-primary-container/40 p-8 md:p-12 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-primary-container flex items-center justify-center text-primary-container mb-2">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-display-hero text-2xl uppercase tracking-wider text-white">
              Briefing Request Received
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Your dossier request has been registered. The chief expedition coordinator will
              contact you via private communication channel with verified seasonal moon schedules.
            </p>
            <Button
              variant="primary-editorial"
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
              className="mt-6"
            >
              SUBMIT ANOTHER REQUEST
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-low border border-white/10 p-8 md:p-12 flex flex-col gap-6 shadow-2xl"
          >
            {errorMessage && (
              <div className="bg-error-container/40 border border-error/50 p-4 text-sm text-on-error-container font-body-sm">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Lord / Lady / Dr. / First Last"
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
                <label className="font-label-nav text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                  Expedition Program *
                </label>
                <select
                  name="expeditionInterest"
                  value={formData.expeditionInterest}
                  onChange={handleChange}
                  className="w-full bg-[#121820] text-white border border-white/20 px-4 py-3.5 rounded-none font-body-md text-sm outline-none focus:border-primary-container"
                >
                  <option value="01_JAWAI">01 — Granite Kopjes Day &amp; Dusk</option>
                  <option value="02_SAFARI">02 — Apex Encounter 4x4 Tracking</option>
                  <option value="03_SANCTUARY">03 — Nocturnal Sanctuary Pass &amp; Caves</option>
                  <option value="04_CELESTIAL">04 — Bortle 2 Astrophotography Recon</option>
                </select>
              </div>
            </div>

            <Input
              label="Anticipated Dates / Moon Phase Window"
              name="preferredDates"
              value={formData.preferredDates}
              onChange={handleChange}
              placeholder="e.g. November New Moon / Autumn Solstice"
            />

            <div className="flex flex-col gap-1.5">
              <label className="font-label-nav text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                Specialized Optics, Rig or Dietary Specifications
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#121820] text-white placeholder-white/40 border border-white/20 p-4 rounded-none font-body-md text-sm outline-none focus:border-primary-container"
                placeholder="Detail optical requirements (infrared telephoto, night goggles) or camp preferences..."
              />
            </div>

            <Checkbox
              name="consentCheck"
              checked={formData.consentCheck}
              onChange={handleChange}
              label="I acknowledge that all Jawai expeditions operate in strict adherence to nocturnal wildlife sanctuary protocols, non-invasive optical practices, and indigenous Rabari territorial pacts."
            />

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary-editorial"
                icon="arrow_forward"
                disabled={loading}
              >
                {loading ? 'TRANSMITTING DOSSIER...' : 'REQUEST NIGHT EXPEDITION BRIEFING'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
