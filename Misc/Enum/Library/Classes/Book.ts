import { Genre } from "../ENUMS/Genre"

export class Books {
    Name: string
    Author: string
    Genre: Genre
    constructor(Name:string,Author:string,Genre:Genre){
        this.Name = Name
        this.Author = Author
        this.Genre = Genre
    }
}