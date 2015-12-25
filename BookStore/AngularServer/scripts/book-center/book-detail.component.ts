
import {Component, OnInit} from 'angular2/core';
import {Book, BooksService} from './books.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';


@Component({
  template: `
  <div *ngIf="book">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{book.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
    <br><br><br>

liczba dostępnych 4/4 <br>
usun ksiazke
    wybierz urzytkownika który zwraca ksiazkę <br>
    <!--<select [(ngModel)]=""></select>-->

    <button>zwroc ksiazke</button>
  </div>
  `,
  styles: ['input {width: 20em}']
})
export class BookDetailComponent implements OnInit {

  public book: Book;
  public editName: string;

  constructor(
    private _service: BooksService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.getBook(id).subscribe(book => {
      if (book) {
        this.editName = book.title;
        this.book = book;
      } else { // id not found
        this.gotoBooks();
      }
    });
  }

  cancel() {
    this.editName = this.book.title;
    this.gotoBooks();
  }

  save() {
    this.book.title = this.editName;
    this.gotoBooks();
  }

  gotoBooks() {
    let route =
      ['BookList',  {id: this.book ? this.book.id : null} ]

    this._router.navigate(route);
  }
}
