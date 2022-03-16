import { EntityRepository, Repository } from "typeorm";
import { SportsEntity } from '../entities/sports.entities';

@EntityRepository(SportsEntity)
export class SportsRepository extends Repository<SportsEntity>{ }
