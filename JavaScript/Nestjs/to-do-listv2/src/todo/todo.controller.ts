import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '../entities/todo.entity';
import { TodoStatus } from './todo-status.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from 'src/entities/user.entity';
import { GetUser } from 'src/auth/decorater/get-user.decorator';

@Controller('todo')
@UseInterceptors(ClassSerializerInterceptor)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createTodoDto: CreateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    return await this.todoService.create(user, createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  // @Param に渡されたパラメーターをルートパラメータとして利用することができる．
  // 以下では，@Param は リクエストのパラメーターを取得するために使用している．．
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Todo> {
    return await this.findById(id);
  }

  @Get(':todoStatus')
  async findByStatus(
    @Param('todoStatus') todoStatus: TodoStatus,
  ): Promise<Todo[]> {
    return await this.todoService.findByStatus(todoStatus);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateStatus(
    @Param('id') id: string,
    @GetUser() user: User,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.updateStatus(id, user, updateTodoDto);
  }
}
