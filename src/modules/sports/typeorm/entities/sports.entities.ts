import { BetEntity } from '@modules/bet/typeorm/entities/bet.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sports')
export class SportsEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @OneToMany(() => BetEntity, bet => bet.sportsEntity)
  bet: BetEntity;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'category' })
  category: string;

  @Column({ name: 'actived' })
  actived: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'update_at' })
  update_at: Date;
}
