import { Router } from 'express';
import { SportsControllers } from '../controllers/Sports.controllers';


const sportsRouter = Router();
const sportsController = new SportsControllers();


sportsRouter.post('/', sportsController.create);

export default sportsRouter;
