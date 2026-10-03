import { BaseEntity } from '@/core/base/BaseEntity';
import { ApiClient } from '@/core/services/ApiClient';
import { z } from 'zod';

/**
 * Generic abstract BaseApiService implementing CRUD, validation, and serialization.
 * @template T Entity type extending BaseEntity
 */
export abstract class BaseApiService<T extends BaseEntity> {
  protected readonly endpoint: string;
  protected readonly client: ApiClient;
  protected readonly schema?: z.ZodTypeAny;

  /**
   * @param endpoint Base route endpoint (e.g. '/api/slides')
   * @param schema Optional Zod schema for runtime response validation
   */
  constructor(endpoint: string, schema?: z.ZodTypeAny) {
    this.endpoint = endpoint;
    this.client = ApiClient.getInstance();
    this.schema = schema;
  }

  /**
   * Abstract factory method converting raw API DTO into concrete Entity instance.
   */
  protected abstract mapToEntity(dto: unknown): T;

  /**
   * Validates DTO against Zod schema if configured.
   */
  protected validateDto(dto: unknown): void {
    if (this.schema) {
      this.schema.parse(dto);
    }
  }

  /**
   * Fetches all entities from the endpoint.
   */
  public async getAll(): Promise<T[]> {
    try {
      const data = await this.client.get<unknown[]>(this.endpoint);
      if (!Array.isArray(data)) {
        throw new Error(`Expected array response from ${this.endpoint}`);
      }
      return data.map((item) => {
        this.validateDto(item);
        const entity = this.mapToEntity(item);
        entity.validate();
        return entity;
      });
    } catch (error) {
      console.error(`[BaseApiService] Error fetching all from ${this.endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Fetches an entity by unique ID.
   */
  public async getById(id: string): Promise<T | null> {
    try {
      const data = await this.client.get<unknown>(`${this.endpoint}/${id}`);
      if (!data) return null;
      this.validateDto(data);
      const entity = this.mapToEntity(data);
      entity.validate();
      return entity;
    } catch (error) {
      console.error(`[BaseApiService] Error fetching by ID ${id} from ${this.endpoint}:`, error);
      return null;
    }
  }

  /**
   * Creates a new entity via POST.
   */
  public async create(payload: unknown): Promise<T> {
    try {
      this.validateDto(payload);
      const data = await this.client.post<unknown>(this.endpoint, payload);
      const entity = this.mapToEntity(data);
      entity.validate();
      return entity;
    } catch (error) {
      console.error(`[BaseApiService] Error creating at ${this.endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Updates an entity via PUT.
   */
  public async update(id: string, payload: unknown): Promise<T> {
    try {
      const data = await this.client.put<unknown>(`${this.endpoint}/${id}`, payload);
      const entity = this.mapToEntity(data);
      entity.validate();
      return entity;
    } catch (error) {
      console.error(`[BaseApiService] Error updating ${id} at ${this.endpoint}:`, error);
      throw error;
    }
  }

  /**
   * Deletes an entity via DELETE.
   */
  public async delete(id: string): Promise<boolean> {
    try {
      await this.client.delete(`${this.endpoint}/${id}`);
      return true;
    } catch (error) {
      console.error(`[BaseApiService] Error deleting ${id} from ${this.endpoint}:`, error);
      return false;
    }
  }
}
