import { ShowBankService } from '@modules/bank/services/ShowBankService';
import { BankRepository } from '@modules/bank/typeorm/repositories/BankRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TransactionsRepository } from '../typeorm/repositories/TransactionsRepository';

interface TransactionProps {
  bankId: number;
  type: string; //enum
  price: number;
}

export class CreateTransactionService {
  public async execute(
    userId: number,
    { bankId, type, price }: TransactionProps,
  ) {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const bankRepository = getCustomRepository(BankRepository);
    const bank = await bankRepository.findOne({
      where: { id: bankId, userId },
    });
    if (!bank) throw new AppError('bank not found');
    const transaction = await transactionRepository.save({
      userId,
      bankId,
      type,
      price,
      oldBalance: bank.balance,
    });
    type === 'deposit' ? (bank.balance += price) : (bank.balance -= price);
    await bankRepository.save(bank);
    return transaction;
  }
}
