import { Request, Response } from 'express';
import { FootBallLeaguesService } from '../service/footBallLeagues.service';


export class FootBallLeaguesController {


  async index(request: Request, response: Response): Promise<any> {
    const footBallLeaguesService = new FootBallLeaguesService();
    const result = await footBallLeaguesService.execute();
    return response.json(result);
  }
}
