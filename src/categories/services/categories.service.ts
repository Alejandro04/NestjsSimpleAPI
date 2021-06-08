import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/categories.entity';
import { CategoryInterface } from '../entities/categories.interface';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>
  ) { }

  public async findAll() {
    try {
      return await this.categoryRepo.find({ relations: ['tasks'] });
    } catch (error) {
      return error;
    }
  }

  public async create(category: CategoryInterface) {
    try {
      return await this.categoryRepo.save(category);
    } catch (error) {
      return error;
    }
  }

  public async update(id: number, category: CategoryInterface) {
    try {
      await this.categoryRepo.update(id, category)
      const categoryUpdated = this.categoryRepo.findOne(id)
      return categoryUpdated;
    } catch (error) {
      return error;
    }
  }
  public async remove(id: number) {
    try {
      return await this.categoryRepo.delete(id);
    } catch (error) {
      return error;
    }
  }
}
