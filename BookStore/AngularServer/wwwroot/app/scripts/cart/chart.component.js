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
var cart_service_provider_1 = require("./cart-service.provider");
var router_1 = require('angular2/router');
var core_2 = require("angular2/core");
var Cart = (function () {
    function Cart(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.visible = false;
    }
    Cart.prototype.hide = function () {
        if (this.ukryj == "tak") {
            this.visible = true;
        }
        return this.ukryj == "tak";
    };
    Cart.prototype.goToCheckout = function () {
        this._router.navigate(['Checkout']);
        this.toggle();
    };
    Cart.prototype.isEmptyChart = function () {
        return this._service.isEmptyCart();
    };
    Cart.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], Cart.prototype, "ukryj", void 0);
    Cart = __decorate([
        core_1.Component({
            selector: 'chart',
            template: "<div [hidden]=\"hide()\">\n    <span class=\"{{ visible ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus' }}\"\n          (click)=\"toggle()\">Pokaz koszyk</span>\n</div>\n<div [hidden]=\"!visible\">\n    <ul>\n        <li *ngFor=\"#book of _service.books\">{{book.title}}</li>\n    </ul>\n\n    <button [hidden]=\"isEmptyChart()||hide()\" (click)=\"goToCheckout()\">zapisz ze chcesz odwiedzic biblioteke</button>\n</div>\n            ",
            providers: [cart_service_provider_1.cartServiceProvider]
        }), 
        __metadata('design:paramtypes', [cart_service_provider_1.cartServiceProvider, router_1.Router])
    ], Cart);
    return Cart;
})();
exports.Cart = Cart;
