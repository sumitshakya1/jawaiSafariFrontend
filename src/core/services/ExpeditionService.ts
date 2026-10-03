import { BaseApiService } from '@/core/base/BaseApiService';
import { Expedition } from '@/core/models/Expedition';
import { IExpeditionDTO } from '@/types';

/**
 * Service managing expedition phases and narrative manifests.
 */
export class ExpeditionService extends BaseApiService<Expedition> {
  constructor() {
    super('/api/expeditions');
  }

  protected mapToEntity(dto: unknown): Expedition {
    return new Expedition(dto as IExpeditionDTO);
  }
}
