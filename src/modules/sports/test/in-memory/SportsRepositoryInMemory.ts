import { ISportsInterface } from '../Sports.interface';
import { SportsEntity } from '../../typeorm/entities/sports.entities';

export class SportsRepositoryInMemory implements ISportsInterface {
  private sports: SportsEntity[] = [];

  async create(sport: SportsEntity): Promise<SportsEntity> {
    Object.assign(sport, {
      name: 'Sports Name',
      category: 'Sports Category',
      actived: true,
      create_at: new Date(),
      update_at: new Date(),
    });
    this.sports.push(sport);
    return sport;
  }
}
