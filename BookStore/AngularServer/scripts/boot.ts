import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';

import {AppComponent} from './app.component'
import {UserService}      from  './users/user.service';
import {provide}           from 'angular2/core';
import {enableProdMode} from "angular2/core";
import {AuthHttp, AuthConfig} from 'angular2-jwt';
enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    UserService,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(AuthConfig, { useFactory: () => {
        return new AuthConfig({
            headerName: 'Authorization',
            headerPrefix: 'Bearer',
            tokenName: 'id_token',
            tokenGetter: (() => localStorage.getItem('id_token')),
            noJwtError: true
        })
    }}),
    AuthHttp
]);