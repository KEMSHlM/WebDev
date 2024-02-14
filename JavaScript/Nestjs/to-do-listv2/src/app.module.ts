import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
