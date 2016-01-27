import {Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";

@Injectable()
export class BooksDataService {

    static books: Promise<any>;
    Obooks;

    constructor(public http: Http) {

    }

    saveBook(book: Book) {

        let jbook = "{'Author':'" + book.author + "','Title':'" + book.title+"'}";
        const header = new Headers();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:58967/api/AddBook", jbook, {
                headers: header
            })
            .map(res => (res as Response).json()[0]
            ).map(function(jbook) {
                return new Book(
                    jbook.id,
                    jbook.title,
                    jbook.author,
                    jbook.check,
                    jbook.genre
                );
            })
            .subscribe(function (book2) {
                    console.log(book2);
                    return book2;
                },
                err => this.logError(err)
            );
    }

    checkBook(book: Book) {

        let jbook = "{'Check':'" + book.check +"'}";
        const header = new Headers();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:58967/api/CheckBook/"+ book.id, jbook, {
                headers: header
            })
            .map(res => (res as Response).json()
            ).map(function(jbook) {
                return new Book(
                    jbook.id,
                    jbook.title,
                    jbook.author,
                    jbook.check,
                    jbook.genre
                );
            })
            .subscribe(book2=> {
                    console.log(book2);
                    return book2;
                },
                err => this.logError(err)
            );
    }

    private logError(err): any {
        console.log(`wrong${err}`);
    }

    getBooks() {
        this.Obooks = this.http.get("../mock/Books.json")
            //../mock/Books.json
            //http://localhost:3000/wwwroot/index.html
            //http://localhost:49989/api/Books
            //http://localhost:58967/api/Books
            .map(res => (res as Response).json())
            .map((jbooks: Array<any>) => {
                const result: Array<Book> = [];
                if (jbooks) {
                    jbooks.forEach(jbook => {
                        result.push(
                            new Book(
                                jbook.id,
                                jbook.title,
                                jbook.author,
                                jbook.check,
                                jbook.genre
                            ));
                    });
                }
                return result;
            });

        this.Obooks.subscribe(
            function(books) {
                BooksDataService.books = Promise.resolve(books);
            }
        );
        return this.Obooks;
    }
}



