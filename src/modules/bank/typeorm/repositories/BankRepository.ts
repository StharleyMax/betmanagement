import { EntityRepository, Repository } from 'typeorm';
import { Bank } from '../entities/Bank';

@EntityRepository(Bank)
export class BankRepository extends Repository<Bank> {
  public async findByUser(userId: number): Promise<Bank[] | undefined> {
    const banks = await this.find({ userId });
    return banks;
  }

  public async findOneByUser(
    bankId: number,
    userId: number,
  ): Promise<Bank | undefined> {
    const bank = await this.findOne({
      where: { id: bankId, userId: userId },
    });
    return bank;
  }
}
