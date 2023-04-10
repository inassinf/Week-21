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

distanceTolOrigin():number{
    let distancia=0;
    distancia = Math.sqrt((this.x*this.x) + (this.y*this.y));

    return distancia;
}

calculateDistance(anotherPoint:Point):number{
    
    let horizontal = this.x - anotherPoint.x;
    let vertical = this.y - anotherPoint.y;
    let distancia2;

    distancia2 = Math.sqrt((horizontal*horizontal) + (vertical*vertical));
    return distancia2;
}

}



// let Point1 = new Point(2,5);
// console.log(Point1.toString());
