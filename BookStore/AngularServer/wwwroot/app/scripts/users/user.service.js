var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var user_1 = require("../model/user");
var UsersDataService_1 = require("./UsersDataService");
var core_2 = require("angular2/core");
var UserService = (function () {
    function UserService(_service) {
        this._service = _service;
    }
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    UserService.prototype.getUser = function (id) {
        return usersPromise
            .then(function (users) { return users.filter(function (h) { return h.id === +id; })[0]; });
    };
    UserService.prototype.getOUsers = function () {
        return this._service.getOUsers();
    };
    UserService = __decorate([
        core_2.Component({
            providers: [UsersDataService_1.UsersDataService]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [UsersDataService_1.UsersDataService])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
var USERS = [
    new user_1.User(11, 'Mr. Nice'),
    new user_1.User(12, 'Narco'),
    new user_1.User(13, 'Bombasto'),
    new user_1.User(14, 'Celeritas'),
    new user_1.User(15, 'Magneta'),
    new user_1.User(16, 'RubberMan')
];
var usersPromise = Promise.resolve(USERS);
