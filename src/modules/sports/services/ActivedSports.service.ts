import AppError from '../../../shared/errors/AppError';
import { getRepository } from 'typeorm';
import { SportsEntity } from '../typeorm/entities/sports.entities';

export class ActivedSport {
  async execute(id: number) {
    const sportsRepository = getRepository(SportsEntity);
    const sportsId = await sportsRepository.find({
      where: { id, actived: false },
    });

    if (!sportsId) throw new AppError('Sports not found');

    return sportsRepository.update(id, {
      actived: true,
      update_at: new Date(),
    });
  }
}
