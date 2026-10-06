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

export function trackSuiteView(params: {
  property_id: string;
  suite_name: string;
}) {
  pushEvent('suite_view', params);
}

export function trackAvailabilityFormSubmit(params: {
  property_id: string;
  dates: { checkin: string; checkout: string };
  guests: { adults: number; children: number };
  villa?: string;
  suite?: string;
  safari?: string;
  transfer?: string;
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

export const trackPackageClick = trackRelatedPackageClick;

// Jawai Attractions Analytics
export function trackAttractionView(params: {
  attraction_id: string;
  page_url: string;
  landing_url?: string;
  utm?: Record<string, string>;
}) {
  pushEvent('attraction_view', params);
}

export function trackNearbyClick(params: {
  from_attraction: string;
  to_attraction: string;
}) {
  pushEvent('nearby_click', params);
}

export function trackItineraryClick(params: {
  attraction_id: string;
  itinerary_type: string;
}) {
  pushEvent('itinerary_click', params);
}

export function trackAttractionWhatsAppClick(params: {
  attraction_id: string;
  CTA_position: string;
  UTM?: Record<string, string>;
}) {
  pushEvent('whatsapp_click', params);
}

export function trackPlanTripSubmit(params: {
  dates: string;
  guests: number;
  interests: string[];
  pickup_city?: string;
  attraction_ids: string[];
  source_page?: string;
  utm?: Record<string, string>;
}) {
  pushEvent('plan_trip_submit', params);
}

export function trackAttractionHotelClick(params: {
  attraction_id: string;
  property_id: string;
}) {
  pushEvent('hotel_click', params);
}
