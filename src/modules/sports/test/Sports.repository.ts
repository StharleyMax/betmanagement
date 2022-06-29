import { ISportsInterface } from './Sports.interface';
import { SportsEntity } from '../typeorm/entities/sports.entities';
import { getRepository } from 'typeorm';

export class SportsRepository implements ISportsInterface {
  async create({ name, id, category }: SportsEntity): Promise<SportsEntity> {
    const sports = getRepository(SportsEntity).create({
      category,
      name,
    });
    return sports;
  }
}
