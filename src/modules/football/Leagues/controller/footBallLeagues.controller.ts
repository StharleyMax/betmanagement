import { Request, Response } from 'express';
import { FootBallLeaguesService } from '../service/footBallLeagues.service';
import { FootBallLeaguesByIdService } from '../service/footBallLeaguesById.service';


export class FootBallLeaguesController {


  async index(request: Request, response: Response): Promise<any> {
    const footBallLeaguesService = new FootBallLeaguesService();
    const result = await footBallLeaguesService.execute();
    return response.json(result);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;
    const leaguesById = new FootBallLeaguesByIdService();
    const result = await leaguesById.execute({ id: id });
    return response.json(result);
  }
}
