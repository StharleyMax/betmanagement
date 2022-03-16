import { Router } from 'express';
import { SportsControllers } from '../controllers/Sports.controller';


const sportsRouter = Router();
const sportsController = new SportsControllers();


sportsRouter.post('/', sportsController.create);
sportsRouter.get('/', sportsController.index);
sportsRouter.delete('/:id', sportsController.delete);
sportsRouter.patch('/:id', sportsController.activedSports);

export default sportsRouter;
