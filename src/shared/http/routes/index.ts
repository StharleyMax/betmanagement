import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import bankRouter from '@modules/bank/routes/bank.routes';
import sportsRouter from '@modules/sports/routes/sports.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/bank', bankRouter);


//Sports
routes.use('/sports', sportsRouter);


export default routes;
