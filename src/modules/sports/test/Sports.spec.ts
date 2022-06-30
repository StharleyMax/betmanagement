import { SportsRepositoryInMemory } from './in-memory/SportsRepositoryInMemory';
import { GetAllSportsService } from '../services/FindSports.service';
import { SportsEntityFake } from './entityFake/Sports.entityFake';
import { SportsEntity } from '../typeorm/entities/sports.entities';
import { mockSports } from './mocks/Sports.mock';
import {} from '../services/FindSports.service';

describe('Test Sports BetManager', () => {
  it('Must test GetById', async () => {
    const sportsMemory = new SportsRepositoryInMemory(mockSports());

    //Mock entity
    // jest.mock('../typeorm/entities/sports.entities', () => {
    //   return jest.fn();
    // });



    const findOneSports = await sportsMemory.findOne(1);
    expect(findOneSports.id).toBe(1);
  });
});
