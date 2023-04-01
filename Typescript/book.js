"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // Implementacion metodos getters y setters
    Book.prototype.getTitle = function () { return this.title; };
    Book.prototype.getNPages = function () { return this.nPages; };
    Book.prototype.getIsbn = function () { return this.isbn; };
    Book.prototype.getAuthor = function () { return this.author; };
    Book.prototype.getEditorial = function () { return this.editorial; };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (nPages) {
        this.nPages = this.nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Titulo: " + this.title + " " + "Numero de Paginas: " + this.nPages + " " + "Isbn: " + this.isbn + " " +
            "Autor: " + this.author + " " + "Editorial: " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
