export class Point{

private x: number;
private y: number;

constructor(x: number, y: number){
    this.x = x;
    this.y = y;
}

setX(x){
    this.x = x;
}

getX(){
    return this.x;
}

setY(y){
    this.y = y;
}

getY(){
    return this.y;
}

toString():string{
   
     return `Los puntos son: "(${this.x}, ${this.y})"`;
}
}

// let Point1 = new Point(2,5);
// console.log(Point1.toString());
