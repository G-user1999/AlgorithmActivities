export class Library {


    

    //esta função lista todos os livros disponivei
    function listAvailableBooks(books: Book[]): void {
  console.log("Available Books:");
  books.forEach((book) => {
    if (book.available) {
      console.log(`${book.title} by ${book.author}`);
    }
  });
}
    //esta função lista todos os livros emprestados
    function listBorrowedBooks(books: Book[]): void {
  console.log("Borrowed Books:");
  books.forEach((book) => {
    if (book.Borrowed) {
      console.log(`${book.title} by ${book.author}`);
    }
  });
}
    //esta função lista todos os livros atrasados
    listaLivrosAtrasados(){

    }

    //Esta função lista todos o slivros por genero
    listaLivrosPorGenero(){

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
    adicionaAoArray(){

    }

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
