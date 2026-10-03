import { BaseEntity } from '@/core/base/BaseEntity';
import { INavItemDTO } from '@/types';

/**
 * Domain entity representing top-level navigation links.
 */
export class NavItem extends BaseEntity {
  private _label: string;
  private _href: string;
  private _isActive: boolean;
  private _dataPath: string;

  constructor(dto: INavItemDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._label = dto.label;
    this._href = dto.href;
    this._isActive = !!dto.isActive;
    this._dataPath = dto.dataPath;
  }

  public get label(): string { return this._label; }
  public get href(): string { return this._href; }
  public get isActive(): boolean { return this._isActive; }
  public get dataPath(): string { return this._dataPath; }

  public toJSON(): INavItemDTO {
    return {
      id: this.id,
      label: this._label,
      href: this._href,
      isActive: this._isActive,
      dataPath: this._dataPath,
    };
  }

  public validate(): boolean {
    if (!this._label || !this._href) throw new Error('NavItem requires label and href');
    return true;
  }
}
