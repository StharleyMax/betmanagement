import { getRepository } from "typeorm";
import { SportsEntity } from '../typeorm/entities/sports.entities';


export class GetAllSportsService {
  async execute() {
    const repo = getRepository(SportsEntity);
    const sports = await repo.find({ where: { actived: true } });
    return sports;
  }

  async getById(id: any) {
    const repo = getRepository(SportsEntity);
    const sports = await repo.findOne(id, { where: { actived: true } });
    if (sports?.actived != true) {
      return new Error('Sports not exists!');
    }
    return sports;
  }
}
