import {Component, OnInit} from 'angular2/core';
import {BooksService} from './../books.service';
import {Router, RouteParams} from 'angular2/router';
import {Book} from "../../model/book";

@Component({
    template: `
    <ul>
      <li *ngFor="#book of books"
        [class.selected]="isSelected(book)"
        (click)="onSelect(book)">
        <span class="badge">{{book.id}}</span> {{book.title}}  {{book.author}}
      </li>
    </ul>
  `,
})
export class BorrowListComponent implements OnInit {
    public books:Book[];
    private _selectedId:number;

    constructor(private _service:BooksService,
                private _router:Router,
                routeParams:RouteParams) {
        this._selectedId = +routeParams.get('id');
    }

    ngOnInit() {
        this._service.getBooks().subscribe(books => this.books = books);
    }

    isSelected(book:Book) {
        return book.id === this._selectedId;
    }

    onSelect(book:Book) {
        this._router.navigate(['BorrowDetail', {id: book.id}]);
    }
}
