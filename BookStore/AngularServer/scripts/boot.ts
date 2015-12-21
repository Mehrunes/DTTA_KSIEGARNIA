import {bootstrap}    from 'angular2/platform/browser'

import { Http, HTTP_PROVIDERS, Response } from 'angular2/http';
import {AppComponent} from './app.component'
bootstrap(AppComponent, [HTTP_PROVIDERS]);