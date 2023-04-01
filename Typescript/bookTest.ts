import { Book } from "./book";

let libro1 = new Book("La vida es sueno", 300, "150pn600", "Calderon de la Barca", "Anaya");
let libro2 = new Book("La casa de Bernarda Alba", 200, "29pj15", "Federico Garcia Lorca", "Santillana");


console.log(libro1.getAuthor());
console.log(libro1.getEditorial());
console.log(libro1.getIsbn());
console.log(libro1.getNPages());
console.log(libro1.getTitle());

libro1.setAuthor("Maria Jose");
libro1.setTitle("Pesadilla");
libro1.setEditorial("Stevens");
libro1.setIsbn("150pbn54");
libro1.setNpages(500);

console.log(libro1.toString());




