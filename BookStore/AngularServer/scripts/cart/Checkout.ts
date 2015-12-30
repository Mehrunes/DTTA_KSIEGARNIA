import {Component} from 'angular2/core';
import {Cart} from "./chart.component";
import {cartServiceProvider} from "./cart-service.provider";
import {Router} from "angular2/src/router/router";
@Component({

    template: `<br><br>



<button class="btn btn-default btn-lg" (click)="saveToApi()">
W twoim koszyku sa {{ howManyBook() }} przedmioty
kliknij aby potwierdzic zamowienie <br>
   <span class="glyphicon glyphicon-shopping-cart " aria-hidden="true"></span>
   <chart ukryj="tak"></chart>

</button>


`,
    directives: [Cart],
    providers: [cartServiceProvider]
})
export class Checkout {

    private howManyBooks:number;

    constructor(private _cartServiceProvider:cartServiceProvider,
                private _router:Router) {
    }

    howManyBook() {
        return this.howManyBooks = this._cartServiceProvider.getBooks().length;
    }

    saveToApi() {
        console.log('zapisz do api Ksiazki');
        console.log(this._cartServiceProvider.getBooks());
        this._router.navigate(['Borrow']);
        this._cartServiceProvider.destroy(); //TODO: Zaimplementowac zniszeczenie koszyka
    }

}