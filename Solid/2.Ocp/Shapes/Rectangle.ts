import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(private height: number, private width: number) {
        super();
    }

    calculateArea(): number {
        return this.height * this.width;
    }
}