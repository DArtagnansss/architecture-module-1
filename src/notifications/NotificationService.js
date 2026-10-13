import { formatMoney } from "../shared/money.js";

export class NotificationService {
  constructor(database, provider) {
    this.database = database;
    this.provider = provider;
  }

  async sendOrderConfirmation(order) {
    // Marketing edits this template often, but it ships with the whole application.
    const message = await this.provider.sendEmail({
      to: order.customer.email,
      subject: `Order ${order.id} confirmed`,
      body: `Thanks ${order.customer.name}. Your total is ${formatMoney(order.totalCents)}.`
    });
    const record = {
      id: message.providerMessageId,
      orderId: order.id,
      channel: "EMAIL",
      template: "ORDER_CONFIRMATION_V1",
      status: "SENT",
      latencyMs: message.latencyMs,
      sentAt: new Date().toISOString()
    };
    this.database.notifications.push(record);
    return structuredClone(record);
  }
}
