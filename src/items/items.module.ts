import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../items/items.entity';
import { authGuard } from '../middlewares';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authGuard).forRoutes(ItemsController); 
  }
}