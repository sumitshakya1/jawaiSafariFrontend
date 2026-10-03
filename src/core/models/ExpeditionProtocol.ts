import { BaseEntity } from '@/core/base/BaseEntity';
import { IExpeditionProtocolDTO } from '@/types';

/**
 * Domain entity representing expedition protocols and operating constraints.
 */
export class ExpeditionProtocol extends BaseEntity {
  private _method: string;
  private _hours: string;
  private _vessel: string;

  constructor(dto: IExpeditionProtocolDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._method = dto.method;
    this._hours = dto.hours;
    this._vessel = dto.vessel;
  }

  public get method(): string { return this._method; }
  public get hours(): string { return this._hours; }
  public get vessel(): string { return this._vessel; }

  public toJSON(): IExpeditionProtocolDTO {
    return {
      id: this.id,
      method: this._method,
      hours: this._hours,
      vessel: this._vessel,
    };
  }

  public validate(): boolean {
    if (!this._method || !this._hours || !this._vessel) {
      throw new Error('ExpeditionProtocol requires method, hours, and vessel');
    }
    return true;
  }
}
