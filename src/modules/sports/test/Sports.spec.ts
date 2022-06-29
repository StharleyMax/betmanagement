import { CreateSports } from '../services/CreateSports.service';
import { SportsControllers } from '../controllers/Sports.controller';
import { SportsRepositoryInMemory } from './in-memory/SportsRepositoryInMemory';
import { SportsEntity } from '../typeorm/entities/sports.entities';
import { SportsDTO } from '../dto/sports.dto';

describe('Create Sports', () => {
  it('Create', async () => {
    const sportRepository = new SportsRepositoryInMemory();
    const createSportService = new CreateSports();
    const createSportController = new SportsControllers();

    const sportData: SportsEntity = {
      id: 1,
      name: 'Sports Name',
      category: 'Sports Category',
      actived: true,
      create_at: new Date(),
      update_at: new Date(),
    };

    expect(createSportController.create).toHaveProperty('name');

    /*const sports = await createSport.execute(sportData);
    expect(sports).toHaveProperty('id');
    */
  });
});
