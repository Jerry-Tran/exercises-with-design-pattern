/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { Shape, Circle, Rectangle, ShapeCalculator, Triangle } from "./Shapes";
import { Employee, FreelancerEmployee, FullTimeEmployee, InternEmployee } from "./Employees";


/*=========== START PRACTICE 1 ===============*/


let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3)
];
const shapeCalculator = new ShapeCalculator(shapes);
console.log(shapeCalculator.calculateTotalArea());

/*=========== END PRACTICE 1 ===============*/



/*=========== START PRACTICE 2 ===============*/


const employees: Employee[] = [
    new FullTimeEmployee("Alice"),
    new InternEmployee("Bob"),
    new FreelancerEmployee("Charlie", 120) 
];

employees.forEach(employee => {
    console.log(`${employee.name}'s salary is ${employee.calculateSalary()}`);
});
/*=========== END PRACTICE 2 ===============*/