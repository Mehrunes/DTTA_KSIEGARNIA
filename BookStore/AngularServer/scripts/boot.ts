import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';

import {AppComponent} from './app.component'
import {UserService}      from  './users/user.service';
import {provide}           from 'angular2/core';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    UserService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then(
    success => console.log('App Bootstrapped!'),
    error => console.log(error)
);