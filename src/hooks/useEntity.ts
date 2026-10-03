'use client';

import { useState, useEffect, useCallback } from 'react';
import { BaseEntity } from '@/core/base/BaseEntity';
import { BaseRepository } from '@/core/base/BaseRepository';

interface UseEntityResult<T extends BaseEntity> {
  entity: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Generic hook for fetching a single entity instance through its Repository.
 */
export function useEntity<T extends BaseEntity>(
  repository: BaseRepository<T>,
  id: string
): UseEntityResult<T> {
  const [entity, setEntity] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchEntity = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await repository.getById(id);
      setEntity(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [repository, id]);

  useEffect(() => {
    fetchEntity();
  }, [fetchEntity]);

  return { entity, loading, error, refetch: fetchEntity };
}
