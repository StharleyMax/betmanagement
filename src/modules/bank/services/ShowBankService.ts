import { getCustomRepository } from 'typeorm';
import { BankRepository } from '../typeorm/repositories/BankRepository';
import AppError from '@shared/errors/AppError';

export class ShowBankService {
  public async execute(bankId: number, userId: number) {
    const bankRepository = getCustomRepository(BankRepository);
    const bank = await bankRepository.findOneByUser(bankId, userId);
    if (!bank) throw new AppError('Bank not found');
    return bank;
  }
}
