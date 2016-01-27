import {Component} from 'angular2/core';
import {Cart} from "./chart.component";
import {cartServiceProvider} from "./cart-service.provider";
import {Router} from "angular2/src/router/router";
import {BooksDataService} from "../book-center/BooksDataService";
@Component({

    template: `<br><br>



<button class="btn btn-default btn-lg" (click)="saveToApi()">
W twoim koszyku sa {{ howManyBook() }} przedmioty
kliknij aby potwierdzic zamowienie <br>
   <span class="glyphicon glyphicon-shopping-cart " aria-hidden="true"></span>
   <ul>
        <li *ngFor="#book of _cartServiceProvider.books">{{book.title}}</li>
    </ul>

</button>


`,
    directives: [Cart],
    providers: [cartServiceProvider, BooksDataService]
})
export class Checkout {

    private howManyBooks:number;

    constructor(private _cartServiceProvider:cartServiceProvider,
                private _router:Router, private _bookDataService:BooksDataService) {
    }

    howManyBook() {
        return this.howManyBooks = this._cartServiceProvider.getBooks().length;
    }

    saveToApi() {
        let self =this;
        this._cartServiceProvider.getBooks().forEach(function (book) {
            book.check = true;
            self._bookDataService.checkBook(book);


        });

        this._router.navigate(['Borrow']);
        this._cartServiceProvider.destroy(); //TODO: Zaimplementowac zniszeczenie koszyka
    }

}