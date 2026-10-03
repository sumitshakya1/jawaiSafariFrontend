import { BaseApiService } from '@/core/base/BaseApiService';
import { SpecificationRow } from '@/core/models/SpecificationRow';
import { ISpecificationRowDTO } from '@/types';

/**
 * Service managing specification metrics and technical parameters.
 */
export class SpecService extends BaseApiService<SpecificationRow> {
  constructor() {
    super('/api/specs');
  }

  protected mapToEntity(dto: unknown): SpecificationRow {
    return new SpecificationRow(dto as ISpecificationRowDTO);
  }
}
