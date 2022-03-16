import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { BankController } from '../controller/BankController';

const bankRouter = Router();
const bankController = new BankController();

bankRouter.get('/', bankController.index);
bankRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  bankController.find,
);
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
bankRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
      nameBet: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  bankController.update,
);
bankRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  bankController.delete,
);

export default bankRouter;
