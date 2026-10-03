import { BaseApiService } from '@/core/base/BaseApiService';
import { ContactRequest } from '@/core/models/ContactRequest';
import { ContactRequestSchema, IContactRequestDTO } from '@/types';

/**
 * Service managing contact submissions and night expedition briefing requests.
 */
export class ContactService extends BaseApiService<ContactRequest> {
  constructor() {
    super('/api/contact', ContactRequestSchema);
  }

  protected mapToEntity(dto: unknown): ContactRequest {
    return new ContactRequest(dto as IContactRequestDTO);
  }

  /**
   * Submits a new briefing inquiry.
   */
  public async submitBriefingRequest(payload: IContactRequestDTO): Promise<ContactRequest> {
    return this.create(payload);
  }
}
