import { Book } from "./book";
import { Library } from "./library";

let book1 = new Book ("Segismundo y compania", 120, "15040gfg", "Fernando Lalana", "Calcetin Tejero");
let book2 = new Book ("Yerma", 200, "posd54", "Federico Garcia Lorca", "Elche");
let book3 = new Book("La vida es sueno", 300, "150pn600", "Calderon de la Barca", "Anaya");
let book4 = new Book("La casa de Bernarda Alba", 200, "29pj15", "Federico Garcia Lorca", "Santillana");

let coleccionLibros = [book1, book2, book3, book4];

let bibloteca1 = new Library(coleccionLibros, "Leopoldo Queipo", "Jose Mena");

console.log("La direccion es: " + bibloteca1.getAddress());
console.log("El manager es: " + bibloteca1.getManager());
console.log("Los datos completos son: " + bibloteca1.toString());
console.log("El numero de libros es: " + bibloteca1.getNumberOfBooks());
console.log("Estos libros son de Lorca: " + bibloteca1.findByAuthor("Federico Garcia Lorca"));

bibloteca1.setAddress("Musico Granados");
bibloteca1.setManager("Juan Rios");

console.log("La nueva direccion es: " + bibloteca1.getAddress());
console.log("El nuevo manager es: " + bibloteca1.getManager());










