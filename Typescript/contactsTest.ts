import { Contacts } from "./contacts";
import { Person } from "./person";




let persona3 = new Person("Jose", 25, "Malaga");
let persona4 = new Person("Maria", 30, "Valencia");

let contactos = new Contacts();

contactos.people.push(persona3, persona4);

contactos.printCalendar();