import {Component, OnInit,Inject} from 'angular2/core';
import {Book, BooksService} from './books.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
    providers: [BooksService],
    template: `
<form (ngSubmit)="onSubmit()">
    <input type="text" [(ngModel)]="book.name">{{book.name}}
    <button type="submit" >addd</button>
</form>
`
})
export class AddBook implements OnInit {


    //book:Book = new Book();

    constructor(private _service:BooksService,
                private _router:Router,
                private  book:Book=new Book(1,"")
    ) {

    }

    ngOnInit() {
        //this._service.getBooks().then(users => this.users = users);
    }

    onSubmit() {
        this._service.addBook(this.book.name);
        this._router.navigate(['SzukajComponent']);
    }
}