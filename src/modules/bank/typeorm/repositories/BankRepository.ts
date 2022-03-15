import { Repository } from 'typeorm';
import { Bank } from '../entities/Bank';

export class BankRepository extends Repository<Bank> {
  public async findByUser(userId: number): Promise<Bank[]> {
    const banks = await this.find({ where: { user: userId } });
    return banks;
  }
}
