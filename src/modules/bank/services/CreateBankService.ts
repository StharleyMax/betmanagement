import { getCustomRepository } from 'typeorm';
import { BankDto } from '../dto/BankDto';
import { BankRepository } from '../typeorm/repositories/BankRepository';

export class CreateBankService {
  public async execute(bankDto: BankDto, userId: number) {
    const bankRepository = getCustomRepository(BankRepository);
    return bankRepository.save({ ...bankDto, userId });
  }
}
