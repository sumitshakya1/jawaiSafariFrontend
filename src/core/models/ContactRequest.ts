import { BaseEntity } from '@/core/base/BaseEntity';
import { ContactRequestSchema, IContactRequestDTO } from '@/types';

/**
 * Domain entity representing an expedition briefing request or contact form submission.
 */
export class ContactRequest extends BaseEntity {
  private _fullName: string;
  private _email: string;
  private _phone?: string;
  private _expeditionInterest: string;
  private _preferredDates?: string;
  private _notes?: string;
  private _consentCheck: boolean;

  constructor(dto: IContactRequestDTO, createdAt?: Date, updatedAt?: Date) {
    super(dto.id, createdAt, updatedAt);
    this._fullName = dto.fullName;
    this._email = dto.email;
    this._phone = dto.phone;
    this._expeditionInterest = dto.expeditionInterest;
    this._preferredDates = dto.preferredDates;
    this._notes = dto.notes;
    this._consentCheck = dto.consentCheck;
  }

  public get fullName(): string { return this._fullName; }
  public get email(): string { return this._email; }
  public get phone(): string | undefined { return this._phone; }
  public get expeditionInterest(): string { return this._expeditionInterest; }
  public get preferredDates(): string | undefined { return this._preferredDates; }
  public get notes(): string | undefined { return this._notes; }
  public get consentCheck(): boolean { return this._consentCheck; }

  public toJSON(): IContactRequestDTO {
    return {
      id: this.id,
      fullName: this._fullName,
      email: this._email,
      phone: this._phone,
      expeditionInterest: this._expeditionInterest,
      preferredDates: this._preferredDates,
      notes: this._notes,
      consentCheck: this._consentCheck,
    };
  }

  public validate(): boolean {
    ContactRequestSchema.parse({
      fullName: this._fullName,
      email: this._email,
      phone: this._phone,
      expeditionInterest: this._expeditionInterest,
      preferredDates: this._preferredDates,
      notes: this._notes,
      consentCheck: this._consentCheck,
    });
    return true;
  }
}
