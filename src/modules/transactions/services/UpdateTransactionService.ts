import { BankRepository } from '@modules/bank/typeorm/repositories/BankRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeTransaction } from '../enum/type-transaction';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

type TransactionProps = {
  transactionId: number;
  bankId: number;
  type: TypeTransaction;
  price: number;
};

export class UpdateTransactionService {
  constructor(
    private transactionRepository = getCustomRepository(TransactionsRepository),
    private bankRepository = getCustomRepository(BankRepository),
  ) {}

  public async execute(
    userId: number,
    { transactionId, bankId, type, price }: TransactionProps,
  ) {
    const bank = await this.bankRepository.findOneByUser(bankId, userId);
    //console.log('findBankByUserId: ', bank);

    if (!bank) throw new AppError('Bank not found');

    const transaction = await this.transactionRepository.findOne({
      where: { userId },
      order: { updatedAt: 'DESC' },
    });

    if (!transaction) throw new AppError('transaction not found');

    if (transaction.id !== transactionId) {
      console.log(transaction.id, transactionId);
      throw new AppError('no lasted transaction');
    }

    if (type === TypeTransaction.DEPOSIT)
      bank.balance = transaction.oldBalance + price; // 50 = 50

    if (type === TypeTransaction.WITHDRAW) {
      if (transaction.oldBalance < price)
        throw new AppError('Insufficient funds for this bank');
      bank.balance = transaction.oldBalance - price;
    }

    const transactionUpdate = await this.transactionRepository.save({
      id: transactionId,
      userId,
      bankId,
      type,
      price,
    });
    await this.bankRepository.save(bank);
    return transactionUpdate;
  }
}
