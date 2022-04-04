import { getCustomRepository } from 'typeorm';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

export class FindTransactionService {
  constructor(
    private transactionRepository = getCustomRepository(TransactionsRepository),
  ) {}
  public async execute(userId: number) {
    const transactions = await this.transactionRepository.find({
      where: { userId },
    });
    console.log(transactions);
    return transactions;
  }
}
