import { Router } from 'express';
import { CoachsController } from '../controller/coachs.controller';


const coachsTeamIdRouter = Router();
const coachsController = new CoachsController();

coachsTeamIdRouter.get('/:id', coachsController.coachsTeamById);



export default coachsTeamIdRouter;
