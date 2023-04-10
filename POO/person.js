class Persona{

    constructor(hight, weight){
        this.colorOjos
        this.altura = hight
        this.peso = weight
        this.nacionalidad
        this.yearOfBirth
        this.hobbies
    }
        imc(){ let masa= Math.floor(this.peso/(this.altura * this.altura))
        return masa; 
        }

        edad() {let age= (2023 - this.yearOfBirth) 
        return age;}

        printAll(){
    let atributos = [this.colorOjos + "-" + this.altura + "m" + "-" + this.peso + "Kg" + "-" + this.nacionalidad +"-" + this.yearOfBirth ]
    console.log(atributos);
 }

        printHobbies(){
    let aficiones = this.hobbies;
    console.log("Sus Hobbies son: " + aficiones);
 }

}

module.exports = Persona;

