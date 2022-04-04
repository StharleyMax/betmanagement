import { Request, Response } from 'express';
import { CoachsService } from '../services/coachs.service';


export class CoachsController {

  async coachsTeamById(request: Request, response: Response) {
    const { id } = request.params;
    const coachsTeam = new CoachsService();
    const result = coachsTeam.execute(id);
    return response.json(result);
  }
}
