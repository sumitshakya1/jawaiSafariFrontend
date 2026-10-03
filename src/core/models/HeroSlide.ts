import { BaseEntity } from '@/core/base/BaseEntity';
import { IHeroSlideDTO } from '@/types';

/**
 * Domain entity representing a full-bleed cinematic hero slide in the Nocturnal Safari editorial.
 */
export class HeroSlide extends BaseEntity {
  private _slideNumber: string;
  private _totalSlides: string;
  private _kicker: string;
  private _title: string;
  private _quote: string;
  private _coordinates: string;
  private _coordinatesSubtext?: string;
  private _badgeLabel?: string;
  private _actionLabel: string;
  private _actionHref: string;
  private _imageUrl: string;
  private _localFallbackUrl?: string;
  private _specsRibbon?: Array<{ label: string; value: string; isPrimary?: boolean }>;
  private _chips?: Array<{ label: string; variant?: 'primary' | 'tertiary' | 'variant' }>;
  private _soundFrequencyText?: string;
  private _initialProgress: number;

  constructor(dto: IHeroSlideDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._slideNumber = dto.slideNumber;
    this._totalSlides = dto.totalSlides || '04';
    this._kicker = dto.kicker;
    this._title = dto.title;
    this._quote = dto.quote;
    this._coordinates = dto.coordinates;
    this._coordinatesSubtext = dto.coordinatesSubtext;
    this._badgeLabel = dto.badgeLabel;
    this._actionLabel = dto.actionLabel;
    this._actionHref = dto.actionHref;
    this._imageUrl = dto.imageUrl;
    this._localFallbackUrl = dto.localFallbackUrl;
    this._specsRibbon = dto.specsRibbon ? [...dto.specsRibbon] : undefined;
    this._chips = dto.chips ? [...dto.chips] : undefined;
    this._soundFrequencyText = dto.soundFrequencyText;
    this._initialProgress = dto.initialProgress ?? 25;
  }

  public get slideNumber(): string { return this._slideNumber; }
  public get totalSlides(): string { return this._totalSlides; }
  public get kicker(): string { return this._kicker; }
  public get title(): string { return this._title; }
  public get quote(): string { return this._quote; }
  public get coordinates(): string { return this._coordinates; }
  public get coordinatesSubtext(): string | undefined { return this._coordinatesSubtext; }
  public get badgeLabel(): string | undefined { return this._badgeLabel; }
  public get actionLabel(): string { return this._actionLabel; }
  public get actionHref(): string { return this._actionHref; }
  public get imageUrl(): string { return this._imageUrl; }
  public get localFallbackUrl(): string | undefined { return this._localFallbackUrl; }
  public get specsRibbon(): Array<{ label: string; value: string; isPrimary?: boolean }> | undefined { return this._specsRibbon; }
  public get chips(): Array<{ label: string; variant?: 'primary' | 'tertiary' | 'variant' }> | undefined { return this._chips; }
  public get soundFrequencyText(): string | undefined { return this._soundFrequencyText; }
  public get initialProgress(): number { return this._initialProgress; }

  public toJSON(): IHeroSlideDTO {
    return {
      id: this.id,
      slideNumber: this._slideNumber,
      totalSlides: this._totalSlides,
      kicker: this._kicker,
      title: this._title,
      quote: this._quote,
      coordinates: this._coordinates,
      coordinatesSubtext: this._coordinatesSubtext,
      badgeLabel: this._badgeLabel,
      actionLabel: this._actionLabel,
      actionHref: this._actionHref,
      imageUrl: this._imageUrl,
      localFallbackUrl: this._localFallbackUrl,
      specsRibbon: this._specsRibbon,
      chips: this._chips,
      soundFrequencyText: this._soundFrequencyText,
      initialProgress: this._initialProgress,
    };
  }

  public validate(): boolean {
    if (!this._slideNumber || !this._title || !this._imageUrl) {
      throw new Error('HeroSlide must have a slideNumber, title, and imageUrl');
    }
    return true;
  }
}
