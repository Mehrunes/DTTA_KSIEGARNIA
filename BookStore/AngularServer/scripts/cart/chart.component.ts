import {Component} from 'angular2/core';
import {Injectable} from "angular2/core";
import {Book} from "../model/book";
import {BorrowDetailComponent} from "../book-center/borrow/borow-detail.component";
import {cartServiceProvider} from "./cart-service.provider";
import {OnInit} from "angular2/core";
import {RouteParams, Router} from 'angular2/router';
import {Input} from "angular2/core";
@Component({
    selector: 'chart',
    template: `<div [hidden]="hide()">
    <span class="{{ visible ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus' }}"
          (click)="toggle()">Pokaz koszyk</span>
</div>
<div [hidden]="!visible">
    <ul>
        <li *ngFor="#book of _service.books">{{book.title}}</li>
    </ul>

    <button [hidden]="isEmptyChart()||hide()" (click)="goToCheckout()">zapisz ze chcesz odwiedzic biblioteke</button>
</div>
            `,
    providers: [cartServiceProvider]
})
export class Cart {


    visible:boolean = false;
    @Input() ukryj:string;

    constructor(private _service:cartServiceProvider,
                private _router:Router) {}

    hide() {
        if (this.ukryj == "tak") {
            this.visible = true;
            // TODO: nie wiem jak to poprawic, chce dwa razy skorzystac z wyswietlania ksiazek
        }
        return this.ukryj == "tak";

    }

    goToCheckout() {
        this._router.navigate(['Checkout']);
        this.toggle()
    }

    isEmptyChart() {
        return this._service.isEmptyCart();
    }


    toggle() {
        this.visible = !this.visible;
    }
}