import { EmailService } from "../../Solid/5.Dip/EmailService";
import { SendNotification } from "../../Solid/5.Dip/SendNotification";

let consoleOutput: string[] = [];
const mockedLog = (output: string) => consoleOutput.push(output);
console.log = mockedLog;

beforeEach(() => {
  consoleOutput = [];
});

describe("SendNotification", () => {
  test("should send an email notification", () => {
    const emailService = new EmailService();
    const notification = new SendNotification(emailService);

    notification.sendNotification("Hello, this is a notification!");

    expect(consoleOutput).toEqual(["Sending email with message: Hello, this is a notification!"]);
  });
});
