import { getRepository } from 'typeorm';
import { SportsEntity } from '../typeorm/entities/sports.entities';

export class FindSportsService {
  async find() {
    const repo = getRepository(SportsEntity);
    return await repo.find({ where: { actived: true } });
  }

  async findOne(id: any) {
    const repo = getRepository(SportsEntity);
    const sports = await repo.findOne({
      where: { id: id, actived: true },
    });
    if (sports?.actived != true) {
      throw new Error('Sports not exists!');
    }

    return sports;
  }
  async findDisable() {
    const repo = getRepository(SportsEntity);
    return await repo.find({ where: { actived: false } });
  }
}
