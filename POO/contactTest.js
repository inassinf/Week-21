let misContactos = require("./contact");
let Persona = require("./person")
let persona1 = new Persona(1.8, 90);
let persona2 = new Persona(1.7, 70)


let agenda = new misContactos();

agenda.personas.push(persona1, persona2);

console.log(agenda);
