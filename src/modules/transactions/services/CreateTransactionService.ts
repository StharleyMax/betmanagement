import { BankRepository } from '@modules/bank/typeorm/repositories/BankRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeTransaction } from '../enum/type-transaction';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

type TransactionProps = {
  bankId: number;
  type: TypeTransaction;
  price: number;
};

export class CreateTransactionService {
  constructor(
    private transactionRepository = getCustomRepository(TransactionsRepository),
    private bankRepository = getCustomRepository(BankRepository),
  ) {}
  public async execute(
    userId: number,
    { bankId, type, price }: TransactionProps,
  ) {
    const bank = await this.bankRepository.findOne({
      where: { id: bankId, userId },
    });
    if (!bank) throw new AppError('bank not found');
    const oldBalance = bank.balance;
    if (type === TypeTransaction.DEPOSIT) bank.balance += price;
    if (type === TypeTransaction.WITHDRAW) {
      if (bank.balance < price)
        throw new AppError('Insufficient funds for this bank');
      bank.balance -= price;
    }
    const transaction = await this.transactionRepository.save({
      userId,
      bankId,
      type,
      price,
      oldBalance,
    });
    await this.bankRepository.save(bank);
    return transaction;
  }
}
