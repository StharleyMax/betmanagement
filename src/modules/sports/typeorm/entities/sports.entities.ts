import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sports')
export class SportsEntity {

  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'category' })
  category: string;

  @Column({ name: 'actived' })
  actived: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  create_at: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'update_at' })
  update_at: Date;
}
