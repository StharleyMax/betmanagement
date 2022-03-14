import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate, Segments, Joi } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      telephone: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  usersController.create,
);
usersRouter.get('/', usersController.index);
usersRouter.get('/:value', usersController.show);
usersRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      telephone: Joi.string().required(),
      email: Joi.string().email().required(),
      oldPassword: Joi.string(),
      password: Joi.string().optional(),
      passwordConfirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  usersController.update,
);

export default usersRouter;
