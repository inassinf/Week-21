"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var libro1 = new book_1.Book("La vida es sueno", 300, "150pn600", "Calderon de la Barca", "Anaya");
var libro2 = new book_1.Book("La casa de Bernarda Alba", 200, "29pj15", "Federico Garcia Lorca", "Santillana");
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
