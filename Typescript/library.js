"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () { return this.address; };
    Library.prototype.getManager = function () { return this.manager; };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var datos;
        for (var i = 0; i < this.books.length; i++) {
            datos = ("Book" + [i + 1] + ": " + "Title" + this.books[i].getTitle() + "Numer of Pages-" +
                this.books[i].getNPages() + " IBN- " + this.books[i].getIsbn() + " Author- " + this.books[i].getAuthor() +
                " Editorial- " + this.books[i].getEditorial());
        }
        return datos;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var librosAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                librosAutor.push(this.books[i]);
            }
        }
        return librosAutor;
    };
    return Library;
}());
exports.Library = Library;
