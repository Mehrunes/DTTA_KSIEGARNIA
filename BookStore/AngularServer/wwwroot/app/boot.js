var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
var user_service_1 = require('./users/user.service');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_DIRECTIVES,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    user_service_1.UserService
]);
