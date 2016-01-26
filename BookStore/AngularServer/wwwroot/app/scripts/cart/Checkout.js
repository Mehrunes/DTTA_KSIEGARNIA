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
var chart_component_1 = require("./chart.component");
var cart_service_provider_1 = require("./cart-service.provider");
var router_1 = require("angular2/src/router/router");
var BooksDataService_1 = require("../book-center/BooksDataService");
var Checkout = (function () {
    function Checkout(_cartServiceProvider, _router, _bookDataService) {
        this._cartServiceProvider = _cartServiceProvider;
        this._router = _router;
        this._bookDataService = _bookDataService;
    }
    Checkout.prototype.howManyBook = function () {
        return this.howManyBooks = this._cartServiceProvider.getBooks().length;
    };
    Checkout.prototype.saveToApi = function () {
        console.log('zapisz do api Ksiazki');
        console.log(this._cartServiceProvider.getBooks());
        var self = this;
        this._cartServiceProvider.getBooks().forEach(function (book) {
            self._bookDataService.checkBook(book);
            console.log(book);
        });
        this._router.navigate(['Borrow']);
        this._cartServiceProvider.destroy(); //TODO: Zaimplementowac zniszeczenie koszyka
    };
    Checkout = __decorate([
        core_1.Component({
            template: "<br><br>\n\n\n\n<button class=\"btn btn-default btn-lg\" (click)=\"saveToApi()\">\nW twoim koszyku sa {{ howManyBook() }} przedmioty\nkliknij aby potwierdzic zamowienie <br>\n   <span class=\"glyphicon glyphicon-shopping-cart \" aria-hidden=\"true\"></span>\n   <chart ukryj=\"tak\"></chart>\n\n</button>\n\n\n",
            directives: [chart_component_1.Cart],
            providers: [cart_service_provider_1.cartServiceProvider, BooksDataService_1.BooksDataService]
        }), 
        __metadata('design:paramtypes', [cart_service_provider_1.cartServiceProvider, router_1.Router, BooksDataService_1.BooksDataService])
    ], Checkout);
    return Checkout;
})();
exports.Checkout = Checkout;
