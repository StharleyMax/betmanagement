import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { BankController } from '../controller/BankController';

const bankRouter = Router();
const bankController = new BankController();

bankRouter.get('/', bankController.index);
bankRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      nameBet: Joi.string(),
    },
  }),
  bankController.create,
);
bankRouter.put('/:id', bankController.update);

export default bankRouter;
