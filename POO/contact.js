let myContacto = require("./person");


class Contacts{

    constructor(){
     this.personas =[]
    }

    printPersons(){
        for(let i=0; i<this.personas.length; i++){
           this.personas[i].printAll();
        }
    }
}

module.exports = Contacts;
