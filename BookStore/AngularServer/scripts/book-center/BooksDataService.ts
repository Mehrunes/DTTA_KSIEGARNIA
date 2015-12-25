import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {Observable} from "rxjs/Observable";

export class Book {

    constructor(public id:number,
                public title:string,
                public author:string) {
    }
}

@Injectable()
export class BooksDataService {

    public books:Book[];
    public Obooks;

    constructor(public http:Http) {

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
                            )
                        )
                    })
                }
                return result;
            })
    }

    getBooks() {
         this.Obooks.subscribe(
            function (books) {

                //let book = new Book(books.length + 1, "sads", "asasd");
                //books.push(book);


                this.books=books;

            }
        );

        return this.Obooks;
    }

    pushBooks() {


    }
}


