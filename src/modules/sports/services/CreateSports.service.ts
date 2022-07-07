import { SportsEntity } from '../typeorm/entities/sports.entities';
import { SportsRepository } from '../typeorm/repositories/sports.repositories';
import { SportsDTO } from '../dto/sports.dto';
import { getRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';

export class CreateSports {
  async execute({ name, category }: SportsDTO): Promise<SportsDTO | Error> {
    const createSports = getRepository(SportsEntity);

    if (await createSports.findOne({ name, actived: true })) {
      throw new Error('Name already exists');
    }

    const sports = createSports.create({ name, category, actived: true });
    return await createSports.save(sports);
  }
}
