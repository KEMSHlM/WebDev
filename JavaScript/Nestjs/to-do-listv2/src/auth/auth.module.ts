import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'secretkey123',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  // moduleで定義されるコントローラのうち，インスタンス化する必要があるもの
  controllers: [AuthController],
  // Nest インジェクタによってインスタンス化され，少なくともこのモジュール全体で共有されるもの
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
