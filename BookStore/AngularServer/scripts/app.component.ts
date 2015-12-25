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

    constructor(location:Location) {
        location.go('/');
    }
}

