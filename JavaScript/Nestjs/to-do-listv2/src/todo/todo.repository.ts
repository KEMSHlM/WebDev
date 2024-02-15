import { Todo } from 'src/entities/todo.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status.enum';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { title, description } = createTodoDto;
    const todo = this.create({
      id,
      title,
      description,
      status: TodoStatus.PENDING,
      cretedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(todo);

    return todo;
  }
}
