import { EntityRepository, Repository } from 'typeorm';
import { Bank } from '../entities/Bank';

@EntityRepository(Bank)
export class BankRepository extends Repository<Bank> {
  public async findByUser(userId: number): Promise<Bank[] | undefined> {
    try {
      const banks = await this.find()
      return banks;
    } catch (error) {
      console.error('me diz cacete: ', error);
    }
  }
}
