import {
  BaseChip,
  PrimaryChipStyle,
  TertiaryChipStyle,
  VariantChipStyle,
  CoordinateBadgeStyle,
} from '@/core/base/BaseChip';

export type ChipVariantType = 'primary' | 'tertiary' | 'variant' | 'badge';

export class ChipFactory {
  public static create(variant: ChipVariantType = 'primary'): BaseChip {
    switch (variant) {
      case 'primary':
        return new PrimaryChipStyle();
      case 'tertiary':
        return new TertiaryChipStyle();
      case 'variant':
        return new VariantChipStyle();
      case 'badge':
        return new CoordinateBadgeStyle();
      default:
        return new PrimaryChipStyle();
    }
  }
}
