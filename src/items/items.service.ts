// items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemsRepository.findOne({ where: { id } });
  }

  create(itemData: Partial<Item>): Promise<Item> {
    const item = this.itemsRepository.create(itemData);
    return this.itemsRepository.save(item);
  }

  bulkCreate(itemData: Partial<Item>): Promise<Item> {
    const item = this.itemsRepository.create(itemData);
    return this.itemsRepository.save(item);
  }

  async update(id: number, itemData: Partial<Item>): Promise<Item> {
    await this.itemsRepository.update(id, itemData);
    return this.itemsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
