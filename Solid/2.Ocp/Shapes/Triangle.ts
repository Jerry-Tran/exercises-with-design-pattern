import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(private length: number) {
    super();
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}
