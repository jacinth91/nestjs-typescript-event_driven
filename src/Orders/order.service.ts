import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { OrderCreatedEvent } from 'src/Orders/order-created.event';
import { orderEvents } from 'src/Orders/orderEvents';
import { CreateOrderDto } from 'src/models/Order/createOrderDto';

@Injectable()
export class OrderService {
  constructor(private eventemitter: EventEmitter2) {}

  createOrder(createOrderDto: CreateOrderDto) {
    console.log('order created', createOrderDto);
    this.eventemitter.emit(
      orderEvents.ORDER_CREATED,
      new OrderCreatedEvent(1, { ...createOrderDto }),
    );
  }
}
