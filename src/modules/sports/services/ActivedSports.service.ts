import AppError from '../../../shared/errors/AppError';
import { getRepository } from 'typeorm';
import { SportsEntity } from '../typeorm/entities/sports.entities';

export class ActivedSport {
  async execute(id: number) {
    const sportsRepository = getRepository(SportsEntity);
    const findSports = await sportsRepository.find({
      where: { id, actived: false },
    });

    if (!findSports) throw new Error('Sports not found');

    return sportsRepository.update(id, {
      actived: true,
      update_at: new Date(),
    });
  }
}
