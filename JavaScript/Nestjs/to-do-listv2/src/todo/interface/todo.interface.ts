import { TodoStatus } from '../todo-status.enum';

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
}
