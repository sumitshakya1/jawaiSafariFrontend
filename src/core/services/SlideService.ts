import { BaseApiService } from '@/core/base/BaseApiService';
import { HeroSlide } from '@/core/models/HeroSlide';
import { IHeroSlideDTO } from '@/types';

/**
 * Service handling hero slides data operations.
 */
export class SlideService extends BaseApiService<HeroSlide> {
  constructor() {
    super('/api/slides');
  }

  protected mapToEntity(dto: unknown): HeroSlide {
    return new HeroSlide(dto as IHeroSlideDTO);
  }

  /**
   * Fetches slide by slide number (e.g. '01', '02', '03', '04')
   */
  public async getBySlideNumber(slideNumber: string): Promise<HeroSlide | null> {
    const all = await this.getAll();
    return all.find((s) => s.slideNumber === slideNumber) || null;
  }
}
