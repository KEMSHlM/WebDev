import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // moduleで定義されるコントローラのうち，インスタンス化する必要があるもの
  controllers: [AuthController],
  // Nest インジェクタによってインスタンス化され，少なくともこのモジュール全体で共有されるもの
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
