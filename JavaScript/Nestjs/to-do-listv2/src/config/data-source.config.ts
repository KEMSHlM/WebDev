import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';
import { User } from 'src/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Todo, User],
  synchronize: true,
  logging: true,
};
