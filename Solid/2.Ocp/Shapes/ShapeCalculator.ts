import { Shape } from "./Shape";

export class ShapeCalculator {
  constructor(private shapes: Shape[]) {}

  calculateTotalArea(): number {
    return this.shapes.reduce(
      (total, shape) => total + shape.calculateArea(),
      0
    );
  }
}
