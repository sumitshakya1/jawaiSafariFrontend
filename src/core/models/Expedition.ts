import { BaseEntity } from '@/core/base/BaseEntity';
import { ExpeditionCard } from '@/core/models/ExpeditionCard';
import { SpecificationRow } from '@/core/models/SpecificationRow';
import { IExpeditionDTO } from '@/types';

/**
 * Domain entity representing an expedition phase with chapter briefings, specs, and field cards.
 */
export class Expedition extends BaseEntity {
  private _phaseKicker: string;
  private _title: string;
  private _description: string;
  private _specRows: SpecificationRow[];
  private _cards: ExpeditionCard[];

  constructor(dto: IExpeditionDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._phaseKicker = dto.phaseKicker;
    this._title = dto.title;
    this._description = dto.description;
    this._specRows = dto.specRows.map(
      (s, idx) => new SpecificationRow({ id: `${dto.id}_spec_${idx}`, label: s.label, value: s.value, highlight: s.highlight })
    );
    this._cards = dto.cards.map((c) => new ExpeditionCard(c));
  }

  public get phaseKicker(): string { return this._phaseKicker; }
  public get title(): string { return this._title; }
  public get description(): string { return this._description; }
  public get specRows(): SpecificationRow[] { return this._specRows; }
  public get cards(): ExpeditionCard[] { return this._cards; }

  public toJSON(): IExpeditionDTO {
    return {
      id: this.id,
      phaseKicker: this._phaseKicker,
      title: this._title,
      description: this._description,
      specRows: this._specRows.map((s) => ({ label: s.label, value: s.value, highlight: s.highlight })),
      cards: this._cards.map((c) => c.toJSON()),
    };
  }

  public validate(): boolean {
    if (!this._title || !this._phaseKicker) {
      throw new Error('Expedition requires title and phaseKicker');
    }
    return true;
  }
}
