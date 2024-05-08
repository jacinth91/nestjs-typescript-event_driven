export class OrderCreatedEvent {
  constructor(public readonly orderId: number, public readonly payload: any) {}
}
