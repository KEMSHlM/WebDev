import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

// 実体としてこのクラスが渡ってくる．
// getメソッドのメンバーと名前が一致している．
// このDtoは，必要に応じてメソッドごとに作成する
export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  deadline: string;

  @IsInt()
  @Min(0)
  @Max(3)
  @IsOptional()
  priority?: number = 0;
}
