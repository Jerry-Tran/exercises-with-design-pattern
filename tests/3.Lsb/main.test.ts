import { CreditCardPayment } from '../../Solid/3.Lsp/CreditCardPayment';
import { PayPalPayment } from '../../Solid/3.Lsp/PayPalPayment';
import { CashPayment } from '../../Solid/3.Lsp/CashPayment';
import { handlePayment } from '../../Solid/3.Lsp/handlePayment';

let consoleOutput: string[] = [];
const mockedLog = (output: string) => consoleOutput.push(output);
console.log = mockedLog;

beforeEach(() => {
    consoleOutput = [];
});

test("should Credit card payment processes successfully", () => {
    const creditCardPayment = new CreditCardPayment();
    handlePayment(creditCardPayment, 100);

    expect(consoleOutput).toEqual([
        "Processing credit card payment of $100",
        "Validating credit card details...",
        "Charging the credit card..."
    ]);
});

test("should PayPal payment processes successfully", () => {
    const payPalPayment = new PayPalPayment();
    handlePayment(payPalPayment, 200);

    expect(consoleOutput).toEqual([
        "Processing PayPal payment of $200",
        "Redirecting to PayPal...",
        "Completing PayPal transaction..."
    ]);
});

test("should Cash payment processes successfully", () => {
    const cashPayment = new CashPayment();
    handlePayment(cashPayment, 50);

    expect(consoleOutput).toEqual([
        "Processing cash payment of $50",
        "Cannot process cash payment online!"
    ]);
});
