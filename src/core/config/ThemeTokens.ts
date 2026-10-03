/**
 * Ghoomosa Design System Tokens - Locked single source of truth
 */
export const ThemeTokens = {
  colors: {
    primary: '#005B5C',         // Deep Teal: brand base, primary CTA, major headings
    primaryHover: '#0A7B75',    // Secondary Teal: hover, icons, links
    gold: '#FDBA21',            // Sunrise Gold: premium accent, highlights, active
    orange: '#F7941D',          // Warm Orange: limited adventure accent
    bg: '#F8FAF8',              // Off White: page background
    surface: '#FFFFFF',         // Cards, forms
    surfaceSoft: '#EEF8F6',     // Light Teal Surface: Responsible Travel/soft sections
    text: '#263238',            // Charcoal: body text
    textMuted: '#667085',       // Muted Grey: secondary text, metadata
    border: '#DDE7E5',          // Light neutral border
    whatsapp: '#25D366',        // ONLY WhatsApp-specific buttons/icons
    footer: '#003F40',          // Derived dark teal
  },
  spacing: {
    margin: '4rem',
    marginMobile: '1.5rem',
    gutter: '2rem',
    gutterMobile: '1rem',
    spaceXs: '0.375rem',
    spaceSm: '0.75rem',
    spaceMd: '1.5rem',
    spaceLg: '2.5rem',
    spaceXl: '4.5rem',
  },
  borderRadius: {
    default: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
} as const;
