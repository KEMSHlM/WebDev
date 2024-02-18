import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { User } from '../entities/user.entity';
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

  async create(user: User, createTodoDto: CreateTodoDto): Promise<Todo> {
    const { title, description, deadline, priority } = createTodoDto;
    const todo = this.todoRepository.create({
      title,
      description,
      deadline,
      priority,
      user,
    });
    return await this.todoRepository.save(todo);
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

  async updateStatus(
    id: string,
    user: User,
    updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    const todo = await this.findById(id);
    if (todo.id === user.id) {
      throw new BadRequestException('You are not the owner of this todo');
    }

    if (!updateTodoDto.todoStatus && updateTodoDto.priority === undefined) {
      throw new BadRequestException('No update parameters is provided.');
    }

    if (updateTodoDto.todoStatus) {
      todo.todoStatus = updateTodoDto.todoStatus;
    }
    if (updateTodoDto.priority !== undefined) {
      todo.priority = updateTodoDto.priority;
    }
    await this.todoRepository.save(todo);
    return todo;
  }
}
