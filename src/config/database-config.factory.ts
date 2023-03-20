import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class DatabaseConfigFactory implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('database.host'),
      username: this.configService.get<string>('database.user'),
      password: this.configService.get<string>('database.password'),
      port: this.configService.get<number>('database.port'),
      database: this.configService.get<string>('database.name'),
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, '../../migrations/**/[!dataSource]*.ts')],
      migrationsRun: true,
      synchronize: true,
    };
  }
}
