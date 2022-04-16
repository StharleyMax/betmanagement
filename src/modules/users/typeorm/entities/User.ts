import { Bank } from '@modules/bank/typeorm/entities/Bank';
import { Transaction } from '@modules/transactions/typeorm/entities/Transaction';
import { IEntityContract } from '@shared/infra/IEntityContract';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn,
} from 'typeorm';

@Entity('users')
export class User implements IEntityContract  {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Bank, bank => bank.user)
  bank: Bank[];

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
