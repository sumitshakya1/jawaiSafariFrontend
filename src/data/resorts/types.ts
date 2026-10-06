export type PricingMode = 'PRICE_ON_REQUEST';

export interface RoomCategory {
  room_name: string;
  room_slug: string;
  short_description: string;
  occupancy_text: string;
  bedroom_count: number;
  bathroom_count: number;
  private_pool: boolean;
  mountain_view: boolean;
  room_size: string | null; // Strictly nullable; rendered only if non-null, never published unless verified
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
  | 'Destination';

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
  icon: string;
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

export interface PropertyItem {
  property_name: string;
  slug: string;
  destination_id: string;
  destination_name: string;
  eyebrow: string;
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

  seo_title: string;
  seo_description: string;
  canonical_url: string;
  faq_items: PropertyFAQ[];

  whatsapp_template: string;
  whatsapp_number: string;
  is_featured: boolean;
  is_active: boolean;
  display_order: number;
}
