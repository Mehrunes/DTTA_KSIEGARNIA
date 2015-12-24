var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
//import {ROUTER_PROVIDERS} from 'angular2/router';
var app_component_1 = require('./app.component');
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS
]);
