import { TodoStatus } from 'src/todo/todo-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatus,
    default: TodoStatus.PENDING,
  })
  todoStatus: TodoStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
