import { BaseApiService } from '@/core/base/BaseApiService';
import { ExpeditionCard } from '@/core/models/ExpeditionCard';
import { IExpeditionCardDTO } from '@/types';

/**
 * Service managing individual field cards and observation logs.
 */
export class CardService extends BaseApiService<ExpeditionCard> {
  constructor() {
    super('/api/expeditions/cards');
  }

  protected mapToEntity(dto: unknown): ExpeditionCard {
    return new ExpeditionCard(dto as IExpeditionCardDTO);
  }
}
