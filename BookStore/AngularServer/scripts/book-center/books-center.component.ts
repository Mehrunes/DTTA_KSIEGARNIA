import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet,ROUTER_DIRECTIVES} from 'angular2/router';

import {BooksListComponent}   from './books-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BooksService}         from './books.service';
import {AddBook} from './addBook';
import {BooksDataService} from "./BooksDataService";
@Component({
    template: `
    <h2>Lista Ksiazek</h2>
   <a [routerLink]="['CreateBook']">Dodaj Ksiazke</a>
    <router-outlet></router-outlet>


  `,
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    providers: [BooksService, BooksDataService]
})
@RouteConfig([
    {path: '/', name: 'SzukajComponent', component: BooksListComponent, useAsDefault: true},
    {path: '/:id', name: 'BookDetail', component: BookDetailComponent},
    {path: '/list/:id', name: 'BookList', component: BooksListComponent},
    {path: '/createBook', name: 'CreateBook', component: AddBook},
])
export class SzukajComponent {
}
