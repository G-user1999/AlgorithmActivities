let books: string[] =["Deltora","Witcher","Dune","Treck"]

let adventure ={
    " Dune": "Frank",
    "Deltora":"Unknown"
}
for (let books in adventure) {
    console.log(books,"Book author ",(adventure[books]));
}

let myBooks = ["Deltora","Witcher","Dune"]
for (let books of myBooks) {
    console.log(books);
}

let fantasyBooks = ["Deltora","Witcher","Dune","Treck"]
fantasyBooks.forEach(books => {
    console.log(books);
});