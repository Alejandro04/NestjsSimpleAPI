import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CategoryInterface } from '../entities/categories.interface';

@Controller('api/categories')
export class CategoriesController {

  constructor(
    private categoriesService: CategoriesService
  ){}

 //@UseGuards(JwtAuthGuard)
 @Get()
 async findAll() {
   return await this.categoriesService.findAll();
 }

 //@UseGuards(JwtAuthGuard)
 @Post()
 async create(@Body() category: CategoryInterface) {
   return await this.categoriesService.create(category);
 }
 
 //@UseGuards(JwtAuthGuard)
 @Patch(':id')
 async update(@Param('id') id: number, @Body() category: CategoryInterface) {
   return await this.categoriesService.update(id, category);
 }

 //@UseGuards(JwtAuthGuard)
 @Delete(':id')
 async remove(@Param('id') id: number) {
   return await this.categoriesService.remove(id);
 }
  
}
