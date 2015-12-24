import {Injectable} from 'angular2/core';

export class Book {

    constructor(public id:number,
                public title:string,
                public author:string) {
    }
}

@Injectable()
export class BooksService {
    getBooks() {
        return crisesPromise;
    }

    getBook(id:number | string) {
        return crisesPromise
            .then(crises => crises.filter(c => c.id === +id)[0]);
    }

    static nextCrisisId = 100; //after post new book, set this value

    addBook(title:string, author:string) {
        title = title.trim();
        author = author.trim();
        if (title) {

            crisesPromise.then(
                function (crises) {

                    let book = new Book(crises.length + 1, title, author);
                    crises.push(book);
                }
            );
        }
    }


}

var books = [
    new Book(1, 'Princess Held Captive', ""),
    new Book(2, 'Dragon Burning Cities', ""),
    new Book(3, 'Giant Asteroid Heading, For Earth', ""),
    new Book(4, 'Release Deadline Looms', "")
];

var crisesPromise = Promise.resolve(books);
