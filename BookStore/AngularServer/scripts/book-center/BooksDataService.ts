import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";
@Injectable()
export class BooksDataService {

    static books:Promise<any>;
    public Obooks;

    constructor(public http:Http) {

    }

    public  saveBook(book:Book) {
        let creds = "{'title':'cos','author':'ktos'}";
        this.http.post('http://localhost:49989/api/AddBook', creds)
            .map(res=>(<Response>res).json())
            .subscribe(
                data =>  console.log('SavetoApi' + book.title),
                err=>this.logError(err),
                ()=>console.log('asdas')
            );

        console.log('SavetoApi' + book);
    }

    private logError(err):any {
        console.log("wrong" + err);
    }

    public getBooks() {
        this.Obooks = this.http.get('http://localhost:49989/api/Books')
            //../mock/Books.json
            //http://localhost:3000/wwwroot/index.html
            //http://localhost:49989/api/Books
            .map(res=> (<Response>res).json())
            .map((jbooks:Array<any>) => {
                let result:Array<Book> = [];
                if (jbooks) {
                    jbooks.forEach(jbook=> {
                        result.push(
                            new Book(
                                jbook.id,
                                jbook.title,
                                jbook.author
                            ))
                    })
                }
                return result;
            });

        this.Obooks.subscribe(
            function (books) {
                BooksDataService.books = Promise.resolve(books);
            }
        );
        return this.Obooks;
    }
}



