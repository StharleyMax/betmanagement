import { SportsEntity } from '@modules/sports/typeorm/entities/sports.entities';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bet')
export class BetEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  idUser: number;

  @ManyToMany(() => SportsEntity, sportsEntity => sportsEntity.bet)
  @JoinColumn({ name: 'idSports' })
  sportsEntity: SportsEntity;

  @CreateDateColumn({ type: 'timestamptz', name: 'create_at' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  update_at: Date;
}
