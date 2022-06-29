import { SportsEntity } from '../typeorm/entities/sports.entities';

export interface ISportsInterface {
  create(sports: SportsEntity): Promise<SportsEntity>;
}
