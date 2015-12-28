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
        const creds = "{'Author':'Adam Mickiewicz','Title':'Pan asdasdas'}";
        const header = new Headers();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:58967/api/AddBook", creds, {
                headers: header
            })
            .map(res => (res as Response).json()[0]
            ).map(function(jbook) {
                const book = new Book(
                    jbook.id,
                    jbook.title,
                    jbook.author
                );
                return book;
            })
            .subscribe(function(book) {

                    console.log(book);
                    return book;

                },
                err => this.logError(err),
                () => console.log("asdas")
            );

        console.log(`SavetoApi${book}`);
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



