import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TasksInterface } from '../entities/tasks.interface';

@Controller('api/tasks')
export class TasksController {

  constructor(
    private tasksService: TasksService
  ){}

 //@UseGuards(JwtAuthGuard)
 @Get()
 async findAll() {
   return await this.tasksService.findAll();
 }

 //@UseGuards(JwtAuthGuard)
 @Post()
 async create(@Body() task: TasksInterface) {
   return await this.tasksService.create(task);
 }
 
 //@UseGuards(JwtAuthGuard)
 @Patch(':id')
 async update(@Param('id') id: number, @Body() task: TasksInterface) {
   return await this.tasksService.update(id, task);
 }

 //@UseGuards(JwtAuthGuard)
 @Delete(':id')
 async remove(@Param('id') id: number) {
   return await this.tasksService.remove(id);
 }
  
}
