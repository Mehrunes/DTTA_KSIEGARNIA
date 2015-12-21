var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var model_1 = require('./model');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.books = this.getData();
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('nic.json')
            .map(function (res) { return res.json(); })
            .map(function (shipments) {
            var result = [];
            if (shipments) {
                shipments.forEach(function (shipment) {
                    result.push(new model_1.Book(shipment.id, shipment.title, shipment.author));
                });
            }
            return result;
        }).subscribe(function (data) {
            _this.books = data;
            console.log(data);
        }, function (err) { return console.log(err); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/partials/app.html',
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
