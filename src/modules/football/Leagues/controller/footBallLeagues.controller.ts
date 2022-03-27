import { Request, Response } from 'express';
import { FootBallLeaguesService } from '../service/footBallLeagues.service';


export class FootBallLeaguesController {


  async index(request: Request, response: Response) {
    const footBallLeaguesService = new FootBallLeaguesService();
    const result = await footBallLeaguesService.execute();
    return result.status(200).json();
  }
}
