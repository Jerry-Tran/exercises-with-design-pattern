/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { EmailService } from "./EmailService";
import { SendNotification } from "./SendNotification";

const emailService = new EmailService();

const notification = new SendNotification(emailService);
notification.sendNotification("Hello, this is a notification!");