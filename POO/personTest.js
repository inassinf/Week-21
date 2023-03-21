var {Persona} = require ("./person")

var Jose = new Persona(1.80, 90);
Jose.colorOjos = "Azul";
Jose.nacionalidad = "Espania"
Jose.yearOfBirth = 1980;
Jose.hobbies = ["Comer", "Correr", "Andar", "Natacion"]

console.log("Su IMC es: " + Jose.imc());
console.log("Su edad es: " + Jose.edad());

Jose.printHobbies();
Jose.printAll();