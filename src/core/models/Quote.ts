import { BaseEntity } from '@/core/base/BaseEntity';
import { IQuoteDTO } from '@/types';

/**
 * Domain entity representing an editorial statement, quote, or testimonial.
 */
export class Quote extends BaseEntity {
  private _text: string;
  private _author: string;
  private _iconName?: string;

  constructor(dto: IQuoteDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._text = dto.text;
    this._author = dto.author;
    this._iconName = dto.iconName;
  }

  public get text(): string { return this._text; }
  public get author(): string { return this._author; }
  public get iconName(): string | undefined { return this._iconName; }

  public toJSON(): IQuoteDTO {
    return {
      id: this.id,
      text: this._text,
      author: this._author,
      iconName: this._iconName,
    };
  }

  public validate(): boolean {
    if (!this._text || !this._author) throw new Error('Quote requires text and author');
    return true;
  }
}
