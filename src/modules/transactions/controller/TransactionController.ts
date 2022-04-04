import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { CreateTransactionService } from '../services/CreateTransactionService';
import { FindTransactionService } from '../services/FindTransactionService';

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
}
