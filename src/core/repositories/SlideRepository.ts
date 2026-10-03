import { BaseRepository } from '@/core/base/BaseRepository';
import { HeroSlide } from '@/core/models/HeroSlide';
import { SlideService } from '@/core/services/SlideService';
import { SEED_SLIDES } from '@/constants/seedData';

/**
 * Repository handling HeroSlide entities.
 */
export class SlideRepository extends BaseRepository<HeroSlide> {
  private static instance: SlideRepository;

  private constructor() {
    super(new SlideService());
    SEED_SLIDES.forEach((s) => {
      const slide = new HeroSlide(s);
      this.cache.set(slide.id, slide);
      this.cache.set(slide.slideNumber, slide);
    });
    this.isCached = true;
  }

  public static getInstance(): SlideRepository {
    if (!SlideRepository.instance) {
      SlideRepository.instance = new SlideRepository();
    }
    return SlideRepository.instance;
  }

  public async getBySlideNumber(num: string): Promise<HeroSlide | null> {
    const all = await this.getAll();
    return all.find((s) => s.slideNumber === num) || null;
  }
}
