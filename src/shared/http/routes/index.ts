import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import bankRouter from '@modules/bank/routes/bank.routes';
import sportsRouter from '@modules/sports/routes/sports.routes';
import transactionRouter from '@modules/transactions/routes/transaction.route';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/bank', bankRouter);
routes.use('/transactions', transactionRouter);

//Sports
routes.use('/sports', sportsRouter);

export default routes;
