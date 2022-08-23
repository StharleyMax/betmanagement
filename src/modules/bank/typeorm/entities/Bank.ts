import { Transaction } from '../../../transactions/typeorm/entities/Transaction';
import { User } from '../../../users/typeorm/entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IEntityContract } from '@shared/infra/IEntityContract';

@Entity('bank')
export class Bank implements IEntityContract {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, user => user.bank)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => Transaction, transaction => transaction.bank)
  transactions: Transaction[];

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  name: string;

  @Column({ name: 'name_bet' })
  nameBet: string;

  @Column()
  description: string;

  @Column()
  balance: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
