import { Circle, Rectangle, Triangle, Square, ShapeCalculator } from '../../Solid/2.Ocp/Shapes';
import { FullTimeEmployee, PartTimeEmployee, InternEmployee, FreelancerEmployee } from '../../Solid/2.Ocp/Employees';

describe('Shape Area Calculations', () => {
    it('should calculate total area of shapes correctly', () => {
        const shapes = [
            new Circle(5),
            new Rectangle(4, 5),
            new Triangle(3),
            new Square(4)
        ];

        const shapeCalculator = new ShapeCalculator(shapes);
        const totalArea = shapeCalculator.calculateTotalArea();

        expect(totalArea).toBeCloseTo(119.0398);
    });
});

describe('Employee Salary Calculations', () => {
    it('should calculate salary for full-time, part-time, intern, and freelancer employees correctly', () => {
        const employees = [
            new FullTimeEmployee('Alice'),
            new PartTimeEmployee('Bob'),
            new InternEmployee('Charlie'),
            new FreelancerEmployee('Dave', 120)
        ];

        expect(employees[0].calculateSalary()).toBe(5000); 
        expect(employees[1].calculateSalary()).toBe(3000); 
        expect(employees[2].calculateSalary()).toBe(1000); 
        expect(employees[3].calculateSalary()).toBe(4800);
    });
});
