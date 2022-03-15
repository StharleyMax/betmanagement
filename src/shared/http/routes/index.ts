import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import bankRouter from '@modules/bank/routes/bank.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/bank', bankRouter);

export default routes;
