import {Injectable} from 'angular2/core';

export class User {
    constructor(public id:number, public name:string) {
    }
}

@Injectable()
export class UserService {
    getUsers() {
        return usersPromise;
    }

    getUser(id:number | string) {
        return usersPromise
            .then(users => users.filter(h => h.id === +id)[0]);
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
