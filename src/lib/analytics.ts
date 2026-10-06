// Ghoomosa Analytics & Event Tracking Helper

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function pushEvent(eventName: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // 1. Google Tag Manager dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  }

  // 2. Google Analytics gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // 3. Custom DOM Event for internal components/debug
  try {
    window.dispatchEvent(
      new CustomEvent(`ghoomosa:${eventName}`, { detail: eventPayload })
    );
  } catch {
    // Ignore in older environments
  }
}

export function trackPropertyView(params: {
  property_id: string;
  property_name: string;
  destination: string;
  page_url: string;
}) {
  pushEvent('property_view', params);
}

export function trackGalleryOpen(params: {
  property_id: string;
  asset_index: number;
  asset_category?: string;
}) {
  pushEvent('gallery_open', params);
}

export function trackVideoPlay(params: {
  property_id: string;
  video_id: string;
}) {
  pushEvent('video_play', params);
}

export function trackAvailabilityFormStart(params: {
  property_id: string;
  source: string;
}) {
  pushEvent('availability_form_start', params);
}

export function trackAvailabilityFormSubmit(params: {
  property_id: string;
  dates: { checkin: string; checkout: string };
  guests: { adults: number; children: number };
  villa?: string;
  utm?: Record<string, string>;
}) {
  pushEvent('availability_form_submit', params);
}

export function trackWhatsAppClick(params: {
  property_id: string;
  cta_location: string;
  page_url: string;
  utm?: Record<string, string>;
}) {
  pushEvent('whatsapp_click', params);
}

export function trackRelatedPackageClick(params: {
  property_id: string;
  package_id: string;
}) {
  pushEvent('related_package_click', params);
}
