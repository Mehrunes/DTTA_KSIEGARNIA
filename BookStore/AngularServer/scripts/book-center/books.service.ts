import {Injectable} from 'angular2/core';
import {Component} from "angular2/core";
import {BooksDataService} from "./BooksDataService";
import {Book} from "../model/book";
@Component({
    providers: [BooksDataService]
})
@Injectable()
export class BooksService {
    constructor(private _service:BooksDataService)
    {
    }

    getBooks() {
        return this._service.getBooks();
    }

    getBook(id:number | string) {
        return  BooksDataService.books
            .then(crises => crises.filter(c => c.id === +id)[0]);
    }

    static nextCrisisId = 100; //after post new book, set this value

    addBook(title:string, author:string) {
        title = title.trim();
        author = author.trim();
        if (title) {

            this._service.getBooks().subscribe(
                function (crises) {

                    let book = new Book(crises.length + 1, title, author);
                    crises.push(book);
                }
            );
        }
    }
}

