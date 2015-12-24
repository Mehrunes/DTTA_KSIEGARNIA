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
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var books_service_1 = require('./book-center/books.service');
var user_list_component_1 = require('./users/user-list.component');
var user_detail_component_1 = require('./users/user-detail.component');
var borrow_component_1 = require("./book-center/borrow/borrow.component");
var books_center_component_1 = require("./book-center/books-center.component");
var AppComponent = (function () {
    function AppComponent(http, location) {
        this.http = http;
        location.go('/');
        this.books = this.getData();
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost:49989/api/Books')
            .map(function (res) { return res.json(); })
            .map(function (jbooks) {
            var result = [];
            if (jbooks) {
                jbooks.forEach(function (jbook) {
                    result.push(new books_service_1.Book(jbook.id, jbook.title, jbook.author));
                });
            }
            return result;
        }).subscribe(function (data) {
            _this.books = data;
        }, function (err) { return console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'partials/app.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/...',
                name: 'Szukaj',
                component: books_center_component_1.SzukajComponent,
                useAsDefault: true
            },
            {
                path: '/books/...',
                name: 'Borrow',
                component: borrow_component_1.BorrowComponent
            },
            { path: '/users', name: 'Users', component: user_list_component_1.UserListComponent },
            { path: '/user/:id', name: 'UserDetail', component: user_detail_component_1.UserDetailComponent },
        ]), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Location])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
