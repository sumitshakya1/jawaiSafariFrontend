import {
  BaseCard,
  VisualLogCardStyle,
  GeologicalFeatureCardStyle,
} from '@/core/base/BaseCard';

export type CardVariantType = 'visual-log' | 'geological-feature';

export class CardFactory {
  public static create(variant: CardVariantType = 'visual-log'): BaseCard {
    switch (variant) {
      case 'visual-log':
        return new VisualLogCardStyle();
      case 'geological-feature':
        return new GeologicalFeatureCardStyle();
      default:
        return new VisualLogCardStyle();
    }
  }
}
