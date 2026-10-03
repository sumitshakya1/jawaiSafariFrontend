import { BaseEntity } from '@/core/base/BaseEntity';
import { IHabitatSpecDTO } from '@/types';

/**
 * Domain entity for micro-specifications in hero status ribbons.
 */
export class HabitatSpec extends BaseEntity {
  private _title: string;
  private _value: string;
  private _isPrimary?: boolean;

  constructor(dto: IHabitatSpecDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._title = dto.title;
    this._value = dto.value;
    this._isPrimary = dto.isPrimary;
  }

  public get title(): string { return this._title; }
  public get value(): string { return this._value; }
  public get isPrimary(): boolean | undefined { return this._isPrimary; }

  public toJSON(): IHabitatSpecDTO {
    return {
      id: this.id,
      title: this._title,
      value: this._value,
      isPrimary: this._isPrimary,
    };
  }

  public validate(): boolean {
    if (!this._title || !this._value) throw new Error('HabitatSpec requires title and value');
    return true;
  }
}
