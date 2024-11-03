// items/items.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.entity';
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async getItemById(@Param('id') id: number, @Res() res: Response) {
    try {
      const item = await this.itemsService.findOne(id);
      if (!item)
        return res
          .status(404)
          .json({ message: `Item with ID ${id} not found` });

      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).send('Internal Server Error');
    }
  }

  @Post()
  createItem(@Body() itemData: Partial<Item> , @Res() res : Response) {
    return this.itemsService.create(itemData);
  }

  @Put(':id')
  updateItem(
    @Param('id') id: number,
    @Body() itemData: Partial<Item>,
  ): Promise<Item> {
    return this.itemsService.update(id, itemData);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number): Promise<void> {
    return this.itemsService.remove(id);
  }
}
