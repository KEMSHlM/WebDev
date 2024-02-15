import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  // @Param に渡されたパラメーターをルートパラメータとして利用することができる．
  // 以下では，@Param は リクエストのパラメーターを取得するために使用している．．
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo> {
    return await this.findOne(id);
  }

  @Patch(':id')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.updateStatus(id, updateTodoDto);
  }
}
