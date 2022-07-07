import { getCustomRepository } from 'typeorm';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

export class ShowTransactionService {
  constructor(
    private transactionRepository = getCustomRepository(TransactionsRepository),
  ) {}

  public async execute(idTransaction: number, userId: number) {
    try {
      return await this.transactionRepository.findOne({
        where: {
          id: idTransaction,
          userId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
