/**
 * Abstract BaseButton declaring polymorphic styling and icon rules.
 */
export abstract class BaseButton {
  protected abstract readonly baseClass: string;
  protected abstract readonly hoverClass: string;
  protected abstract readonly textClass: string;

  /**
   * Generates the compiled CSS class string for this button variant.
   */
  public getClasses(extraClasses = ''): string {
    return `${this.baseClass} ${this.hoverClass} ${this.textClass} ${extraClasses}`.trim();
  }

  /**
   * Generates the icon classes for companion symbols/arrows.
   */
  public abstract getIconClasses(): string;
}

/**
 * Primary White Editorial CTA Block (Slide 1, Slide 3, etc.)
 */
export class PrimaryEditorialButton extends BaseButton {
  protected readonly baseClass =
    'group inline-flex items-center justify-between gap-5 bg-white text-surface-container-lowest px-8 py-5 rounded-none shadow-[0_16px_36px_rgba(0,0,0,0.55)] transition-all duration-200 active:scale-[0.98]';
  protected readonly hoverClass = 'hover:bg-primary-container hover:text-on-primary';
  protected readonly textClass =
    'font-body-sm text-[12px] md:text-[13px] font-bold uppercase tracking-[0.18em]';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-base font-bold transform transition-transform duration-200 group-hover:translate-x-1';
  }
}

/**
 * High-Impact Dark/On-Surface Editorial Button (Slide 2, Slide 3 alternate)
 */
export class HighImpactSurfaceButton extends BaseButton {
  protected readonly baseClass =
    'group relative inline-flex items-center gap-4 bg-on-surface text-on-primary-fixed px-8 md:px-10 py-4.5 rounded-none transition-all duration-200 shadow-2xl active:scale-[0.98]';
  protected readonly hoverClass = 'hover:bg-primary-container hover:shadow-primary/20';
  protected readonly textClass =
    'font-headline-sm text-body-sm uppercase tracking-[0.16em] font-bold text-surface-container-lowest group-hover:text-surface-container-lowest';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-surface-container-lowest text-lg transition-transform duration-200 group-hover:translate-x-1';
  }
}

/**
 * Secondary Ghost / Hairline Border Button (Expedition Briefing Request)
 */
export class GhostButton extends BaseButton {
  protected readonly baseClass =
    'w-full py-4 text-center border border-on-surface/20 text-on-surface rounded-none font-body-sm font-semibold uppercase tracking-widest transition-colors duration-150 text-[11px]';
  protected readonly hoverClass = 'hover:border-primary hover:text-primary';
  protected readonly textClass = 'uppercase tracking-widest';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-sm ml-2';
  }
}

/**
 * Text Action Link with animated underline
 */
export class TextActionLink extends BaseButton {
  protected readonly baseClass =
    'inline-flex items-center gap-2 text-white font-body-sm transition-colors duration-150 relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary-container after:transition-all after:duration-200';
  protected readonly hoverClass = 'hover:text-primary-container';
  protected readonly textClass = 'uppercase tracking-[0.15em]';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1';
  }
}
