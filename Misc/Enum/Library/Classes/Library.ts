import { Books } from "./Book";

export class Library {


    

    //esta função lista todos os livros disponivei
    function listAvailableBooks(books: Book[]): void {
  console.log("Available Books:");
  books.forEach((book) => {
    if (book."available") {
      console.log(`${book.title} by ${book.author}`);
    }
  });
}
    //esta função lista todos os livros emprestados
    function listBorrowedBooks(books: Book[]): void {
  console.log("Borrowed Books:");
  books.forEach((book) => {
    if (book."Borrowed") {
      console.log(`${book.title} by ${book.author}`);
    }
  });
}
    //esta função lista todos os livros atrasados
    function listLateBooks(books: Book[]): void {
  console.log("Late Return Books:");
  books.forEach((book) => {
    if (book."Late Return") {
      console.log(`${book.title} by ${book.author}`);
    }
  });
}
    //Esta função lista todos o slivros por genero
    function listBooksByGenre(books: Books[], genre: string): void {
  console.log(`Books in ${genre} genre:`);
  const booksInGenre = books.filter(book => book.genre === genre);
  if (booksInGenre.length === 0) {
    console.log("No books found in this genre.");
  } else {
    booksInGenre.forEach(book => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
}
    //Esta função cadastra um novo usuário do tipo User
    function createUser(name: string, id: number, contact: string): User {
  const newUser: User = {
    name: name,
    id: id,
    contact: contact
  };
  return newUser;
}

    //Esta função adiciona o Usuario ao array de usuarios
    const users: User[] = [];

function addUser(user: User): void {
  users.push(user);
}
addUser(newUser);
    //Esta função empresta um livro para um usuario
    emprestaLivro(){
        
    }


    //Mostra o historico de emprestimo de um usuario
    historicoDeEmprestimo(){

    }

    //Esta função reserva um livro SE ele estiver emprestado E não reservado
    reservaLivro(){

    }

    //Esta função verifica se o usuario tem multa e quanto
    verificaMulta(){

    }
    


}