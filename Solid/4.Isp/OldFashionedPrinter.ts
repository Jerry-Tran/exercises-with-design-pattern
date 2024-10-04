import { Printer } from "./interfaces";

export class OldFashionedPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
