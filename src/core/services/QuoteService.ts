import { BaseApiService } from '@/core/base/BaseApiService';
import { Quote } from '@/core/models/Quote';
import { IQuoteDTO } from '@/types';

/**
 * Service managing editorial statements and tracker quotes.
 */
export class QuoteService extends BaseApiService<Quote> {
  constructor() {
    super('/api/quotes');
  }

  protected mapToEntity(dto: unknown): Quote {
    return new Quote(dto as IQuoteDTO);
  }
}
