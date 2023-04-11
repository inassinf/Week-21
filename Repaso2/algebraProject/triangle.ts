import { Point } from "./point";

export class Triangle{

vertex1: Point;
vertex2: Point;
vertex3: Point;

constructor(vertex1: Point, vertex2: Point, vertex3: Point){

    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.vertex3 = vertex3;

}

calculateLengthSides() : number[]{
  
    let arrayDistancia: number[]=[];

    arrayDistancia.push(Math.round(this.vertex1.calculateDistance(this.vertex2)));
    arrayDistancia.push(Math.round(this.vertex2.calculateDistance(this.vertex3)));
    arrayDistancia.push(Math.round(this.vertex3.calculateDistance(this.vertex1)));

    return arrayDistancia;

}

}