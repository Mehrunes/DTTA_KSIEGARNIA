import {Component, Input} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {Output} from "angular2/core";
import {HostListener} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Directive} from "angular2/core";
import {Router} from "angular2/src/router/router";
import {Cart} from "../cart/chart.component";
import {Inject} from "angular2/core";
@Component({
    selector: 'login-form',
    template: `<div class="panel panel-default">
    <div class="row">
        <div class="col-md-8">
<span class="{{ visible ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus' }}"
      (click)="toggle()">Witaj {{userLoggedIn}}</span>
            <div [hidden]="!visible">
                <ng-content></ng-content>
            </div>
        </div>
        <div class="col-md-4">
            <chart></chart>
        </div>
    </div>
</div>`,
    directives:[Cart]
})
export class LoginForm {

    @Input() userLoggedIn:string;
    visible:boolean = false;
    @Output() private isLogin:EventEmitter<any> = new EventEmitter();

    constructor(private _router:Router
    ){}

    private setLoggedIn(user:string) {
        this.userLoggedIn = user;
        this.isLogin.emit(user);
        this._router.navigate(['Borrow']);
        this.toggle();
    }

    toggle() {
        this.visible = !this.visible;
    }
}