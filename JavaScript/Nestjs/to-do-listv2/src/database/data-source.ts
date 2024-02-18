import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.getOrThrow('DATABASE_HOST'),
  port: configService.getOrThrow('DATABASE_PORT'),
  database: configService.getOrThrow('DATABASE_NAME'),
  username: configService.getOrThrow('DATABASE_USER'),
  password: configService.getOrThrow('DATABASE_PASSWORD'),
  synchronize: true,
  entities: ['src/entities/**.ts'],
  migrations: ['src/migrations/**.ts'],
});

export default AppDataSource;
