import { Shape } from "./Shape";

export class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}
