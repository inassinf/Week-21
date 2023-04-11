import { Triangle } from "./triangle";
import { Point } from "./point";

let punt1= new Point (1,1);
let punt2= new Point (2,2); 
let punt3= new Point (3,3);

let miTriangulo = new Triangle(punt1, punt2, punt3);

console.log(miTriangulo.calculateLengthSides());
