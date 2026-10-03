import { BaseEntity } from '@/core/base/BaseEntity';
import { ISpecificationRowDTO } from '@/types';

/**
 * Domain entity representing an editorial specification or key-value metric row.
 */
export class SpecificationRow extends BaseEntity {
  private _label: string;
  private _value: string;
  private _highlight?: boolean;

  constructor(dto: ISpecificationRowDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._label = dto.label;
    this._value = dto.value;
    this._highlight = dto.highlight;
  }

  public get label(): string { return this._label; }
  public get value(): string { return this._value; }
  public get highlight(): boolean | undefined { return this._highlight; }

  public toJSON(): ISpecificationRowDTO {
    return {
      id: this.id,
      label: this._label,
      value: this._value,
      highlight: this._highlight,
    };
  }

  public validate(): boolean {
    if (!this._label || !this._value) {
      throw new Error('SpecificationRow requires both label and value');
    }
    return true;
  }
}
