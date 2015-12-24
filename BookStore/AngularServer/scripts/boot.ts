import {bootstrap}    from 'angular2/platform/browser'

import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
//import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component'
bootstrap(AppComponent, [HTTP_PROVIDERS
    //,  ROUTER_PROVIDERS
    ]);