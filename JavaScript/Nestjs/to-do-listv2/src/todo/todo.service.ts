import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';
import { TodoRepository } from './todo.repository';

// Injectableデコレーターは，クラスにメタデータを追加し，そのクラスをDIコンテナに登録する．
// つまり，このクラスは，他のクラスからデコレータを用いてインスタンス化されることができる．
@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.createTodo(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    // extendsしているので，もともとあるメソッドを使っている．
    return this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!todo) {
      throw new Error(` ${id} is not found !`);
    }
    return todo;
  }

  async updateStatus(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    todo.status = updateTodoDto.status;
    return todo;
  }
}
