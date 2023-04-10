import { Point } from "./point";

let punto1 = new Point(4,3);
let punto2 = new Point(0,0);

//Coordenadas
let punto3 = new Point(1,1);
let punto4 = new Point(3,3);
let punto5 = new Point(9,9);

console.log(punto1.toString());
console.log("La distancia al origen es: " + punto1.distanceTolOrigin());



punto1.setX(2);
punto1.setY(5);

console.log(punto1.toString());
console.log("La distancia del " + punto1 + " al " + punto2+   "es: " + punto1.calculateDistance(punto2));

console.log("El cuadrante del punto1 es: " + punto1.calcularQuadrant());
console.log("El cuadrante del punto2 es: " + punto2.calcularQuadrant());

let coordenadas = [punto3, punto4, punto5];

console.log(("El punto mas cercan es" + punto2.calculateNearest(coordenadas)));

