/**
 * Abstract BaseChip defining visual badge and chip styling.
 */
export abstract class BaseChip {
  protected abstract readonly containerClass: string;
  protected abstract readonly textClass: string;

  public getClasses(extra = ''): string {
    return `${this.containerClass} ${this.textClass} ${extra}`.trim();
  }
}

export class PrimaryChipStyle extends BaseChip {
  protected readonly containerClass = 'bg-white/80 backdrop-blur-sm px-3.5 py-1.5 shadow-sm';
  protected readonly textClass = 'text-label-nav font-label-nav text-[#005B5C] uppercase tracking-[0.18em]';
}

export class TertiaryChipStyle extends BaseChip {
  protected readonly containerClass = 'bg-white/80 backdrop-blur-sm px-3.5 py-1.5 shadow-sm';
  protected readonly textClass = 'text-label-nav font-label-nav text-tertiary uppercase tracking-[0.18em]';
}

export class VariantChipStyle extends BaseChip {
  protected readonly containerClass = 'bg-white/80 backdrop-blur-sm px-3.5 py-1.5 shadow-sm';
  protected readonly textClass = 'text-label-nav font-label-nav text-[#667085]/80 uppercase tracking-[0.18em]';
}

export class CoordinateBadgeStyle extends BaseChip {
  protected readonly containerClass = 'flex items-center gap-2.5 px-4 py-2 bg-[#F8FAF8]/60 backdrop-blur-md shadow-xl border border-on-surface/10 rounded-none';
  protected readonly textClass = 'font-label-nav text-label-nav text-[#667085] uppercase tracking-[0.25em]';
}
