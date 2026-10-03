/**
 * Abstract BaseCounter defining layout and typography classes for slide index counters.
 */
export abstract class BaseCounter {
  public abstract getCurrentClasses(): string;
  public abstract getTotalClasses(): string;
  public abstract getContainerClasses(): string;
}

export class StandardSlideCounterStyle extends BaseCounter {
  public getCurrentClasses(): string {
    return 'font-display-hero text-headline-lg text-white font-extrabold tracking-tight drop-shadow-md';
  }

  public getTotalClasses(): string {
    return 'font-label-counter text-body-sm text-white/60 tracking-[0.25em] font-medium';
  }

  public getContainerClasses(): string {
    return 'flex items-baseline gap-2';
  }
}

export class BarSlideCounterStyle extends BaseCounter {
  public getCurrentClasses(): string {
    return 'font-display-hero text-headline-lg leading-none text-on-surface font-extrabold tracking-tight';
  }

  public getTotalClasses(): string {
    return 'font-label-counter text-body-sm text-on-surface-variant/60 font-semibold tracking-widest';
  }

  public getContainerClasses(): string {
    return 'flex flex-col gap-2.5';
  }
}

export class HairlineSlideCounterStyle extends BaseCounter {
  public getCurrentClasses(): string {
    return 'font-display-hero text-headline-lg md:text-[2.25rem] text-on-surface font-extrabold tracking-tight leading-none drop-shadow-md';
  }

  public getTotalClasses(): string {
    return 'font-label-counter text-body-sm text-on-surface/50 font-medium tracking-[0.25em]';
  }

  public getContainerClasses(): string {
    return 'flex items-baseline gap-2';
  }
}
