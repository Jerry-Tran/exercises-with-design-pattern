import { NotificationService } from "./NotificationService";

export class EmailService implements NotificationService {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}
