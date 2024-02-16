import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoStatus } from './todo-status.enum';

// Injectableデコレーターは，クラスにメタデータを追加し，そのクラスをDIコンテナに登録する．
// つまり，このクラスは，他のクラスからデコレータを用いてインスタンス化されることができる．
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.save(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    // extendsしているので，もともとあるメソッドを使っている．
    return this.todoRepository.find();
  }

  // ここは，throw new Errorしなくていいのか？
  async findByStatus(todoStatus: TodoStatus): Promise<Todo[]> {
    // extendsしているので，もともとあるメソッドを使っている．
    return this.todoRepository.find({
      where: {
        todoStatus: todoStatus,
      },
    });
  }

  async findById(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  async updateStatus(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findById(id);
    todo.todoStatus = updateTodoDto.todoStatus;
    return todo;
  }
}
