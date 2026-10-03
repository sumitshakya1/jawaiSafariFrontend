/**
 * Abstract BaseCard providing container, image wrapper, and typography classes for editorial cards.
 */
export abstract class BaseCard {
  public abstract getContainerClasses(extra?: string): string;
  public abstract getImageContainerClasses(): string;
  public abstract getImageClasses(): string;
  public abstract getBadgeClasses(): string;
  public abstract getTitleClasses(): string;
  public abstract getDescriptionClasses(): string;
}

/**
 * Journal Visual Log Card (Slide 2)
 */
export class VisualLogCardStyle extends BaseCard {
  public getContainerClasses(extra = ''): string {
    return `group bg-surface-container-low flex flex-col overflow-hidden shadow-xl transition-all duration-300 hover:bg-surface-container ${extra}`.trim();
  }

  public getImageContainerClasses(): string {
    return 'relative w-full h-72 overflow-hidden';
  }

  public getImageClasses(): string {
    return 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
  }

  public getBadgeClasses(): string {
    return 'absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1 font-label-nav text-label-nav text-primary tracking-widest uppercase';
  }

  public getTitleClasses(): string {
    return 'font-headline-sm text-headline-sm text-on-surface font-semibold';
  }

  public getDescriptionClasses(): string {
    return 'font-body-sm text-body-sm text-on-surface-variant';
  }
}

/**
 * Technical Observation Feature Card (Slide 3)
 */
export class GeologicalFeatureCardStyle extends BaseCard {
  public getContainerClasses(extra = ''): string {
    return `bg-surface-container-low border border-on-surface/5 p-8 flex flex-col gap-6 group hover:border-primary/30 transition-all duration-300 ${extra}`.trim();
  }

  public getImageContainerClasses(): string {
    return 'relative w-full h-[400px] overflow-hidden bg-surface-container';
  }

  public getImageClasses(): string {
    return 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out';
  }

  public getBadgeClasses(): string {
    return 'absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 font-label-counter text-[10px] text-primary tracking-widest uppercase';
  }

  public getTitleClasses(): string {
    return 'font-headline-md text-headline-sm text-on-surface font-bold';
  }

  public getDescriptionClasses(): string {
    return 'font-body-md text-body-sm text-on-surface-variant leading-relaxed';
  }
}
