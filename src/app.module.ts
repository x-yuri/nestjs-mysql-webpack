import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import * as mysql2 from 'mysql2';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      dialectModule: mysql2,
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
