import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/data-source.config';

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(typeOrmConfig), AuthModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
