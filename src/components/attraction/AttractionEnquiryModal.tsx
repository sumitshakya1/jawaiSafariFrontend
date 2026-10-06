'use client';

import React, { useState, useEffect } from 'react';
import { trackPlanTripSubmit, trackAttractionWhatsAppClick } from '@/lib/analytics';

interface AttractionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  attractionName?: string;
  attractionId?: string;
  defaultInterests?: string[];
}

export function AttractionEnquiryModal({
  isOpen,
  onClose,
  attractionName = 'Jawai & Nearby Attractions',
  attractionId = 'hub',
  defaultInterests = ['Safari', 'Nature'],
}: AttractionEnquiryModalProps) {
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState(2);
  const [pickupCity, setPickupCity] = useState('Udaipur');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(defaultInterests);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = urlParams.get(key);
        if (val) utm[key] = val;
      });
      setUtmParams(utm);
    }
  }, []);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const interestsList = ['Safari', 'Temple', 'Heritage', 'Culture', 'Nature', 'Wildlife'];

  const buildWhatsAppMessage = () => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://ghoomosa.in';
    const source = utmParams['utm_source'] || 'website_direct';
    const msg = `Hi Ghoomosa, I want to plan a Jawai trip including ${attractionName}.
Travel date: ${dates || 'Flexible'}
Guests: ${guests}
Interests: ${selectedInterests.join(', ') || 'Safari & Sightseeing'}
Pickup city: ${pickupCity}
Please share the best itinerary and package options.
Page: ${pageUrl}
Source: ${source}`;
    return `https://wa.me/917300003101?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    trackPlanTripSubmit({
      dates,
      guests,
      interests: selectedInterests,
      pickup_city: pickupCity,
      attraction_ids: [attractionId],
      source_page: typeof window !== 'undefined' ? window.location.pathname : '',
      utm: utmParams,
    });

    try {
      await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          dates,
          guests,
          pickupCity,
          interests: selectedInterests,
          attractionId,
          attractionName,
          leadType: `Attraction Enquiry - ${attractionName}`,
          utm: utmParams,
        }),
      });
    } catch {
      // Fallback gracefully
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#263238]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DDE7E5] overflow-hidden">
        {/* Header */}
        <div className="bg-[#005B5C] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBA21] font-bold block mb-1">
              Ghoomosa Tailored Itinerary
            </span>
            <h3 className="text-lg md:text-xl font-bold font-display-brand">
              Plan My Jawai Trip
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EEF8F6] text-[#005B5C] rounded-full flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h4 className="text-xl font-bold text-[#005B5C]">Enquiry Received!</h4>
            <p className="text-xs text-[#667085] leading-relaxed">
              Our Jawai destination specialist will review your dates for {attractionName} and prepare a custom itinerary quotation.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackAttractionWhatsAppClick({
                    attraction_id: attractionId,
                    CTA_position: 'modal_success_button',
                    UTM: utmParams,
                  })
                }
                className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Connect Instantly on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full border border-[#DDE7E5] text-xs font-mono uppercase text-[#667085] hover:bg-[#F8FAF8]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="p-3 bg-[#EEF8F6] rounded-xl text-xs text-[#005B5C] font-mono">
              Planning stop: <span className="font-bold">{attractionName}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1">
                  Travel Date / Month *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 15 Nov or Diwali"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE7E5] bg-[#F8FAF8] text-xs text-[#263238] focus:bg-white focus:outline-none focus:border-[#005B5C]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  required
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE7E5] bg-[#F8FAF8] text-xs text-[#263238] focus:bg-white focus:outline-none focus:border-[#005B5C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1.5">
                Trip Interests (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {interestsList.map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-[#005B5C] text-white font-bold shadow-sm'
                        : 'bg-[#EEF8F6] text-[#005B5C] hover:bg-[#DDE7E5]'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1">
                Pickup City / Arrival Hub
              </label>
              <select
                value={pickupCity}
                onChange={(e) => setPickupCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE7E5] bg-[#F8FAF8] text-xs text-[#263238] focus:bg-white focus:outline-none focus:border-[#005B5C]"
              >
                <option value="Udaipur">Udaipur Airport / Station (130-160 km)</option>
                <option value="Jodhpur">Jodhpur Airport / Station (150-165 km)</option>
                <option value="Ahmedabad">Ahmedabad SVBP Airport (280-300 km)</option>
                <option value="Jawai Bandh">Jawai Bandh Station (Local)</option>
                <option value="Falna">Falna Railway Station (Local)</option>
                <option value="Self Drive">Self Drive / Own Vehicle</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE7E5] bg-[#F8FAF8] text-xs text-[#263238] focus:bg-white focus:outline-none focus:border-[#005B5C]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#667085] uppercase mb-1">
                  WhatsApp / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDE7E5] bg-[#F8FAF8] text-xs text-[#263238] focus:bg-white focus:outline-none focus:border-[#005B5C]"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Get Jawai Itinerary & Quote'}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-[#DDE7E5]"></div>
                <span className="flex-shrink mx-3 text-[10px] font-mono uppercase text-[#667085]">or</span>
                <div className="flex-grow border-t border-[#DDE7E5]"></div>
              </div>

              <a
                href={buildWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackAttractionWhatsAppClick({
                    attraction_id: attractionId,
                    CTA_position: 'modal_whatsapp_button',
                    UTM: utmParams,
                  })
                }
                className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Chat on WhatsApp (+91 73000 03101)</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
