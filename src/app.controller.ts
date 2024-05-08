import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderService } from './Orders/order.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly orderService: OrderService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  placeOrder() {
    return this.orderService.createOrder({
      customerName: 'jacinth',
      orderDate: '12-12-1991',
      orderDetails: ['toffee', 'cow', 'dahi'],
    });
  }
}
