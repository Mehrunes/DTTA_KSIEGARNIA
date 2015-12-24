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
var user_service_1 = require('./user.service');
var router_1 = require('angular2/router');
var UserListComponent = (function () {
    function UserListComponent(_router, _service) {
        this._router = _router;
        this._service = _service;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getUsers().then(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onSelect = function (user) {
        this._router.navigate(['UserDetail', { id: user.id }]);
    };
    UserListComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Users</h2>\n    <ul>\n      <li *ngFor=\"#user of users\"\n        (click)=\"onSelect(user)\">\n        <span class=\"badge\">{{user.id}}</span> {{user.name}}\n      </li>\n\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
})();
exports.UserListComponent = UserListComponent;
