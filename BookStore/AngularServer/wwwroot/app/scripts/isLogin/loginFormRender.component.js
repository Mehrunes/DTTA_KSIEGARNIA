var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var core_4 = require("angular2/core");
var loginFormRender = (function () {
    function loginFormRender() {
        this.userLogged = new core_3.EventEmitter();
    }
    loginFormRender.prototype.ustawZalogowanego = function (user) {
        this.userLogged.emit(user);
        console.log(user);
    };
    __decorate([
        core_4.Output(), 
        __metadata('design:type', core_3.EventEmitter)
    ], loginFormRender.prototype, "userLogged", void 0);
    loginFormRender = __decorate([
        core_1.Component({
            //wstaw myslniki ponizej
            selector: 'loginFormRender'
        }),
        core_2.View({
            template: "<button class=\"btn btn-default\" type=\"submit\" (click)=\"ustawZalogowanego('admin')\">zaloguj jako admin</button>\n        <button class=\"btn btn-default\" type=\"submit\" (click)=\"ustawZalogowanego('gosc')\">zaloguj jako uztkonik gosc</button>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], loginFormRender);
    return loginFormRender;
})();
exports.loginFormRender = loginFormRender;
