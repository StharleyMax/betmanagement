import { SportsEntity } from '../../typeorm/entities/sports.entities';

export interface ISportsInterface {
  findOne(id: number): Promise<any>;
}
