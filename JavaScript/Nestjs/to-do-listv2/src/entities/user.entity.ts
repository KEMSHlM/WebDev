import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
