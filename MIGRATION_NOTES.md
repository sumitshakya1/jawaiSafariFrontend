# Migration Notes & Conflict Resolution: Nocturnal Safari Editorial

This document details all technical observations, design discrepancies, and architectural decisions made while migrating the raw HTML/Tailwind screens into the Next.js TypeScript OOP application inside `ReactConverted/`.

As stipulated in Rule 1 & Rule 4, whenever `DESIGN.md` conflicts with what the HTML rendered and what `screen.png` showed, **the HTML and screenshot took strict precedence**.

---

## 1. Discrepancies & Conflicts Observed

### 1.1 Base Canvas / Surface Color
- **`DESIGN.md` Prose**: Stated Ground/Base color as Nocturnal Slate `#0A0D14`.
- **`DESIGN.md` YAML & HTML Config**: Defined `surface` as `#10131a`, `surface-dim` as `#10131a`, and `surface-container-lowest` as `#0b0e15`.
- **Resolution**: Implemented `#10131a` for `bg-surface` and `#0b0e15` for `surface-container-lowest` exactly as configured in the HTML `<script id="tailwind-config">` and verified in screenshots.

### 1.2 Corner Radii (Architectural Sharp 0px vs Tailwind Defaults)
- **`DESIGN.md` Prose**: Stated `roundedness: 0` unconditionally across all buttons, images, badges, and viewports.
- **HTML Implementation**: 
  - Primary editorial buttons and card containers explicitly applied `rounded-none`.
  - Checkboxes use sharp 0px square geometry.
  - Avatar badges and specific UI indicators applied `rounded-full` (e.g., user profile avatar `<div class="w-8 h-8 rounded-full bg-primary ...">`).
  - Slide 2 timeline track uses `overflow-hidden` container.
- **Resolution**: Kept Tailwind default tokens in `tailwind.config.ts` (`DEFAULT: 0.25rem`, `lg: 0.5rem`, `full: 9999px`) while applying `rounded-none` to all buttons, cards, inputs, and checkboxes, preserving the exact rendering of avatars and pulse badges.

### 1.3 Primary Color Hex Variations
- **`DESIGN.md` Prose**: Stated Primary as Golden Amber `#E8A455`.
- **HTML `<script id="tailwind-config">`**: Defined `primary` as `#ffc27e` and `primary-container` as `#e8a455`.
- **Resolution**: Preserved the exact Tailwind config mappings (`primary: #ffc27e`, `primary-container: #e8a455`, `on-primary: #482900`). All classes like `bg-primary-container` and `text-primary` resolve identically.

### 1.4 Radial Gradient Utility
- **HTML Screen 1**: Used arbitrary class `bg-radial-gradient from-transparent via-surface-container-lowest/20 to-surface-container-lowest/70`.
- **HTML Screen 3**: Used Tailwind arbitrary value `bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]`.
- **Resolution**: Defined a custom utility in `globals.css`:
  ```css
  .bg-radial-gradient {
    background-image: radial-gradient(ellipse at center, var(--tw-gradient-stops));
  }
  ```
  Both syntax variations render smoothly without visual divergence.

### 1.5 Viewport Height Handling on Mobile
- **HTML**: Relied on `h-screen`, which can trigger mobile address bar reflow/scrolling issues.
- **Resolution**: Enhanced hero container with `min-h-[100svh] h-screen`, preserving desktop pixel parity while ensuring mobile browsers render full-bleed with zero horizontal or unexpected vertical jitter.

---

## 2. Multi-Screen Tailwind Configuration Audit
All three source HTML files (`01_jawai_granite_kopjes_desktop`, `02_safari_golden_dusk_desktop`, `03_sanctuary_twilight_caves_desktop`) contained an identical `<script id="tailwind-config">`. 
No divergent keys existed across screen configs. The consolidated tokens were cleanly imported into `tailwind.config.ts`.

---

## 3. Remote Assets & Fallback Resilience
- The remote Google user content URLs for hero photography have been preserved.
- `next.config.mjs` was configured with `remotePatterns` for `lh3.googleusercontent.com`.
- Public local copies were stored in `/public/images/` to support offline development and robust SSR fallback.
