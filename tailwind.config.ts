import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/global/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official Ghoomosa Design Tokens
        'gm-primary': '#005B5C',
        'gm-primary-hover': '#0A7B75',
        'gm-gold': '#FDBA21',
        'gm-orange': '#F7941D',
        'gm-bg': '#F8FAF8',
        'gm-surface': '#FFFFFF',
        'gm-surface-soft': '#EEF8F6',
        'gm-text': '#263238',
        'gm-text-muted': '#667085',
        'gm-border': '#DDE7E5',
        'gm-whatsapp': '#25D366',
        'gm-footer': '#003F40',

        // Semantic aliases
        primary: {
          DEFAULT: '#005B5C',
          hover: '#0A7B75',
          soft: '#EEF8F6',
        },
        accent: {
          gold: '#FDBA21',
          orange: '#F7941D',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#EEF8F6',
          canvas: '#F8FAF8',
          footer: '#003F40',
        },
        body: {
          DEFAULT: '#263238',
          muted: '#667085',
        },
        border: {
          DEFAULT: '#DDE7E5',
        },
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        '2xl': "1.5rem",
        full: "9999px",
      },
      fontFamily: {
        "display-brand": ["var(--font-playfair)", "Playfair Display", "serif"],
        "body-sm": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "label-counter": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "body-lg": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "display-hero": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "headline-lg-mobile": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "headline-md": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "headline-sm": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "editorial-quote": ["var(--font-playfair)", "Playfair Display", "serif"],
        "headline-lg": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "body-md": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "label-nav": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        "display-hero-mobile": ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
