import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const {
  POSTGRES_HOST = 'localhost',
  POSTGRES_PORT = '5432',
  POSTGRES_USER = 'mattermost',
  POSTGRES_PASSWORD = 'mattermost',
  POSTGRES_DB = 'sample-api',
} = process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/**/*{.ts,.js}'],
  synchronize: false,
});
