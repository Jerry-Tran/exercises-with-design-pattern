import { PaymentProcessor } from "./PaymentProcessor";

export function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}
