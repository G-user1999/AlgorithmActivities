import { Status } from "./ENUMS/Status";
import { Genre } from "./ENUMS/Genre";
import { Library } from "./Classes/Library";
import { Books } from "./Classes/Book";

//neste arquivo vão ser feitas as instancias das classes, e vão ser chamados todos os métodos
const livro1 = new Books("Moby-dick","Herman Melville",Genre.Drama,Status.Borrowed)
const livro2 = new Books("Don Quixote","Miguel de Cervantes",Genre.Fantasy,Status.Available)
const livro3 = new Books("Wuthering Heights","Emily Bronte",Genre.Romance,Status.Available)


const example = new Library()
example.createUser("Jonn",145,"JoonEmail")
example.createUser("Mary",146,"MaryEmail")


console.log(example.users)

//example.bookBorrowing(livro1,example.users[0])
example.reserveBook(livro1,example.users[0])

//example.listBooksByGenre(Genre.Drama)

example.listAvailableBooks()