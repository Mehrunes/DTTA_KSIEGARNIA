import {Component, OnInit}   from 'angular2/core';
import {UserService}   from './user.service';
import {Router}              from 'angular2/router';
import {User} from "../model/user";
import {UsersDataService} from "./UsersDataService";

@Component({
    template: `
    <h2>Users</h2>
    <ul>
      <li *ngFor="#user of users"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>

    </ul>
  `,
    providers: [UserService, UsersDataService]
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
