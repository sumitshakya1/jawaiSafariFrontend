import { z } from 'zod';

export interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  toJSON(): object;
  validate(): boolean;
}

export interface IHeroSlideDTO {
  id: string;
  slideNumber: string; // e.g. "01"
  totalSlides: string; // e.g. "04"
  kicker: string; // e.g. "LAND OF THE LEOPARD"
  title: string; // e.g. "JAWAI"
  quote: string; // e.g. "“Granite thrones...”"
  coordinates: string; // e.g. "25.10° N, 73.15° E — KOPJES EXPEDITION"
  coordinatesSubtext?: string;
  badgeLabel?: string;
  actionLabel: string; // e.g. "EXPLORE JAWAI"
  actionHref: string; // e.g. "#explore" or "/safari"
  imageUrl: string;
  localFallbackUrl?: string;
  specsRibbon?: Array<{ label: string; value: string; isPrimary?: boolean }>;
  chips?: Array<{ label: string; variant?: 'primary' | 'tertiary' | 'variant' }>;
  soundFrequencyText?: string;
  initialProgress?: number;
}

export interface IExpeditionDTO {
  id: string;
  phaseKicker: string; // e.g. "Phase 02 — Jawai Basin"
  title: string; // e.g. "The Apex Encounter"
  description: string;
  specRows: Array<{ label: string; value: string; highlight?: boolean }>;
  cards: Array<IExpeditionCardDTO>;
}

export interface IExpeditionCardDTO {
  id: string;
  badgeText: string;
  imageUrl: string;
  title: string;
  description: string;
  altText: string;
  metricLabel?: string;
  metricValue?: string;
  colSpan?: number;
}

export interface ISpecificationRowDTO {
  id: string;
  label: string;
  value: string;
  highlight?: boolean;
}

export interface IHabitatSpecDTO {
  id: string;
  title: string;
  value: string;
  isPrimary?: boolean;
}

export interface IQuoteDTO {
  id: string;
  text: string;
  author: string;
  iconName?: string;
}

export interface INavItemDTO {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  dataPath: string;
}

export interface ISocialLinkDTO {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface IExpeditionProtocolDTO {
  id: string;
  method: string;
  hours: string;
  vessel: string;
}

export interface IContactRequestDTO {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  expeditionInterest: string;
  preferredDates?: string;
  notes?: string;
  consentCheck: boolean;
}

export const ContactRequestSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  expeditionInterest: z.string().min(1, 'Expedition selection is required'),
  preferredDates: z.string().optional(),
  notes: z.string().optional(),
  consentCheck: z.boolean().refine((val) => val === true, {
    message: 'You must agree to expedition guidelines',
  }),
});
