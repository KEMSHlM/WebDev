import { Injectable } from '@nestjs/common';
import { Todo } from './interface/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { randomUUID } from 'crypto';
import { TodoStatus } from './todo-status.enum';

// Injectableデコレーターは，クラスにメタデータを追加し，そのクラスをDIコンテナに登録する．
// つまり，このクラスは，他のクラスからデコレータを用いてインスタンス化されることができる．
@Injectable()
export class TodoService {
  constructor(private readonly todos: Todo[]) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const task: Todo = {
      id: randomUUID(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      status: TodoStatus.PENDING,
    };

    this.todos.push(task);

    return task;
  }

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findOne(id: string): Promise<Todo> {
    return this.todos.find((todo) => todo.id === id);
  }

  async updateStatus(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index != -1) {
      this.todos[index].status = updateTodoDto.status;
      return this.todos[index];
    } else {
      throw new Error('Todo not Error');
    }
  }
}
