import { BaseRepository } from '@/core/base/BaseRepository';
import { Expedition } from '@/core/models/Expedition';
import { ExpeditionService } from '@/core/services/ExpeditionService';
import { SEED_EXPEDITIONS } from '@/constants/seedData';

/**
 * Repository handling Expedition phase briefings and visual field logs.
 */
export class ExpeditionRepository extends BaseRepository<Expedition> {
  private static instance: ExpeditionRepository;

  private constructor() {
    super(new ExpeditionService());
    SEED_EXPEDITIONS.forEach((e) => {
      const exp = new Expedition(e);
      this.cache.set(exp.id, exp);
    });
    this.isCached = true;
  }

  public static getInstance(): ExpeditionRepository {
    if (!ExpeditionRepository.instance) {
      ExpeditionRepository.instance = new ExpeditionRepository();
    }
    return ExpeditionRepository.instance;
  }
}
