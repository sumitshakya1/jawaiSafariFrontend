import { BaseRepository } from '@/core/base/BaseRepository';
import { ContactRequest } from '@/core/models/ContactRequest';
import { ContactService } from '@/core/services/ContactService';

/**
 * Repository handling ContactRequest submissions.
 */
export class ContactRepository extends BaseRepository<ContactRequest> {
  private static instance: ContactRepository;

  private constructor() {
    super(new ContactService());
  }

  public static getInstance(): ContactRepository {
    if (!ContactRepository.instance) {
      ContactRepository.instance = new ContactRepository();
    }
    return ContactRepository.instance;
  }
}
