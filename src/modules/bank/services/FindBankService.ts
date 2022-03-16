import { getCustomRepository } from 'typeorm';
import { BankRepository } from '../typeorm/repositories/BankRepository';

export class FindBankService {
  public async execute(userId: number) {
    const bankRepository = getCustomRepository(BankRepository);
    return bankRepository.findByUser(userId);
  }
}
