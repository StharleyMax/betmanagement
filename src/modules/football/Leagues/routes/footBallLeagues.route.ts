import { Router } from "express"
import { FootBallLeaguesController } from "../controller/FootBallLeagues.controller";


const footBallLeaguesRouter = Router();
const footBallLeaguesController = new FootBallLeaguesController();

footBallLeaguesRouter.get('/', footBallLeaguesController.index);

export default footBallLeaguesRouter;
