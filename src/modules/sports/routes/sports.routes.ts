import { Router } from 'express';
import { SportsControllers } from '../controllers/Sports.controller';


const sportsRouter = Router();
const sportsController = new SportsControllers();

sportsRouter.post('/', sportsController.create);
sportsRouter.get('/', sportsController.index);
sportsRouter.get('/disable', sportsController.findDisable);
sportsRouter.get('/:id', sportsController.findOne);
sportsRouter.delete('/:id', sportsController.delete);
sportsRouter.patch('/:id', sportsController.activedSports);
sportsRouter.put('/:id', sportsController.updateSports);

export default sportsRouter;
