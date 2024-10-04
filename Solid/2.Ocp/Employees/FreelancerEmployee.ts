import { Employee } from "./Employee";

export class FreelancerEmployee extends Employee {
  constructor(name: string, public workingHours: number) {
    super(name);
  }

  calculateSalary(): number {
    return this.workingHours * 40; // $40/hour
  }
}
