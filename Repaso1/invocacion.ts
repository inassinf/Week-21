import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let array1 = ["Casa","Coche", "Ciudad", "Cesta"];
let array2= ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3= ["Venezuela", "Veneno", "Voltaje"];


let contar1 = add(array1);
let contar2 = add(array2);
let contar3 = add(array3);

 console.log("El total de letras del array1 es: " + isEven(contar1));
 console.log("El total de letras del array2 es: " + isEven(contar2));
 console.log("El total de letras del array3 es: " + isEven(contar3));
