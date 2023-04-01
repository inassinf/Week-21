import {Person} from "./person";

export class Contacts{

    people: Person [];

    constructor(){
     
        this.people= [];
       
    }

    

    printCalendar(){
    
          console.log(this.people);   
        }
    
}

