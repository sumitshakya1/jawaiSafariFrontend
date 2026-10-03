# ADVENTURA — Nocturnal Safari Editorial Web App

A high-performance, strictly pixel-faithful Next.js (TypeScript) implementation of the **Nocturnal Safari Editorial** design system for Jawai wildlife expeditions, built with a rigorous Object-Oriented Architecture (OOP) and full Next.js Route Handler mock API integration.

---

## 1. Quick Start & Setup

### Prerequisites
- Node.js >= 18.x (tested on v25.5.0)
- npm >= 9.x

### Installation
```bash
# Navigate to project directory
cd ReactConverted

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 2. Environment Variables

Create a `.env.local` file from the provided `.env.example`:

```bash
cp .env.example .env.local
```

| Variable | Default Value | Description |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | `http://localhost:3000` | Base URL for remote API integration (leave empty or localhost for local Next.js route handlers) |
| `NEXT_PUBLIC_USE_MOCK` | `true` | When set to `false`, routes delegate to external microservices |

---

## 3. Architecture & Directory Tree

```
ReactConverted/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx             # Root Layout (Google Fonts Montserrat & Playfair, Material Symbols, Header, Footer)
│  │  ├─ globals.css            # Base layer resets, CSS variable tokens, radial gradient utility
│  │  ├─ page.tsx               # Slide 01: JAWAI (Granite Kopjes)
│  │  ├─ safari/page.tsx        # Slide 02: SAFARI (Apex Encounter & Golden Dusk)
│  │  ├─ sanctuary/page.tsx     # Slide 03: SANCTUARY (Granite Citadel & Twilight Boulders)
│  │  ├─ celestial/page.tsx     # Slide 04: NOCTURNAL (Milky Way Astrophotography Recon)
│  │  ├─ work/page.tsx          # Field Chapters & Expedition Portfolio
│  │  ├─ about/page.tsx         # Conservation Philosophy & Rabari Pact
│  │  ├─ contact/page.tsx       # Night Expedition Briefing Request Form (POST validation)
│  │  └─ api/                   # REST Route Handlers (slides, expeditions, specs, quotes, contact)
│  ├─ components/
│  │  ├─ ui/                    # Class-driven components: Button, Chip, Card, Counter, ProgressBar, DataTable, Input, Checkbox
│  │  ├─ layout/                # Header, Footer, SideRail, HeroStage, Section
│  │  └─ sections/              # Assembled page modules
│  ├─ core/                     # OOP Domain & Service Layer
│  │  ├─ base/                  # BaseEntity, BaseApiService, BaseRepository, BaseButton, BaseCard, BaseListRenderer, BaseCounter
│  │  ├─ models/                # HeroSlide, Expedition, ExpeditionCard, SpecificationRow, HabitatSpec, ChipTag, Quote, NavItem, SocialLink, ContactRequest
│  │  ├─ services/              # SlideService, ExpeditionService, SpecService, CardService, QuoteService, ContactService, ApiClient
│  │  ├─ repositories/          # SlideRepository, ExpeditionRepository, ContactRepository
│  │  ├─ factories/             # ButtonFactory, CardFactory, ChipFactory, ListRendererFactory, CounterFactory
│  │  └─ config/                # ApiConfig, ThemeTokens, RouteRegistry
│  ├─ hooks/                    # useHeroProgress, useBreakpoint, useEntity, useEntityList
│  ├─ types/                    # Shared interfaces, DTOs, Zod schemas
│  ├─ utils/                    # Helper utilities
│  └─ constants/                # Seed data mirroring raw screens
├─ public/images/               # Local offline fallbacks for all reference photography
├─ tailwind.config.ts           # Exact merged tokens from source screens
├─ next.config.mjs              # Remote image patterns for Google content
├─ tsconfig.json                # TypeScript strict configuration
├─ MIGRATION_NOTES.md           # Conflict audit between DESIGN.md and HTML
└─ README.md
```

---

## 4. How to Extend the OOP Architecture

### 4.1 Adding a New Domain Entity
1. Define the DTO in `src/types/index.ts`:
   ```ts
   export interface ICameraTrapDTO {
     id: string;
     sensorLocation: string;
     leopardCount: number;
   }
   ```
2. Create the entity class extending `BaseEntity` in `src/core/models/CameraTrap.ts`:
   ```ts
   import { BaseEntity } from '@/core/base/BaseEntity';
   import { ICameraTrapDTO } from '@/types';

   export class CameraTrap extends BaseEntity {
     private _sensorLocation: string;
     private _leopardCount: number;

     constructor(dto: ICameraTrapDTO) {
       super(dto.id);
       this._sensorLocation = dto.sensorLocation;
       this._leopardCount = dto.leopardCount;
     }

     public get sensorLocation(): string { return this._sensorLocation; }
     public get leopardCount(): number { return this._leopardCount; }

     public toJSON(): ICameraTrapDTO {
       return { id: this.id, sensorLocation: this._sensorLocation, leopardCount: this._leopardCount };
     }

     public validate(): boolean {
       if (!this._sensorLocation) throw new Error('Sensor location required');
       return true;
     }
   }
   ```

### 4.2 Adding a New API Service & Repository
1. Create `src/core/services/CameraTrapService.ts` extending `BaseApiService<CameraTrap>`:
   ```ts
   import { BaseApiService } from '@/core/base/BaseApiService';
   import { CameraTrap } from '@/core/models/CameraTrap';

   export class CameraTrapService extends BaseApiService<CameraTrap> {
     constructor() {
       super('/api/cameratraps');
     }
     protected mapToEntity(dto: unknown): CameraTrap {
       return new CameraTrap(dto as any);
     }
   }
   ```
2. Create `src/core/repositories/CameraTrapRepository.ts` extending `BaseRepository<CameraTrap>`.

### 4.3 Adding a New Button Variant
1. In `src/core/base/BaseButton.ts`, subclass `BaseButton`:
   ```ts
   export class OutlineAmberButton extends BaseButton {
     protected readonly baseClass = 'px-6 py-3 border border-primary text-primary rounded-none';
     protected readonly hoverClass = 'hover:bg-primary hover:text-black';
     protected readonly textClass = 'font-body-sm font-semibold uppercase tracking-widest';

     public getIconClasses(): string {
       return 'material-symbols-outlined text-sm ml-2';
     }
   }
   ```
2. In `src/core/factories/ButtonFactory.ts`:
   - Add `'outline-amber'` to `ButtonVariantType`.
   - Update `ButtonFactory.create()` to return `new OutlineAmberButton()`.
3. Use anywhere in JSX:
   ```tsx
   <Button variant="outline-amber">Test Button</Button>
   ```

---

## 5. Verification & Quality Gates

Run the verification scripts:
```bash
# Type check with strict no-implicit-any
npx tsc --noEmit

# Production Next.js build
npm run build
```
