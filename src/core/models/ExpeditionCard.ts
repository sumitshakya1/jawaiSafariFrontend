import { BaseEntity } from '@/core/base/BaseEntity';
import { IExpeditionCardDTO } from '@/types';

/**
 * Domain entity representing an individual visual field journal card or module.
 */
export class ExpeditionCard extends BaseEntity {
  private _badgeText: string;
  private _imageUrl: string;
  private _title: string;
  private _description: string;
  private _altText: string;
  private _metricLabel?: string;
  private _metricValue?: string;
  private _colSpan?: number;

  constructor(dto: IExpeditionCardDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._badgeText = dto.badgeText;
    this._imageUrl = dto.imageUrl;
    this._title = dto.title;
    this._description = dto.description;
    this._altText = dto.altText;
    this._metricLabel = dto.metricLabel;
    this._metricValue = dto.metricValue;
    this._colSpan = dto.colSpan;
  }

  public get badgeText(): string { return this._badgeText; }
  public get imageUrl(): string { return this._imageUrl; }
  public get title(): string { return this._title; }
  public get description(): string { return this._description; }
  public get altText(): string { return this._altText; }
  public get metricLabel(): string | undefined { return this._metricLabel; }
  public get metricValue(): string | undefined { return this._metricValue; }
  public get colSpan(): number | undefined { return this._colSpan; }

  public toJSON(): IExpeditionCardDTO {
    return {
      id: this.id,
      badgeText: this._badgeText,
      imageUrl: this._imageUrl,
      title: this._title,
      description: this._description,
      altText: this._altText,
      metricLabel: this._metricLabel,
      metricValue: this._metricValue,
      colSpan: this._colSpan,
    };
  }

  public validate(): boolean {
    if (!this._title || !this._imageUrl) {
      throw new Error('ExpeditionCard requires a title and imageUrl');
    }
    return true;
  }
}
