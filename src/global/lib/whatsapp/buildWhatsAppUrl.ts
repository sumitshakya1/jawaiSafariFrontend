import { SITE_CONFIG } from '@/global/config/site.config';

export interface WhatsAppContext {
  packageName?: string;
  packageId?: string;
  duration?: string;
  experienceName?: string;
  travelDate?: string;
  travellers?: number | string;
  pageUrl?: string;
  customMessage?: string;
}

/**
 * Builds a standardized, contextual WhatsApp URL for Ghoomosa inquiries
 */
export function buildWhatsAppUrl(context: WhatsAppContext = {}): string {
  const {
    packageName,
    packageId,
    duration,
    experienceName,
    travelDate,
    travellers,
    pageUrl,
    customMessage,
  } = context;

  if (customMessage) {
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  }

  const subject = packageName || experienceName || 'Jawai Wildlife Expedition';
  const parts: string[] = [`Hi Ghoomosa, I am interested in ${subject}.`];

  parts.push(`Destination: ${SITE_CONFIG.primaryDestination}.`);

  if (duration) {
    parts.push(`Duration: ${duration}.`);
  }

  if (packageId) {
    parts.push(`Package ID: ${packageId}.`);
  }

  if (travelDate) {
    parts.push(`Travel Date: ${travelDate}.`);
  }

  if (travellers) {
    parts.push(`Travellers: ${travellers}.`);
  }

  if (pageUrl) {
    parts.push(`Page: ${pageUrl}.`);
  }

  parts.push('Please share the best quotation and availability.');

  const text = parts.join(' ');
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
