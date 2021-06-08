import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';
import { TasksInterface } from '../entities/tasks.interface';

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>
  ) { }

  public async findAll() {
    try {
      return await this.taskRepo.find({ relations: ['category'] });
    } catch (error) {
      return error;
    }
  }

  public async create(task: TasksInterface) {
    try {
      return await this.taskRepo.save(task);
    } catch (error) {
      return error;
    }
  }

  public async update(id: number, task: TasksInterface) {
    try {
      await this.taskRepo.update(id, task)
      const taskUpdated = this.taskRepo.findOne(id)
      return taskUpdated;
    } catch (error) {
      return error;
    }
  }
  public async remove(id: number) {
    try {
      return await this.taskRepo.delete(id);
    } catch (error) {
      return error;
    }
  }
}
