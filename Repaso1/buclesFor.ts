// //Numeros Impares

// function evenNumbers(num){
//     for(let i=0; i<num; i++){
//         if(i%2!=0){
//             console.log(i);
            
//         }
//     }
// }

// evenNumbers(10);

// // Revertir un Array
// let myArr = [];
// function myRevert(myArr){

//     let nuevoArr;
//     nuevoArr=[];
//   for(let i= (myArr.length-1); i>=0; i--){
//   nuevoArr.push(myArr[i]);
//   }
//  console.log(nuevoArr);
 
// }

// myRevert([1,3,5,7])

//Funcion Colores del Arcoiris

// function isRainbow(colors){
// let arcoiris = ["rojo", "naranja", "amarillo", "verde", "azul", "morado", "lila"];

// for (let i= 0; i<colors.length; i++){
//    console.log((arcoiris.includes(colors[i])));
    
// }
// }

// isRainbow(["rojo","magenta","amarillo", "celeste", "verde"]);


//Funcion Suma de Palabras

export function add(myWords){

    let sumaLetras=0;
    for (let i= 0; i<myWords.length; i++){
        sumaLetras += myWords[i].length;
    }
    return sumaLetras;   
}

// console.log("El total de letras es: " + add(["rojo", "azul"]));
 

