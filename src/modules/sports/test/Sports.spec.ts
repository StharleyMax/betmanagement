import { SportsRepositoryInMemory } from './in-memory/SportsRepositoryInMemory';
import { GetAllSportsService } from '../services/GetallSports.service';
import { SportsEntityFake } from './entityFake/Sports.entityFake';
import { mockSports } from './mocks/Sports.mock';

describe('Test Sports BetManager', () => {
  it('Must test GetById', async () => {
    const sportsMemory = new SportsRepositoryInMemory(mockSports());
    const findOneSports = await sportsMemory.findOne(1);
    expect(findOneSports.id).toBe(1);
  });
});
