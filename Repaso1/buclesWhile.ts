//Funcion Par

function hasEven(myNums:number[]){

    let i: number=0;
    let par: boolean = false;

    while(i<myNums.length){
     if(myNums[i]%2==0){
        par= true;
      }
      i++;
    } 
    return par;
}
console.log("Existe un numero par: " + hasEven([1,3,5]));

//Funcion Nombres

function startWithM(myNames:string[]){

    let i: number=0;
    let verdadero: boolean = true;

    while (i<myNames.length && (myNames[i][0]!="M")) {
        
        verdadero = false;
        i++;
    }

   return verdadero;
    
}

console.log("Todos los nombres empiezan por M: " + startWithM(["Monica", "Manuel", "Alejandro"]));
