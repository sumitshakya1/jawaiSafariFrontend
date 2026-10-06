export type DistanceMode = 'fixed_range' | 'dynamic' | 'tbd';

export type PublishStatus = 'live' | 'draft' | 'noindex';

export type AttractionCategory =
  | 'Wildlife & Nature'
  | 'Spiritual & Cultural'
  | 'Heritage & Architecture'
  | 'Local Life'
  | 'Scenic Excursions';

export type AttractionTheme = 'Wildlife' | 'Temple' | 'Heritage' | 'Culture' | 'Nature';

export type AttractionDuration = 'short_visit' | 'half_day' | 'full_day';

export interface NearbyAttractionLink {
  name: string;
  slug: string;
  distance?: string;
  reason?: string;
  category?: string;
}

export interface SuggestedItineraryStep {
  timeOrDay: string;
  activity: string;
  description?: string;
}

export interface SuggestedItinerary {
  title: string;
  summary: string;
  steps: SuggestedItineraryStep[];
}

export interface AttractionFAQ {
  question: string;
  answer: string;
}

export interface AttractionGalleryItem {
  url: string;
  alt: string;
  caption?: string;
}

export interface QuestionSections {
  where_is_it: string;
  how_far: string;
  is_it_worth_visiting: string;
  how_much_time: string;
  can_combine_safari: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  slug: string;
  category: AttractionCategory;
  theme: AttractionTheme;
  duration_type: AttractionDuration;

  // AEO Quick Answer: strictly 40-70 words
  short_answer: string;

  // In-depth original Ghoomosa content
  long_description: string[];

  // Geographic references
  reference_point: string; // Default: 'Jawai Bandh, Rajasthan'
  distance_km_min: number | null;
  distance_km_max: number | null;
  travel_time_min: number | null; // in minutes
  travel_time_max: number | null; // in minutes
  distance_display: string; // e.g. "Approx. 50-55 km" or "Varies across landscape"
  travel_time_display: string; // e.g. "Approx. 1 hr to 1 hr 10 min" or "Varies by route"
  distance_last_verified_at: string | null;
  distance_mode: DistanceMode;
  lat: number | null; // ONLY verified coordinates; null for sensitive or unverified sites
  lng: number | null;

  // Visit logistics
  best_time: string;
  visit_duration: string;
  best_for: string[];
  why_visit: string[];

  // Structured question-led content
  question_sections: QuestionSections;

  // Cross-relations
  nearby_attractions: NearbyAttractionLink[];
  suggested_itinerary: SuggestedItinerary;

  // FAQs
  faq: AttractionFAQ[];

  // Editorial metadata
  source_notes: string[];
  publishing_note?: string; // Editor only, never rendered publicly
  last_fact_check_at: string;
  publish_status: PublishStatus;

  // Media
  hero_image: string;
  gallery: AttractionGalleryItem[];

  // SEO
  seo_title: string;
  seo_description: string;
  h1: string;
  canonical_url: string;

  // Lead Generation
  cta_template?: string;
}
