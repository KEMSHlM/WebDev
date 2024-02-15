import { IsEnum, IsString } from 'class-validator';
import { TodoStatus } from '../todo-status.enum';

// 実体としてこのクラスが渡ってくる．
// getメソッドのメンバーと名前が一致している．
// このDtoは，必要に応じてメソッドごとに作成する
export class UpdateTodoDto {
  @IsString()
  @IsEnum(TodoStatus)
  todoStatus: TodoStatus;
}
