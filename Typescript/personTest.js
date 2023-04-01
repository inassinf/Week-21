"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var persona1 = new person_1.Person("Jose", 25, "Malaga");
persona1.name;
persona1.printName();
console.log("El anio de nacimiento es: " + persona1.yearOfBirth(2023));
persona1.setAddress("Melilla");
console.log("La nueva direccion es: " + persona1.getAddress());
