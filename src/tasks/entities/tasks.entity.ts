import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import { Category } from "../../categories/entities/categories.entity";

@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  creationAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => Category, category => category.tasks)
  category: Category;
}