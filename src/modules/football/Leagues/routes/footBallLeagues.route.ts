import { Router } from "express"
import { FootBallLeaguesController } from "../controller/footBallLeagues.controller";


const footBallLeaguesRouter = Router();
const footBallLeaguesController = new FootBallLeaguesController();

footBallLeaguesRouter.get('/', footBallLeaguesController.index);
footBallLeaguesRouter.get('/:coutry', footBallLeaguesController.getCoutryName);
footBallLeaguesRouter.get('/:id', footBallLeaguesController.getById);

export default footBallLeaguesRouter;
