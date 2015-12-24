import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Book}from './model';
@Component({
    selector: 'my-app',
//    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'partials/app.html',

})

export class AppComponent {

    public books: Book[];

    constructor(public http: Http) {

        this.books = this.getData();
    }

    getData(): any {
        this.http.get('http://localhost:49989/api/Books')
            //../mock/Books.json
            //http://localhost:3000/wwwroot/index.html
            //http://localhost:49989/api/Books
            .map(res=> (<Response>res).json())
            .map((jbooks: Array<any>) => {
                let result: Array<Book> = [];
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
            }).subscribe(
            data=> {
                this.books = data;

            },
            err => console.log(err)
            )
    }
}

