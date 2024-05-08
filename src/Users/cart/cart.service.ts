import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderCreatedEvent } from 'src/Orders/order-created.event';
import { orderEvents } from 'src/Orders/orderEvents';

@Injectable()
export class cartService {
  @OnEvent(orderEvents.ORDER_CREATED)
  handleOrderCreatedEvents(event: OrderCreatedEvent) {
    console.log('handle this event ', event);
  }
}
