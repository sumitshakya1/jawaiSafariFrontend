import {
  BaseButton,
  PrimaryEditorialButton,
  HighImpactSurfaceButton,
  GhostButton,
  TextActionLink,
} from '@/core/base/BaseButton';

export type ButtonVariantType =
  | 'primary-editorial'
  | 'high-impact'
  | 'ghost'
  | 'text-action';

/**
 * Factory class generating polymorphic BaseButton instances.
 */
export class ButtonFactory {
  public static create(variant: ButtonVariantType = 'primary-editorial'): BaseButton {
    switch (variant) {
      case 'primary-editorial':
        return new PrimaryEditorialButton();
      case 'high-impact':
        return new HighImpactSurfaceButton();
      case 'ghost':
        return new GhostButton();
      case 'text-action':
        return new TextActionLink();
      default:
        return new PrimaryEditorialButton();
    }
  }
}
