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
calcularQuadrant():number{
    let cuadrante;
    if (this.x==0 && this.y==0) {
        cuadrante=0;
    } else if(this.x>0 && this.y>0) {
        cuadrante=1;
    }else if (this.x<0 && this.y>0) {
        cuadrante=2;
    } else if(this.x<0 && this.y<0) {
        cuadrante=3;
    } else{
        cuadrante=4;
    }

    return cuadrante;
}

calculateNearest(points : Point[]) : Point{
     let menor = this.calculateDistance(points[0]);
     let nearest:Point = points[0];

    for(let i=0; i<points.length; i++){
        if(this.calculateDistance(points[i])<menor){
            menor= this.calculateDistance(points[i]);
            nearest= points[i];
        }
    }
    return nearest;
}

}



// let Point1 = new Point(2,5);
// console.log(Point1.toString());
