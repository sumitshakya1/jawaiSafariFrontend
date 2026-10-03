import {
  BaseCounter,
  StandardSlideCounterStyle,
  BarSlideCounterStyle,
  HairlineSlideCounterStyle,
} from '@/core/base/BaseCounter';

export type CounterVariantType = 'standard' | 'bar' | 'hairline';

export class CounterFactory {
  public static create(variant: CounterVariantType = 'standard'): BaseCounter {
    switch (variant) {
      case 'standard':
        return new StandardSlideCounterStyle();
      case 'bar':
        return new BarSlideCounterStyle();
      case 'hairline':
        return new HairlineSlideCounterStyle();
      default:
        return new StandardSlideCounterStyle();
    }
  }
}
