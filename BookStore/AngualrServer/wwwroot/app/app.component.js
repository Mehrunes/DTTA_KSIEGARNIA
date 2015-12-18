System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './model'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.http = http;
                    this.books = this.getData();
                }
                AppComponent.prototype.getData = function () {
                    var _this = this;
                    this.http.get('http://localhost:56618/api/books')
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
                        templateUrl: 'partials/app.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map