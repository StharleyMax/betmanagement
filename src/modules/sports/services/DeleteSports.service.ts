import { getRepository } from "typeorm";
import { SportsEntity } from "../typeorm/entities/sports.entities";

export class DeleteSportsService {

  public async execute(id: number) {
    const sportsEntity = getRepository(SportsEntity);
    const sports = await sportsEntity.findOne(id);

    const sportsCreate = sportsEntity.create({ id, actived: false });
    const sportsSave = sportsEntity.save(sportsCreate);

    const result = sportsEntity.find({ where: { id, actived: false } });
    return result;

  }
}
