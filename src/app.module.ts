import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.cthrokqgzera.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'database-1',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    TasksModule,
    AuthModule
  ],
})
export class AppModule {}
