import { SITE_CONFIG } from '@/global/config/site.config';

export interface WhatsAppPayloadOptions {
  packageOrExperienceName: string;
  destination?: string;
  duration?: string;
  packageId?: string;
  canonicalPath?: string;
  travelDate?: string;
  travellers?: string | number;
  customMessage?: string;
}

/**
 * Builds the official WhatsApp conversion URL according to Section 6 / Page 9 of the Master Specification:
 * "Hi Ghoomosa, I am interested in [PACKAGE/EXPERIENCE NAME]. Destination: Jawai, Rajasthan. Duration: [DURATION if applicable]. Package ID: [ID]. Page: [CANONICAL URL]. Travel Date: [if captured]. Travellers: [if captured]. Please share the best quotation and availability."
 */
export function buildWhatsAppUrl(options: WhatsAppPayloadOptions): string {
  const destination = options.destination || 'Jawai, Rajasthan';
  const canonicalUrl = options.canonicalPath
    ? options.canonicalPath.startsWith('http')
      ? options.canonicalPath
      : `${SITE_CONFIG.domain}${options.canonicalPath.startsWith('/') ? options.canonicalPath : `/${options.canonicalPath}`}`
    : SITE_CONFIG.domain;

  if (options.customMessage) {
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(options.customMessage)}`;
  }

  let text = `Hi Ghoomosa, I am interested in ${options.packageOrExperienceName}. Destination: ${destination}.`;

  if (options.duration) {
    text += ` Duration: ${options.duration}.`;
  }
  if (options.packageId) {
    text += ` Package ID: ${options.packageId}.`;
  }
  text += ` Page: ${canonicalUrl}.`;

  if (options.travelDate) {
    text += ` Travel Date: ${options.travelDate}.`;
  }
  if (options.travellers) {
    text += ` Travellers: ${options.travellers}.`;
  }

  text += ` Please share the best quotation and availability.`;

  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
