import { IBaseEntity } from '@/types';

/**
 * Abstract BaseEntity providing core identification, timestamp tracking,
 * serialization, and validation contracts across all domain entities.
 */
export abstract class BaseEntity implements IBaseEntity {
  private readonly _id: string;
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  /**
   * @param id Unique identifier. If omitted, generates a random unique id.
   * @param createdAt Creation timestamp
   * @param updatedAt Last update timestamp
   */
  constructor(id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `id_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
    this._createdAt = createdAt ? new Date(createdAt) : new Date();
    this._updatedAt = updatedAt ? new Date(updatedAt) : new Date();
  }

  /**
   * Gets the immutable unique entity ID.
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Gets the entity creation timestamp.
   */
  public get createdAt(): Date {
    return this._createdAt;
  }

  /**
   * Gets the entity last updated timestamp.
   */
  public get updatedAt(): Date {
    return this._updatedAt;
  }

  /**
   * Sets the updated timestamp to current or provided date.
   */
  protected markUpdated(date?: Date): void {
    this._updatedAt = date || new Date();
  }

  /**
   * Serializes the entity instance into a plain JavaScript dictionary/DTO.
   */
  public abstract toJSON(): object;

  /**
   * Validates internal entity invariants and schema consistency.
   * @returns true if valid, throws or returns false if invalid.
   */
  public abstract validate(): boolean;
}
