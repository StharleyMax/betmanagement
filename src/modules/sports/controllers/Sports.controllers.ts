import { Request, Response } from 'express';
import { CreateSports } from "../services/create.sports.service";


export class SportsControllers {

  public async create(request: Request, response: Response) {
    const { name, category } = request.body;

    const service = new CreateSports();
    const result = await service.execute({ name, category });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

