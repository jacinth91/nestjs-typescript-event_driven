import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderService } from './Orders/order.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { cartService } from './Users/cart/cart.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, OrderService, cartService],
})
export class AppModule {}
