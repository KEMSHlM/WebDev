import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  // moduleで定義されるコントローラのうち，インスタンス化する必要があるもの
  controllers: [TodoController],
  // Nest インジェクタによってインスタンス化され，少なくともこのモジュール全体で共有されるもの
  providers: [TodoService],
})
export class TodoModule {}
