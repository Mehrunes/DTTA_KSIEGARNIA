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
var angular2_jwt_1 = require('angular2-jwt');
var headers_1 = require("angular2/src/http/headers");
var http_1 = require("angular2/src/http/http");
var jwtAuthHttp = (function () {
    function jwtAuthHttp(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
    }
    jwtAuthHttp.prototype.getThing = function () {
        this.authHttp.get('http://example.com/api/thing')
            .subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log('error'); }, function () { return console.log('Request Complete'); });
    };
    jwtAuthHttp.prototype.getToken = function () {
        var jbook = '{   grant_type: "password",client_id: "44",username: "ktos1",password: "ktos1"}';
        var header = new headers_1.Headers();
        header.append("Content-Type", "application/json");
        this.http.post("https://ssqsignon.com/apiuamtta/auth", jbook, {
            headers: header
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (jbook) {
            localStorage.setItem('id_token', jbook['access_token']);
        });
    };
    jwtAuthHttp = __decorate([
        core_1.Component({
            selector: 'jwtAuthHttp',
            template: "\n    <button (click)=\"getToken()\">getToken</button>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp, http_1.Http])
    ], jwtAuthHttp);
    return jwtAuthHttp;
})();
exports.jwtAuthHttp = jwtAuthHttp;
