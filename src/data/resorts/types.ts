export type PricingMode = 'PRICE_ON_REQUEST';

export interface RoomCategory {
  room_name: string;
  room_slug: string;
  short_description: string;
  occupancy_text?: string | null;
  bedroom_count?: number | null;
  bathroom_count?: number | null;
  bed_type?: string | null;
  approx_size?: string | null; // e.g. "Approx. 550 sq. ft." for Bijapur, null for Pugmark
  private_pool?: boolean;
  mountain_view?: boolean;
  room_size?: string | null; // Strictly nullable; rendered only if non-null
  gallery_images: string[];
  feature_list: string[];
  display_order: number;
  is_active: boolean;
}

export type GalleryCategory =
  | 'Property'
  | 'Rooms'
  | 'Details'
  | 'Dining & Leisure'
  | 'Destination'
  | 'Pool'
  | 'Suites'
  | 'Accommodation'
  | 'Safari'
  | 'Culture'
  | 'Sustainability';

export interface GalleryMediaItem {
  id: string;
  url: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  caption?: string;
}

export interface VideoMediaItem {
  id: string;
  title: string;
  url: string;
  poster: string;
  description: string;
  duration?: string;
  uploadDate?: string;
}

export interface ResortAmenity {
  name: string;
  icon?: string;
  description?: string;
}

export interface NearbyExperience {
  title: string;
  slug: string;
  href: string;
  tag: string;
  description: string;
  image: string;
}

export interface PropertyFAQ {
  question: string;
  answer: string;
}

export interface PropertyFact {
  label: string;
  value: string;
}

export interface WhyStayPillar {
  title: string;
  description: string;
  icon?: string;
}

export interface DiningSectionConfig {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface SustainabilitySectionConfig {
  title: string;
  subtitle?: string;
  description: string;
  initiatives: string[];
  note?: string;
}

export interface CultureSectionConfig {
  title: string;
  subtitle?: string;
  description: string;
  experiences: string[];
}

export interface FoodRelaxationConfig {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
}

export interface LocationGettingThereConfig {
  title: string;
  description: string;
  distance_info: string[];
  itinerary_steps: Array<{ day: string; title: string; text: string }>;
}

export interface FormConfig {
  show_safari_checkbox?: boolean;
  show_pickup_checkbox?: boolean;
  preferred_stay_label?: string;
}

export interface CrossLinkProperty {
  name: string;
  slug: string;
  tag: string;
  image: string;
  description: string;
}

export interface PropertyItem {
  property_name: string;
  slug: string;
  destination_id: string;
  destination_name: string;
  eyebrow: string;
  hero_title_line?: string;
  short_description: string;
  about_paragraphs: string[];
  verified_facts: string[];
  property_type: string;
  
  // STRICT COMMERCIAL INVARIANT: rates are never public
  pricing_mode: PricingMode;
  public_price: null; // Must stay null; rate sheets are strictly confidential

  featured_image: string;
  hero_image: string;
  gallery: GalleryMediaItem[];
  videos: VideoMediaItem[];
  amenities: ResortAmenity[];
  room_categories: RoomCategory[];
  experience_links: NearbyExperience[];
  quick_facts: PropertyFact[];
  highlights: string[];
  why_stay: WhyStayPillar[];

  // Modular sections (optional per property)
  dining_section?: DiningSectionConfig;
  sustainability_section?: SustainabilitySectionConfig;
  culture_section?: CultureSectionConfig;
  food_relaxation_section?: FoodRelaxationConfig;
  location_getting_there?: LocationGettingThereConfig;
  form_config?: FormConfig;
  cross_link_properties?: CrossLinkProperty[];

  seo_title: string;
  seo_description: string;
  canonical_url: string;
  faq_items: PropertyFAQ[];

  whatsapp_template: string;
  whatsapp_number?: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
}
