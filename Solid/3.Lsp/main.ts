/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { CashPayment } from "./CashPayment";
import { handlePayment } from "./handlePayment";


const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50); // Output: Cannot process cash payment online!
