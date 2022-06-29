import { CreateSports } from '../src/modules/sports/services/CreateSports.service';
import { SportsRepository } from '../src/modules/sports/typeorm/repositories/sports.repositories';
import { SportsEntity } from '../src/modules/sports/typeorm/entities/sports.entities';

describe('Test Sports', () => {
  it('Create Sports', async () => {
    const sportService = new CreateSports();

    const sportData: SportsEntity = {
      id: 1,
      name: 'sport test',
      category: 'category sports test',
      actived: true,
      create_at: new Date(),
      update_at: new Date(),
    };
  });
});
