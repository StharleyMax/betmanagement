import { getRepository } from "typeorm";
import { SportsEntity } from '../typeorm/entities/sports.entities';


export class GetAllSportsService {
  async execute() {
    const repo = getRepository(SportsEntity);
    const sports = await repo.find({ where: { actived: true } });
    return sports;
  }
}
