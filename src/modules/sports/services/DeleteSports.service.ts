import { getRepository } from 'typeorm';
import { SportsEntity } from '../typeorm/entities/sports.entities';

export class DeleteSportsService {
  public async execute(id: number) {
    const sportsEntity = getRepository(SportsEntity);
    const sports = await sportsEntity.findOne(id);

    const disableSports = sportsEntity.create({ id, actived: false });
    const saveSports = sportsEntity.save(disableSports);

    return sportsEntity.find({
      where: { id, actived: false, update_at: new Date() },
    });
  }
}
