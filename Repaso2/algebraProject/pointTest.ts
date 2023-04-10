import { Point } from "./point";

let punto1 = new Point(4,3);
let punto2 = new Point(0,0);
console.log(punto1.toString());
console.log("La distancia al origen es: " + punto1.distanceTolOrigin());



punto1.setX(2);
punto1.setY(5);

console.log(punto1.toString());
console.log("La distancia del " + punto1 + " al " + punto2+   "es: " + punto1.calculateDistance(punto2));

