import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';

import {AppComponent} from './app.component'
import {UserService}      from  './users/user.service';
bootstrap(AppComponent, [
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    UserService
]);