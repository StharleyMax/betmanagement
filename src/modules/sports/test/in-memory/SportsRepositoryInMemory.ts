import { ISportsInterface } from '../interfaces/Sports.interface';
import { SportsEntityFake } from '../entityFake/Sports.entityFake';
import { GetAllSportsService } from '../../services/GetallSports.service';

export class SportsRepositoryInMemory implements ISportsInterface {
  private sports: SportsEntityFake[] = [];

  constructor(sports: SportsEntityFake[]) {
    this.sports = sports;
  }

  async findOne(id: number): Promise<any> {
    return Promise.resolve(this.sports.find(sports => sports.id === id));
  }
}
