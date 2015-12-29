import {Component, Input} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {HostListener} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Directive} from "angular2/core";
import {Router} from "angular2/src/router/router";
@Component({
    selector: 'login-form',
    template: `<div class = "panel panel-default">
<span class="{{ visible ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus' }}"
      (click)="toggle()">Witaj {{title}}</span>
    <div [hidden]="!visible">
        <ng-content></ng-content>
    </div>
</div>
    `
})
export class LoginForm {

    @Input() title:string;
    visible:boolean = false;
    @Output() private isLogin:EventEmitter<any> = new EventEmitter();

    constructor(private _router:Router){}
    //@HostListener('isLogin', ['$event'])
    //private ObslozZdarzenieZalogowania(user) {
    //
    //    console.log('zalogowal sie uzytkownik '+user);
    //}

    private setLoggedIn(user:string) {
        this.title = user;
        this.isLogin.emit(user);
        this._router.navigate(['Borrow']);
        this.toggle();
    }

    toggle() {
        this.visible = !this.visible;
    }
}