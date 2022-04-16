import { Request, Response } from 'express';
import { CoachsService } from '../services/coachs.service';
import 'dotenv/config';
import axios from 'axios';

export class CoachsController {
  async coachsTeamById(request: Request, response: Response) {
    const { id } = request.params;
    const coachsTeam = new CoachsService();
    const result = await coachsTeam.execute(id);
    return response.send(result);
  }
}
