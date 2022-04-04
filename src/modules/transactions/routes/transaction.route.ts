import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { TransactionController } from '../controller/TransactionController';
import { TypeTransaction } from '../enum/type-transaction';

const transactionRouter = Router();

const transactionController = new TransactionController();

transactionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      bankId: Joi.number().required(),
      type: Joi.string().valid(
        TypeTransaction.DEPOSIT,
        TypeTransaction.WITHDRAW,
      ),
      price: Joi.number().required(),
    },
  }),
  transactionController.create,
);
transactionRouter.get('/', transactionController.find);
transactionRouter.get(
  '/:idTransaction',
  celebrate({
    [Segments.PARAMS]: {
      idTransaction: Joi.number().required(),
    },
  }),
  transactionController.show,
);

export default transactionRouter;
