import { BaseEntity } from '@/core/base/BaseEntity';
import { ISocialLinkDTO } from '@/types';

/**
 * Domain entity representing footer social links and action channels.
 */
export class SocialLink extends BaseEntity {
  private _label: string;
  private _href: string;
  private _icon: string;

  constructor(dto: ISocialLinkDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._label = dto.label;
    this._href = dto.href;
    this._icon = dto.icon;
  }

  public get label(): string { return this._label; }
  public get href(): string { return this._href; }
  public get icon(): string { return this._icon; }

  public toJSON(): ISocialLinkDTO {
    return {
      id: this.id,
      label: this._label,
      href: this._href,
      icon: this._icon,
    };
  }

  public validate(): boolean {
    if (!this._label || !this._href || !this._icon) throw new Error('SocialLink requires label, href, and icon');
    return true;
  }
}
