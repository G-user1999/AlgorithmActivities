import { Status } from "../ENUMS/Status";
import { Books } from "./Book";
import { User } from "./User";

export class Library {


    

    //esta função lista todos os livros disponivei
    listAvailableBooks(books: Books): void {
        if (books.Status = Status.Available) {
          console.log(`${books.Name} by ${books.Author}`);
    };
  }
    //esta função lista todos os livros emprestados
    listBorrowedBooks(books: Books): void {
    if (books.Status[4]) {
      console.log(`${books.Name} by ${books.Author}`);
    }
  };
    //esta função lista todos os livros atrasados
    listLateBooks(books: Books): void {
    if (books.Status[3]) {
      console.log(`${books.Name} by ${books.Author}`);
    }
  };

    //Esta função lista todos o slivros por genero
    listBooksByGenre(genre:Books["Genre"]): void {
  console.log(`Books in ${genre} genre:`);
  const booksInGenre = Books[genre];
  if (booksInGenre.length === 0) {
    console.log("No books found in this genre.");
  } else {
    booksInGenre.Status(books => {
      console.log(`${books.Name} by ${books.Author}`);
    });
  }
}
    //Esta função cadastra um novo usuário do tipo User
    createUser(Name: string, ID: number, Contact: string): void {
  const newUser: User = {
    Name: Name,
    ID: ID,
    Contact: Contact
  };
  this.addUser(newUser)
  //return newUser;
}

    //Esta função adiciona o Usuario ao array de usuarios
  users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
}
    //Esta função empresta um livro para um usuario
    bookBorrowing(books:Books,user:User){
    if (books.Status === 1) {
      return console.log(`${books.Name} was Borrowed by ${user.Name}`,books.Status = 4);
    } else {console.log(`${books.Name} is unavailable for borrowing`);}
    }
    //Mostra o historico de emprestimo de um usuario
    historicoDeEmprestimo(){

    }

    //Esta função reserva um livro SE ele estiver emprestado E não reservado
    reserveBook(books:Books,user:User){
      if (books.Status === 4) {
        return console.log(`${books.Name} was reserved by ${user.Name}`,books.Status =2);
      } else {
        console.log(`${books.Name} can not be reserved`)
      }
    }

    //Esta função verifica se o usuario tem multa e quanto
    verificaMulta(){

    }
    


}
