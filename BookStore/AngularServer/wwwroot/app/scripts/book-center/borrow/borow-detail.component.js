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
var books_service_1 = require('./../books.service');
var router_1 = require('angular2/router');
var RatingDemo_1 = require("./RatingDemo");
var cart_service_provider_1 = require("../../cart/cart-service.provider");
var BorrowDetailComponent = (function () {
    function BorrowDetailComponent(_service, _router, _routeParams, _cartServiceProvider) {
        this._service = _service;
        this._router = _router;
        this._routeParams = _routeParams;
        this._cartServiceProvider = _cartServiceProvider;
    }
    BorrowDetailComponent.prototype.addToChart = function (book) {
        this._cartServiceProvider.addBook(book);
        this.gotoBooks();
    };
    BorrowDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._service.getBook(id).then(function (book) {
            if (book) {
                _this.book = book;
            }
            else {
                _this.gotoBooks();
            }
        });
    };
    BorrowDetailComponent.prototype.gotoBooks = function () {
        var route = ['BorrowList', { id: this.book ? this.book.id : null }];
        this._router.navigate(route);
    };
    BorrowDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div *ngIf=\"book\">\n    <div>\n      <label>Id: </label>{{book.id}}</div>\n    <div>\n      <label>Name: </label>\n      {{book.title}}\n    </div>\n <button (click)=\"gotoBooks()\">Canclel</button>\n    <br><br><br>\n\n  <rating-demo></rating-demo>\nliczba dost\u0119pnych 4/4 <br>\n    <button  (click)=\"addToChart(book)\">dodaj do koszyka wypozyczen</button>\n  </div>\n  ",
            styles: ['input {width: 20em}'],
            directives: [RatingDemo_1.RatingDemo],
            providers: [cart_service_provider_1.cartServiceProvider]
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router, router_1.RouteParams, cart_service_provider_1.cartServiceProvider])
    ], BorrowDetailComponent);
    return BorrowDetailComponent;
})();
exports.BorrowDetailComponent = BorrowDetailComponent;
