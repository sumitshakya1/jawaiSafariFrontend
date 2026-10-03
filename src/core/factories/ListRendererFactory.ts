import {
  BaseListRenderer,
  BlockSpecRenderer,
  HairlineProtocolRenderer,
} from '@/core/base/BaseListRenderer';
import { ISpecificationRowDTO } from '@/types';

export type ListRendererVariant = 'block' | 'hairline';

export class ListRendererFactory {
  public static create(
    variant: ListRendererVariant = 'block'
  ): BaseListRenderer<ISpecificationRowDTO> {
    switch (variant) {
      case 'block':
        return new BlockSpecRenderer();
      case 'hairline':
        return new HairlineProtocolRenderer();
      default:
        return new BlockSpecRenderer();
    }
  }
}
