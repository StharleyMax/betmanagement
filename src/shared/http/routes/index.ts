import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import bankRouter from '@modules/bank/routes/bank.routes';
import sportsRouter from '@modules/sports/routes/sports.routes';
import footBallLeaguesRouter from '@modules/football/Leagues/routes/footBallLeagues.route';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/bank', bankRouter);


//Sports
routes.use('/sports', sportsRouter);


//FootBall Leagues
routes.use('/leagues', footBallLeaguesRouter);

export default routes;
