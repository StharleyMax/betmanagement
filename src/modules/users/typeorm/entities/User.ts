import { Bank } from '@modules/bank/typeorm/entities/Bank';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Bank, bank => bank.user)
  bank: Bank[];

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
}
