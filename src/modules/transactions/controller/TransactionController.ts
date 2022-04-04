import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { CreateTransactionService } from '../services/CreateTransactionService';
import { FindTransactionService } from '../services/FindTransactionService';
import { ShowTransactionService } from '../services/ShowTransactionService';

export class TransactionController {
  public async create(request: Request, response: Response): Promise<Response> {
    //const userId = request.user.id;
    const { userId } = request.query;
    if (!userId) throw new AppError('missing param: userId');
    const { bankId, type, price } = request.body;
    const transactionService = new CreateTransactionService();
    const transaction = await transactionService.execute(+userId, {
      bankId,
      type,
      price,
    });
    return response.json(transaction);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { userId } = request.query;
    if (!userId) throw new AppError('missing param: userId');
    const findTransactionService = new FindTransactionService();
    return response.json(await findTransactionService.execute(+userId));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { userId } = request.query;
    if (!userId) throw new AppError('missing param: userId');
    const { idTransaction } = request.params;
    const showTransactionService = new ShowTransactionService();
    const transaction = await showTransactionService.execute(
      +idTransaction,
      +userId,
    );
    if (!transaction) throw new AppError('transaction not found', 404);
    return response.json(transaction);
  }
}
