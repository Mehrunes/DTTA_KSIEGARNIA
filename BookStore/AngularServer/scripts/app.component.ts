import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,  Location} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Book}from './book-center/books.service';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';
import {BorrowComponent} from "./book-center/borrow/borrow.component";
import {SzukajComponent} from "./book-center/books-center.component";
@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

    { // Book Center child route
        path: '/...',
        name: 'Szukaj',
        component: SzukajComponent,
        useAsDefault: true
    },
    { // Book Center child route
        path: '/books/...',
        name: 'Borrow',
        component: BorrowComponent
    },
    {path: '/users', name: 'Users', component: UserListComponent},
    {path: '/user/:id', name: 'UserDetail', component: UserDetailComponent},

])
export class AppComponent {

    public books:Book[];


    constructor(public http:Http, location:Location) {
        location.go('/');
        this.books = this.getData();
    }

    getData():any {
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

