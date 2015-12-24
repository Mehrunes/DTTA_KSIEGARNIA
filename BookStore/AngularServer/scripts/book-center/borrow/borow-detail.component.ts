import {Component, OnInit} from 'angular2/core';
import {BooksService,Book} from './../books.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';


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

liczba dostępnych 4/4 <br>
    <button>dodaj do koszyka wypozyczen</button>
  </div>
  `,
    styles: ['input {width: 20em}']
})
export class BorrowDetailComponent implements OnInit {

    public book:Book;
    public editName:string;

    constructor(private _service:BooksService,
                private _router:Router,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._service.getBook(id).then(book => {
            if (book) {
                this.editName = book.title;
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
