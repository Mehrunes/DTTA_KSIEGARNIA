import {Component, OnInit} from 'angular2/core';
import {Book,BooksService} from './books.service';

import {Router, RouteParams} from 'angular2/router';

@Component({
    template: `
    <ul>
      <li *ngFor="#book of books"
        [class.selected]="isSelected(book)"
        (click)="onSelect(book)">
          <span class="badge">{{book.id}}</span> {{book.title}} {{book.author}}
      </li>
    </ul>
  `,
})
export class BooksListComponent implements OnInit {
    public books:Book[];
    private _selectedId:number;

    constructor(private _service:BooksService,
                private _router:Router,
                routeParams:RouteParams) {
        this._selectedId = +routeParams.get('id');
    }

    ngOnInit() {
        //subscribe(
        //    data=> {
        //        this.books = data;
        //
        //    },
        //    err => console.log(err)
        //));
        //
        this._service.getBooks().subscribe(books => this.books = books);
    }

    isSelected(book:Book) {
        return book.id === this._selectedId;
    }

    onSelect(book:Book) {
        this._router.navigate(['BookDetail', {id: book.id}]);
    }
}
