import { Book } from "./book";

export class Library{

 private books: Book [];
 private address: string;
 private manager: string;

 constructor(books: Book [], address: string, manager: string){
    this.books = books;
    this.address = address;
    this.manager = manager;
 }

 public getAddress(): string
 {return this.address}
 
 public getManager(): string
 {return this.manager}
 
 public setAddress(address){
    this.address = address
 }

 public setManager(manager){
    this.manager = manager
 }


 public toString ():string {

    let datos;
    for (let i=0; i<this.books.length; i++){
        datos = (
         "Book" + [i+1] + ": " + " Title " + this.books[i].getTitle() + "Numer of Pages-" +
        this.books[i].getNPages() + " IBN- " +  this.books[i].getIsbn() + " Author- " + this.books[i].getAuthor() +
        " Editorial- " + this.books[i].getEditorial());  
    }
    return datos;
 }

 public getNumberOfBooks ():number{
    return this.books.length;
 }
 
 public findByAuthor (author:string):Book[]{
    let librosAutor: Book[] = [];
    for (let i=0; i<this.books.length; i++){
        if(this.books[i].getAuthor() == author){
            librosAutor.push(this.books[i])
        }
    }

    return librosAutor;
    
 }

}