import { BaseEntity } from '@/core/base/BaseEntity';
import { BaseApiService } from '@/core/base/BaseApiService';

/**
 * Generic repository interface abstracting persistent storage access.
 */
export interface IRepository<T extends BaseEntity> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<boolean>;
}

/**
 * Generic repository implementation wrapping service access and optional in-memory caching.
 */
export class BaseRepository<T extends BaseEntity> implements IRepository<T> {
  protected readonly service: BaseApiService<T>;
  protected cache: Map<string, T> = new Map();
  protected isCached = false;

  constructor(service: BaseApiService<T>) {
    this.service = service;
  }

  public async getAll(forceRefresh = false): Promise<T[]> {
    if (!this.isCached || forceRefresh) {
      try {
        const items = await this.service.getAll();
        this.cache.clear();
        items.forEach((item) => this.cache.set(item.id, item));
        this.isCached = true;
      } catch (error) {
        // If fetch fails (e.g. during build-time SSR when server isn't running),
        // fallback to pre-seeded cache if available
        if (this.cache.size > 0) {
          return Array.from(this.cache.values());
        }
        throw error;
      }
    }
    return Array.from(this.cache.values());
  }

  public async getById(id: string, forceRefresh = false): Promise<T | null> {
    if (!forceRefresh && this.cache.has(id)) {
      return this.cache.get(id) || null;
    }
    try {
      const item = await this.service.getById(id);
      if (item) {
        this.cache.set(item.id, item);
      }
      return item;
    } catch {
      return this.cache.get(id) || null;
    }
  }

  public async save(entity: T): Promise<T> {
    const json = entity.toJSON();
    const saved = entity.id && this.cache.has(entity.id)
      ? await this.service.update(entity.id, json)
      : await this.service.create(json);
    this.cache.set(saved.id, saved);
    return saved;
  }

  public async delete(id: string): Promise<boolean> {
    const success = await this.service.delete(id);
    if (success) {
      this.cache.delete(id);
    }
    return success;
  }

  public clearCache(): void {
    this.cache.clear();
    this.isCached = false;
  }
}
