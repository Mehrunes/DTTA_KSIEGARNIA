var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
var user_service_1 = require('./users/user.service');
var core_1 = require('angular2/core');
var core_2 = require("angular2/core");
var angular2_jwt_1 = require('angular2-jwt');
core_2.enableProdMode();
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    user_service_1.UserService,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    core_1.provide(angular2_jwt_1.AuthConfig, { useFactory: function () {
            return new angular2_jwt_1.AuthConfig({
                headerName: 'Authorization',
                headerPrefix: 'Bearer',
                tokenName: 'id_token',
                tokenGetter: (function () { return localStorage.getItem('id_token'); }),
                noJwtError: true
            });
        } }),
    angular2_jwt_1.AuthHttp
]);
