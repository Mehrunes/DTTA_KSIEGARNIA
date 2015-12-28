import {Injectable} from 'angular2/core';
import {Component} from "angular2/core";
import {BooksDataService} from "./BooksDataService";
import {Book} from "../model/book";
@Component({
    providers: [BooksDataService]
})
@Injectable()
export class BooksService {
    constructor(private _service:BooksDataService) {
    }

    getBooks() {
        return this._service.getBooks();
    }

    getBook(id:number | string) {
        return BooksDataService.books
            .then(crises => crises.filter(c => c.id === +id)[0]);
    }

    static nextCrisisId = 100; //after post new book, set this value

    addBook(title:string, author:string) {
        if (title && author) {
            title = title.trim();
            author = author.trim();

            this._service.getBooks().subscribe(
                function (books) {
                    let book = new Book(books.length + 1, title, author);
                    books.push(book);
                }
            );
            let book = new Book(BooksService.nextCrisisId, title, author);
            this._service.saveBook(book);
        }
    }
}

