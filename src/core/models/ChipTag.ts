import { BaseEntity } from '@/core/base/BaseEntity';

export type ChipVariant = 'primary' | 'tertiary' | 'variant' | 'lowest';

export interface IChipTagDTO {
  id?: string;
  label: string;
  variant?: ChipVariant;
}

/**
 * Domain entity representing metadata badges and curated filter chips.
 */
export class ChipTag extends BaseEntity {
  private _label: string;
  private _variant: ChipVariant;

  constructor(dto: IChipTagDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._label = dto.label;
    this._variant = dto.variant || 'primary';
  }

  public get label(): string { return this._label; }
  public get variant(): ChipVariant { return this._variant; }

  public toJSON(): IChipTagDTO {
    return {
      id: this.id,
      label: this._label,
      variant: this._variant,
    };
  }

  public validate(): boolean {
    if (!this._label) throw new Error('ChipTag requires a label');
    return true;
  }
}
