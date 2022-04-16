import { getCustomRepository } from 'typeorm';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

export class ShowTransactionService {
  constructor(
    private transactionRepository = getCustomRepository(TransactionsRepository),
  ) {}

  public async execute(idTransaction: number, userId: number) {
    try {
      const transaction = await this.transactionRepository.findOne({
        where: {
          id: idTransaction,
          userId,
        },
      });
      return transaction;
    } catch (err) {
      console.log(err);
    }
  }
}
