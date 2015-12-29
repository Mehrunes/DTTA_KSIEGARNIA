import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,  Location} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Book}from './model/book';
import {UserListComponent}     from './users/user-list.component';
import {UserDetailComponent}   from './users/user-detail.component';
import {BorrowComponent} from "./book-center/borrow/borrow.component";
import {SzukajComponent} from "./book-center/books-center.component";
import {LoginForm} from "./isLogin/loginForm";

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    directives: [ROUTER_DIRECTIVES, LoginForm]
})
@RouteConfig([

    { // Book Center child route
        path: '/...',
        name: 'Szukaj',
        component: SzukajComponent
    },
    { // Book Center child route
        path: '/books/...',
        name: 'Borrow',
        component: BorrowComponent,
        useAsDefault: true
    },
    {path: '/users', name: 'Users', component: UserListComponent},
    {path: '/user/:id', name: 'UserDetail', component: UserDetailComponent},

])
export class AppComponent {

    admin:boolean = false;
    user:string = 'niezalogowany';

    listenOnLogin(user:string) {
        console.log('Zalogowal sie ' + user);
        this.admin = ('admin' == user)
    }


    constructor(location:Location) {
        location.go('/books/');
    }
}

