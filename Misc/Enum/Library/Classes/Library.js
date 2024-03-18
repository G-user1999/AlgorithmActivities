"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Book_1 = require("./Book");
var Library = /** @class */ (function () {
    function Library() {
        //Esta função adiciona o Usuario ao array de usuarios
        this.users = [];
    }
    //esta função lista todos os livros disponivei
    Library.prototype.listAvailableBooks = function (books) {
        if (books.Status[1]) {
            console.log("".concat(books.Name, " by ").concat(books.Author));
        }
        ;
    };
    //esta função lista todos os livros emprestados
    Library.prototype.listBorrowedBooks = function (books) {
        if (books.Status[4]) {
            console.log("".concat(books.Name, " by ").concat(books.Author));
        }
    };
    ;
    //esta função lista todos os livros atrasados
    Library.prototype.listLateBooks = function (books) {
        if (books.Status[3]) {
            console.log("".concat(books.Name, " by ").concat(books.Author));
        }
    };
    ;
    //Esta função lista todos o slivros por genero
    Library.prototype.listBooksByGenre = function (genre) {
        console.log("Books in ".concat(genre, " genre:"));
        var booksInGenre = Book_1.Books[genre];
        if (booksInGenre.length === 0) {
            console.log("No books found in this genre.");
        }
        else {
            booksInGenre.Status(function (books) {
                console.log("".concat(books.Name, " by ").concat(books.Author));
            });
        }
    };
    //Esta função cadastra um novo usuário do tipo User
    Library.prototype.createUser = function (Name, ID, Contact) {
        var newUser = {
            Name: Name,
            ID: ID,
            Contact: Contact
        };
        this.addUser(newUser);
        //return newUser;
    };
    Library.prototype.addUser = function (user) {
        this.users.push(user);
    };
    //Esta função empresta um livro para um usuario
    Library.prototype.bookBorrowing = function (books, user) {
        if (books.Status === 1) {
            return console.log("".concat(books.Name, " was Borrowed by ").concat(user.Name), books.Status = 4);
        }
        else {
            console.log("".concat(books.Name, " is unavailable for borrowing"));
        }
    };
    //Mostra o historico de emprestimo de um usuario
    Library.prototype.historicoDeEmprestimo = function () {
    };
    //Esta função reserva um livro SE ele estiver emprestado E não reservado
    Library.prototype.reserveBook = function (books, user) {
        if (books.Status === 4) {
            return console.log("".concat(books.Name, " was reserved by ").concat(user.Name), books.Status = 2);
        }
        else {
            console.log("".concat(books.Name, " can not be reserved"));
        }
    };
    //Esta função verifica se o usuario tem multa e quanto
    Library.prototype.verificaMulta = function () {
    };
    return Library;
}());
exports.Library = Library;
