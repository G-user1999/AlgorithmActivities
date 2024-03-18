import { Genre } from "../ENUMS/Genre"
import { Status } from "../ENUMS/Status"

export class Books {
    Name: string
    Author: string
    Genre: Genre
    Status: Status
    constructor(Name:string,Author:string,Genre:Genre,Status:Status){
        this.Name = Name
        this.Author = Author
        this.Genre = Genre
        this.Status = Status
    }
}
