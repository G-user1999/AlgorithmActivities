"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status_1 = require("./ENUMS/Status");
var Genre_1 = require("./ENUMS/Genre");
var Library_1 = require("./Classes/Library");
var Book_1 = require("./Classes/Book");
//neste arquivo vão ser feitas as instancias das classes, e vão ser chamados todos os métodos
var livro1 = new Book_1.Books("Moby-dick", "Herman Melville", Genre_1.Genre.Drama, Status_1.Status.Borrowed);
var livro2 = new Book_1.Books("Don Quixote", "Miguel de Cervantes", Genre_1.Genre.Fantasy, Status_1.Status.Available);
var livro3 = new Book_1.Books("Wuthering Heights", "Emily Bronte", Genre_1.Genre.Romance, Status_1.Status.Available);
var example = new Library_1.Library();
example.createUser("Jonn", 145, "JoonEmail");
example.createUser("Mary", 146, "MaryEmail");
console.log(example.users);
//example.bookBorrowing(livro1,example.users[0])
example.reserveBook(livro1, example.users[0]);
//example.listBooksByGenre(Genre.Drama)
example.listAvailableBooks(livro1);
