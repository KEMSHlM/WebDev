import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  // Exclude は，パスワードがシリアライズされないようにする．
  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todo: Todo[];
}
