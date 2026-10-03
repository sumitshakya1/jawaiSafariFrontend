'use client';

import { useState, useEffect, useCallback } from 'react';
import { BaseEntity } from '@/core/base/BaseEntity';
import { BaseRepository } from '@/core/base/BaseRepository';

interface UseEntityListResult<T extends BaseEntity> {
  items: T[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Generic hook for fetching all entity instances through its Repository.
 */
export function useEntityList<T extends BaseEntity>(
  repository: BaseRepository<T>,
  autoFetch = true
): UseEntityListResult<T> {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await repository.getAll();
      setItems(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [repository]);

  useEffect(() => {
    if (autoFetch) {
      fetchItems();
    }
  }, [autoFetch, fetchItems]);

  return { items, loading, error, refetch: fetchItems };
}
