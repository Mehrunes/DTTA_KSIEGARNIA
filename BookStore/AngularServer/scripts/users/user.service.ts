import {Injectable} from 'angular2/core';
import {User} from "../model/user";
import {UsersDataService} from "./UsersDataService";
import {Component} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Component({
    providers: [UsersDataService]
})
@Injectable()
export class UserService {
    constructor(private _service:UsersDataService) {
    }

    getUsers() {
        return usersPromise;
    }

    getUser(id:number | string) {
        return usersPromise
            .then(users => users.filter(h => h.id === +id)[0]);
    }



    getOUsers():Observable<User[]> {
        return this._service.getOUsers();
    }
}

var USERS = [
    new User(11, 'Mr. Nice'),
    new User(12, 'Narco'),
    new User(13, 'Bombasto'),
    new User(14, 'Celeritas'),
    new User(15, 'Magneta'),
    new User(16, 'RubberMan')
];

var usersPromise = Promise.resolve(USERS);
