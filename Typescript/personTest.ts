import { Person } from "./person";

let persona1 = new Person("Jose", 25, "Malaga");
let persona2 = new Person("Maria", 30, "Valencia")
persona1.name;
persona1.printName();
console.log("El anio de nacimiento es: " + persona1.yearOfBirth(2023));

persona1.setAddress("Melilla")



console.log("La nueva direccion es: " + persona1.getAddress());





