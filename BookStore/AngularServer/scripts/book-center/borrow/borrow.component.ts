import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';


import {BooksService}         from './../books.service';
import {AddBook}from './../addBook'
import {BorrowListComponent} from "./borrow-list.component";
import {BorrowDetailComponent} from "./borow-detail.component";
import {BooksDataService} from "../BooksDataService";
import {Checkout} from "../../cart/Checkout";
@Component({
    template: `
    <h2>Lista Ksiazek</h2>

    <router-outlet></router-outlet>


  `,
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [BooksService, BooksDataService]
})
@RouteConfig([
    {path: '/', name: 'BorrowComponent', component: BorrowListComponent, useAsDefault: true},
    {path: '/:id', name: 'BorrowDetail', component: BorrowDetailComponent},
    {path: '/list/:id', name: 'BorrowList', component: BorrowListComponent}
])
export class BorrowComponent {
}
