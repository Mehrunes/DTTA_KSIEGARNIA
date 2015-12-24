import {Component, OnInit}   from 'angular2/core';
import {User, UserService}   from './user.service';
import {Router}              from 'angular2/router';

@Component({
    template: `
    <h2>Users</h2>
    <ul>
      <li *ngFor="#user of users"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>

    </ul>
  `
})
export class UserListComponent implements OnInit {
    public users:User[];


    constructor(private _router:Router,
                private _service:UserService) {
    }

    ngOnInit() {
        this._service.getUsers().then(users => this.users = users)
    }

    onSelect(user:User) {
        this._router.navigate(['UserDetail', {id: user.id}]);
    }
}
