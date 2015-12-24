import {Component,  OnInit}  from 'angular2/core';
import {User, UserService}   from './user.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    template: `
  <h2>Users</h2>
  <div *ngIf="user">
    <h3>"{{user.name}}"</h3>
    <div>
      <label>Id: </label>{{user.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="user.name" placeholder="name"/>
    </div>
    <button (click)="gotoUsers()">Back</button>
  </div>
  `,
})
export class UserDetailComponent implements OnInit {
    public user:User;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _service:UserService) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getUser(id).then(user => this.user = user);
    }

    gotoUsers() {

        this._router.navigate(['Users']);
    }
}
