import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      database: 'test_database',
      host: 'db',
      username: 'root',
      password: 'root',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{js,ts}']
    })
  ],
})
export class AppModule { }