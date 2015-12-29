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
var UserDetailComponent = (function () {
    function UserDetailComponent(_router, _routeParams, _service) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._service = _service;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        this._service.getUser(id).then(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.gotoUsers = function () {
        this._router.navigate(['Users']);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <h2>Users</h2>\n  <div *ngIf=\"user\">\n    <h3>\"{{user.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{user.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"user.name\" placeholder=\"name\"/>\n    </div>\n    <button (click)=\"gotoUsers()\">Back</button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_service_1.UserService])
    ], UserDetailComponent);
    return UserDetailComponent;
})();
exports.UserDetailComponent = UserDetailComponent;
