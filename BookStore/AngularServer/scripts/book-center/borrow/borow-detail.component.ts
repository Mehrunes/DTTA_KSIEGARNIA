import {Component, OnInit} from 'angular2/core';
import {BooksService} from './../books.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {Book} from "../../model/book";
import {RatingDemo} from "./RatingDemo";
import {cartServiceProvider} from "../../cart/cart-service.provider";
import {Inject} from "angular2/core";
import {Output,EventEmitter} from "angular2/core";


@Component({
    template: `
  <div *ngIf="book">
    <div>
      <label>Id: </label>{{book.id}}</div>
    <div>
      <label>Name: </label>
      {{book.title}}
    </div>
 <button (click)="gotoBooks()">Canclel</button>
    <br><br><br>

  <rating-demo></rating-demo>
liczba dostępnych 4/4 <br>
    <button  (click)="addToChart(book)">dodaj do koszyka wypozyczen</button>
  </div>
  `,
    styles: ['input {width: 20em}'],
    directives: [RatingDemo],
    providers: [cartServiceProvider]
})
export class BorrowDetailComponent implements OnInit {

    public book:Book;

    constructor(private _service:BooksService,
                private _router:Router,
                private _routeParams:RouteParams,
                private _cartServiceProvider:cartServiceProvider) {
    }

    addToChart(book) {
        this._cartServiceProvider.addBook(book);
        this.gotoBooks();
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._service.getBook(id).then(book => {
            if (book) {
                this.book = book;
            } else { // id not found
                this.gotoBooks();
            }
        });
    }


    gotoBooks() {
        let route =
            ['BorrowList', {id: this.book ? this.book.id : null}]

        this._router.navigate(route);
    }
}
