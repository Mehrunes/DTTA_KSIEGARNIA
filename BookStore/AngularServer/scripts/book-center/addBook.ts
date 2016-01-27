import {Component, OnInit, Inject} from "angular2/core";
import { BooksService} from "./books.service";
import {RouteParams, Router} from "angular2/router";
import {CanDeactivate, ComponentInstruction} from "angular2/router";

@Component({
    providers: [BooksService],
    template: `
<form (ngSubmit)="onSubmit()">
  Tytu³:  <input type="text" [(ngModel)]="title">{{title}}<br>
    Autor: <input type="text" [(ngModel)]="author">{{author}}
    <button type="submit" >addd</button>
</form>
{{succes}}
`
})
export class AddBook {

    private title;
    private author;
    private succes;

    constructor(private _service: BooksService,
        private _router: Router) {
    }

    onSubmit() {
        this._service.addBook(this.title, this.author);
        this.succes = "dodano";
//        this._router.navigate(['SzukajComponent']);
    }
}