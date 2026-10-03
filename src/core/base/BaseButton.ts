/**
 * Abstract BaseButton declaring polymorphic styling and icon rules.
 */
export abstract class BaseButton {
  protected abstract readonly baseClass: string;
  protected abstract readonly hoverClass: string;
  protected abstract readonly textClass: string;

  public getClasses(extraClasses = ''): string {
    return `${this.baseClass} ${this.hoverClass} ${this.textClass} ${extraClasses}`.trim();
  }

  public abstract getIconClasses(): string;
}

/**
 * Primary Editorial CTA (Deep Teal #005B5C, hover Secondary Teal #0A7B75, white text)
 */
export class PrimaryEditorialButton extends BaseButton {
  protected readonly baseClass =
    'group inline-flex items-center justify-between gap-4 bg-[#005B5C] text-white px-7 py-4 rounded-full shadow-md transition-all duration-200 active:scale-[0.98]';
  protected readonly hoverClass = 'hover:bg-[#0A7B75] hover:shadow-lg';
  protected readonly textClass =
    'font-mono text-xs font-bold uppercase tracking-[0.16em]';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-base font-bold transform transition-transform duration-200 group-hover:translate-x-1';
  }
}

/**
 * High-Impact Surface Button (White bg with Deep Teal text/border)
 */
export class HighImpactSurfaceButton extends BaseButton {
  protected readonly baseClass =
    'group relative inline-flex items-center gap-3 bg-white text-[#005B5C] border border-[#005B5C] px-7 py-4 rounded-full transition-all duration-200 shadow-sm active:scale-[0.98]';
  protected readonly hoverClass = 'hover:bg-[#EEF8F6] hover:border-[#0A7B75]';
  protected readonly textClass =
    'font-mono text-xs uppercase tracking-[0.16em] font-bold';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-[#005B5C] text-base transition-transform duration-200 group-hover:translate-x-1';
  }
}

/**
 * Ghost / Hairline Border Button
 */
export class GhostButton extends BaseButton {
  protected readonly baseClass =
    'w-full py-3.5 text-center border border-[#DDE7E5] text-[#005B5C] rounded-full font-mono font-semibold uppercase tracking-wider transition-colors duration-150 text-xs bg-white';
  protected readonly hoverClass = 'hover:bg-[#EEF8F6] hover:border-[#005B5C]';
  protected readonly textClass = 'uppercase tracking-wider';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-sm ml-2 text-[#005B5C]';
  }
}

/**
 * Text Action Link with animated underline
 */
export class TextActionLink extends BaseButton {
  protected readonly baseClass =
    'inline-flex items-center gap-2 text-[#005B5C] font-mono text-xs font-semibold transition-colors duration-150 relative after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#005B5C] after:transition-all after:duration-200';
  protected readonly hoverClass = 'hover:text-[#0A7B75]';
  protected readonly textClass = 'uppercase tracking-[0.14em]';

  public getIconClasses(): string {
    return 'material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1';
  }
}
