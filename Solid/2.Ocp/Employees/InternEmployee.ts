import { Employee } from "./Employee";

export class InternEmployee extends Employee {
  calculateSalary(): number {
    return 1000;
  }
}
