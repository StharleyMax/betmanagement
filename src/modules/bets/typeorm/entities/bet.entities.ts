import { SportsEntity } from '@modules/sports/typeorm/entities/sports.entities';
import { User } from '@modules/users/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bets')
export class BetEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToMany(() => User, user => user.bet)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToMany(() => SportsEntity, sportsEntity => sportsEntity.bet)
  @JoinColumn({ name: 'id_sport' })
  sportsEntity: SportsEntity;

  @Column({ name: 'odd' })
  odd: number; // number

  @Column({ name: 'game' })
  game: string; // string

  @Column({ name: 'status' })
  status: boolean; //boolean

  @CreateDateColumn({ type: 'timestamptz', name: 'create_at' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  update_at: Date;
}
