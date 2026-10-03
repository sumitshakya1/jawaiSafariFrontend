/**
 * Abstract BaseCard declaring polymorphic container and card styling rules.
 */
export abstract class BaseCard {
  public abstract getContainerClasses(extraClasses?: string): string;
  public abstract getImageContainerClasses(): string;
  public abstract getImageClasses(): string;
  public abstract getBadgeClasses(): string;
  public abstract getTitleClasses(): string;
  public abstract getDescriptionClasses(): string;
}

/**
 * Visual Log Card (White card, clean light borders, Deep Teal headings)
 */
export class VisualLogCard extends BaseCard {
  public getContainerClasses(extraClasses = ''): string {
    return `group bg-white rounded-2xl overflow-hidden border border-[#DDE7E5] hover:border-[#0A7B75] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${extraClasses}`.trim();
  }

  public getImageContainerClasses(): string {
    return 'relative h-56 w-full overflow-hidden bg-[#EEF8F6]';
  }

  public getImageClasses(): string {
    return 'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105';
  }

  public getBadgeClasses(): string {
    return 'absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[10px] font-mono font-bold text-[#005B5C] shadow-sm uppercase tracking-wider';
  }

  public getTitleClasses(): string {
    return 'text-lg font-bold text-[#005B5C] group-hover:text-[#0A7B75] transition-colors leading-snug';
  }

  public getDescriptionClasses(): string {
    return 'text-xs md:text-sm text-[#263238] font-light leading-relaxed';
  }
}

/**
 * Geological Feature Card
 */
export class GeologicalFeatureCard extends BaseCard {
  public getContainerClasses(extraClasses = ''): string {
    return `p-6 rounded-2xl bg-[#F8FAF8] border border-[#DDE7E5] hover:border-[#0A7B75] transition-all duration-200 ${extraClasses}`.trim();
  }

  public getImageContainerClasses(): string {
    return 'relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-[#EEF8F6]';
  }

  public getImageClasses(): string {
    return 'w-full h-full object-cover';
  }

  public getBadgeClasses(): string {
    return 'absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#005B5C] text-white text-[10px] font-mono uppercase tracking-wider';
  }

  public getTitleClasses(): string {
    return 'text-base font-bold text-[#005B5C]';
  }

  public getDescriptionClasses(): string {
    return 'text-xs text-[#263238] font-light leading-relaxed';
  }
}

export { VisualLogCard as VisualLogCardStyle, GeologicalFeatureCard as GeologicalFeatureCardStyle };

