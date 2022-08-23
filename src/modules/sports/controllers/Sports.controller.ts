import { Request, Response } from 'express';
import { ActivedSport } from '../services/ActivedSports.service';
import { CreateSports } from "../services/CreateSports.service";
import { DeleteSportsService } from '../services/DeleteSports.service';
import { FindSportsService } from '../services/FindSports.service';
import { UpdateSports } from '../services/UpdateSports.service';


export class SportsControllers {


  public async index(response: Response) {
    const findSports = new FindSportsService();
    const sports = await findSports.find();
    return response.json(sports);
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params;
    const findOneSports = new FindSportsService();
    const sports = await findOneSports.findOne(+id);
    if (sports instanceof Error) {
      return response.status(400).json(sports.message);
    }
    return response.status(200).send(sports);
  }

  public async findDisable(request: Request, response: Response){
    const findSports = new FindSportsService();
    const sports = await findSports.findDisable();
    return response.json(sports);
  }

  public async create(request: Request, response: Response) {
    const { name, category } = request.body;

    const service = new CreateSports();
    const result = await service.execute({ name, category });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  public async activedSports(request: Request, response: Response) {
    const { id } = request.params;
    const updateSports = new ActivedSport();
    const activedSports = await updateSports.execute(+id);
    return response.json(activedSports);
  }

  public async updateSports(request: Request, response: Response) {
    const { name, category } = request.body;
    const { id } = request.params;
    const updateSports = new UpdateSports();
    const update = await updateSports.execute({ name, category, id: +id });
    return response.json(update);
  }


  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteSports = new DeleteSportsService();
    await deleteSports.execute(+id);
    return response.json('Sports Deleted');

  }
}

