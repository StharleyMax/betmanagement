import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import bankRouter from '@modules/bank/routes/bank.routes';
import sportsRouter from '@modules/sports/routes/sports.routes';
import footBallLeaguesRouter from '@modules/football/Leagues/routes/footBallLeagues.route';
import coachsTeamRouter from '@modules/football/CoachsTeam/routes/coachs.routes';
import transactionRouter from '@modules/transactions/routes/transaction.route';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import isAuthenticated from '../middleware/isAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/bank', isAuthenticated, bankRouter);
routes.use('/transactions', transactionRouter);
routes.use('/session', sessionsRouter)

//Sports
routes.use('/sports', sportsRouter);

//FootBall Leagues
routes.use('/leagues', footBallLeaguesRouter);

//FootBall Coachs
routes.use('/coachs', coachsTeamRouter);

export default routes;
