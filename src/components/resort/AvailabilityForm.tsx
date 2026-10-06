'use client';

import React, { useState, useEffect } from 'react';
import { trackAvailabilityFormStart, trackAvailabilityFormSubmit, trackWhatsAppClick } from '@/lib/analytics';

interface AvailabilityFormProps {
  propertySlug: string;
  propertyName: string;
  whatsappNumber?: string;
  roomCategories: Array<{ room_name: string; room_slug: string }>;
  initialSelectedCategory?: string;
  showSafariCheckbox?: boolean;
  showPickupCheckbox?: boolean;
  pickupLabel?: string;
  preferredStayLabel?: string;
  includeFlexibleOption?: boolean;
  customWhatsAppTemplate?: string;
}

export function AvailabilityForm({
  propertySlug,
  propertyName,
  whatsappNumber = '+91 73000 03101',
  roomCategories,
  initialSelectedCategory = '',
  showSafariCheckbox = false,
  showPickupCheckbox = false,
  pickupLabel = 'Airport / City Pickup Required?',
  preferredStayLabel = 'Preferred Villa / Room Category',
  includeFlexibleOption = false,
  customWhatsAppTemplate,
}: AvailabilityFormProps) {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [childrenAges, setChildrenAges] = useState('');
  const [preferredVilla, setPreferredVilla] = useState(initialSelectedCategory);
  const [safariRequired, setSafariRequired] = useState('Yes');
  const [pickupRequired, setPickupRequired] = useState('No');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // UTM & Tracking metadata
  const [utmSource, setUtmSource] = useState('direct');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [referrer, setReferrer] = useState('');

  const [formStarted, setFormStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      setPageUrl(window.location.href);
      setReferrer(document.referrer || 'direct');
      setUtmSource(url.searchParams.get('utm_source') || 'direct');
      setUtmMedium(url.searchParams.get('utm_medium') || '');
      setUtmCampaign(url.searchParams.get('utm_campaign') || '');
    }
  }, []);

  useEffect(() => {
    if (initialSelectedCategory) {
      setPreferredVilla(initialSelectedCategory);
    }
  }, [initialSelectedCategory]);

  const handleFieldFocus = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackAvailabilityFormStart({
        property_id: propertySlug,
        source: utmSource || 'direct',
      });
    }
  };

  const buildWhatsAppMessage = () => {
    const childrenStr =
      children !== '0'
        ? `${children}${childrenAges ? ` (Ages: ${childrenAges})` : ''}`
        : '0';

    if (customWhatsAppTemplate) {
      const filled = customWhatsAppTemplate
        .replace('{checkin}', checkin || 'Flexible')
        .replace('{checkout}', checkout || 'Flexible')
        .replace(/\{date\}/g, checkin || 'Flexible')
        .replace('{adults}', adults)
        .replace(/\{n\}/g, adults)
        .replace('{children}', childrenStr)
        .replace(/\{n\/ages\}/g, childrenStr)
        .replace('{villa}', preferredVilla || 'Flexible / Any Available')
        .replace('{suite}', preferredVilla || 'Flexible / Any Available')
        .replace('{stay}', preferredVilla || 'Flexible / Any Available')
        .replace('{safari}', safariRequired)
        .replace('{pickup}', pickupRequired)
        .replace('{transfer}', pickupRequired)
        .replace('{page_url}', pageUrl || `https://ghoomosa.in/${propertySlug}`)
        .replace('{utm_source}', utmSource || 'direct');
      return encodeURIComponent(filled);
    }

    const lines = [
      `Hi Ghoomosa, I would like to check availability for ${propertyName}.`,
      `Check-in: ${checkin || 'Flexible'}`,
      `Check-out: ${checkout || 'Flexible'}`,
      `Adults: ${adults}`,
      children !== '0' ? `Children: ${childrenStr}` : null,
      preferredVilla ? `Preferred Accommodation: ${preferredVilla}` : null,
      showSafariCheckbox ? `Safari Required: ${safariRequired}` : null,
      showPickupCheckbox ? `Pickup Required: ${pickupRequired}` : null,
      name ? `Guest Name: ${name}` : null,
      message ? `Special Request: ${message}` : null,
      `Please share the best available stay/package options.`,
      `Page: ${pageUrl || `https://ghoomosa.in/${propertySlug}`}`,
      `Source: ${utmSource || 'direct'}`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const getWhatsAppHref = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${buildWhatsAppMessage()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!checkin || !checkout) {
      setSubmitError('Please select both Check-in and Check-out dates.');
      return;
    }
    if (!name.trim()) {
      setSubmitError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setSubmitError('Please provide a valid Mobile / WhatsApp number.');
      return;
    }

    setSubmitting(true);

    const payload = {
      propertySlug,
      propertyName,
      checkin,
      checkout,
      adults: parseInt(adults, 10),
      children: parseInt(children, 10),
      childrenAges,
      preferredVilla,
      safariRequired: showSafariCheckbox ? safariRequired : undefined,
      pickupRequired: showPickupCheckbox ? pickupRequired : undefined,
      name,
      phone,
      email,
      message,
      leadSource: `Property Enquiry - ${propertyName}`,
      pageUrl,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
    };

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Server returned an error. Please connect via WhatsApp directly.');
      }

      setSubmitSuccess(true);
      trackAvailabilityFormSubmit({
        property_id: propertySlug,
        dates: { checkin, checkout },
        guests: { adults: parseInt(adults, 10), children: parseInt(children, 10) },
        villa: preferredVilla,
        utm: { source: utmSource, medium: utmMedium, campaign: utmCampaign },
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed. Please check connection.';
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#DDE7E5] p-6 sm:p-10 shadow-lg">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#005B5C] font-bold block mb-2">
          Direct Property Enquiry
        </span>
        <h3 className="text-2xl sm:text-3xl font-display-brand font-bold text-[#005B5C] mb-3">
          Check Stay Availability & Get Custom Quote
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
          Rates are provided on request based on travel dates, room category and occupancy. Ghoomosa does not publish contracted rates publicly. Share your travel dates to receive the current applicable quote.
        </p>
      </div>

      {submitSuccess ? (
        <div className="p-8 rounded-2xl bg-[#EEF8F6] border border-[#0A7B75]/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#005B5C] text-white flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 className="text-xl font-bold text-[#005B5C]">Enquiry Received!</h4>
          <p className="text-xs sm:text-sm text-[#263238] max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold">{name}</span>. We have logged your enquiry for{' '}
            <span className="font-semibold">{propertyName}</span>. A Ghoomosa specialist will contact you shortly on WhatsApp/email with availability and seasonal quotes.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  property_id: propertySlug,
                  cta_location: 'availability_form_success',
                  page_url: pageUrl,
                })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" onFocus={handleFieldFocus}>
          {submitError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
              {submitError}
            </div>
          )}

          {/* Dates row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Check-in Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Check-out Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              />
            </div>
          </div>

          {/* Guests row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Adults <span className="text-red-500">*</span>
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n === 0 ? 'No Children' : `${n} Child${n > 1 ? 'ren' : ''}`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Children Ages (if any)
              </label>
              <input
                type="text"
                placeholder="e.g. 5, 9"
                value={childrenAges}
                onChange={(e) => setChildrenAges(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              />
            </div>
          </div>

          {/* Preferred Room / Villa Category */}
          {roomCategories && roomCategories.length > 0 && (
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                {preferredStayLabel}
              </label>
              <select
                value={preferredVilla}
                onChange={(e) => setPreferredVilla(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              >
                <option value="">Any Available Option</option>
                {includeFlexibleOption && (
                  <option value="Flexible / Undecided">Flexible / Undecided</option>
                )}
                {roomCategories.map((room) => (
                  <option key={room.room_slug} value={room.room_name}>
                    {room.room_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Optional Safari & Pickup rows */}
          {(showSafariCheckbox || showPickupCheckbox) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#EEF8F6] border border-[#DDE7E5]">
              {showSafariCheckbox && (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold mb-1.5">
                    Leopard Safari Required?
                  </label>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#263238]">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="safari"
                        value="Yes"
                        checked={safariRequired === 'Yes'}
                        onChange={(e) => setSafariRequired(e.target.value)}
                        className="text-[#005B5C] focus:ring-[#0A7B75]"
                      />
                      <span>Yes, include safari</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="safari"
                        value="No"
                        checked={safariRequired === 'No'}
                        onChange={(e) => setSafariRequired(e.target.value)}
                        className="text-[#005B5C] focus:ring-[#0A7B75]"
                      />
                      <span>No, stay only</span>
                    </label>
                  </div>
                </div>
              )}

              {showPickupCheckbox && (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#005B5C] font-bold mb-1.5">
                    {pickupLabel}
                  </label>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#263238]">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="pickup"
                        value="Yes"
                        checked={pickupRequired === 'Yes'}
                        onChange={(e) => setPickupRequired(e.target.value)}
                        className="text-[#005B5C] focus:ring-[#0A7B75]"
                      />
                      <span>Yes (Udaipur/Jodhpur)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="pickup"
                        value="No"
                        checked={pickupRequired === 'No'}
                        onChange={(e) => setPickupRequired(e.target.value)}
                        className="text-[#005B5C] focus:ring-[#0A7B75]"
                      />
                      <span>No, self-drive / train</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
                Mobile / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#263238] font-bold mb-1.5">
              Message or Special Requirements (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. We are celebrating an anniversary and would like to arrange a private sundowner..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#DDE7E5] text-xs sm:text-sm text-[#263238] focus:outline-none focus:border-[#0A7B75] focus:ring-1 focus:ring-[#0A7B75] transition-all bg-[#F8FAF8]"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-4 rounded-full bg-[#005B5C] hover:bg-[#0A7B75] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {submitting ? (
                <span>Checking Availability...</span>
              ) : (
                <>
                  <span>Request Availability Quote</span>
                  <span>→</span>
                </>
              )}
            </button>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  property_id: propertySlug,
                  cta_location: 'availability_form_direct_button',
                  page_url: pageUrl,
                })
              }
              className="py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span>Quote on WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
