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
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var router_1 = require("angular2/src/router/router");
var chart_component_1 = require("../cart/chart.component");
var LoginForm = (function () {
    function LoginForm(_router) {
        this._router = _router;
        this.visible = false;
        this.isLogin = new core_2.EventEmitter();
    }
    LoginForm.prototype.setLoggedIn = function (user) {
        this.userLoggedIn = user;
        this.isLogin.emit(user);
        this._router.navigate(['Borrow']);
        this.toggle();
    };
    LoginForm.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LoginForm.prototype, "userLoggedIn", void 0);
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], LoginForm.prototype, "isLogin", void 0);
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: "<div class=\"panel panel-default\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n<span class=\"{{ visible ? 'glyphicon glyphicon-plus' : 'glyphicon glyphicon-minus' }}\"\n      (click)=\"toggle()\">Witaj {{userLoggedIn}}</span>\n            <div [hidden]=\"!visible\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <chart></chart>\n        </div>\n    </div>\n</div>",
            directives: [chart_component_1.Cart]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginForm);
    return LoginForm;
})();
exports.LoginForm = LoginForm;
