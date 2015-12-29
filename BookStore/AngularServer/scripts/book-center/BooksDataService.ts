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
        let jbook = JSON.stringify(book); //wysyłamy do API jsona nie mając pewności że dane Id nie istnieje tutaj powinna być jakaś inna implementacja
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
                    jbook.author
                );
            })
            .subscribe(function(book) {
                    return book;
                },
                err => this.logError(err),
                () => console.log(`${book} Saved to API`)
            );
    }

    private logError(err): any {
        console.log(`wrong${err}`);
    }

    getBooks() {
        this.Obooks = this.http.get("http://localhost:58967/api/Books")
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
                                jbook.author
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



