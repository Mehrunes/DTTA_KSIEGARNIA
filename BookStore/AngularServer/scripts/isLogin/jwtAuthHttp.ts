import {Component} from 'angular2/core';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Headers} from "angular2/src/http/headers";
import {Response} from "angular2/src/http/static_response";
import {Http} from "angular2/src/http/http";
@Component({
    selector: 'jwtAuthHttp',
    template: `
    <button (click)="getToken()">getToken</button>
    `
})
export class jwtAuthHttp {

    thing:string;

    constructor(public authHttp:AuthHttp, public http:Http) {
    }

    getThing() {
        this.authHttp.get('http://example.com/api/thing')
            .subscribe(
                data => {
                    console.log(data);
                },
                err => console.log('error'),
                () => console.log('Request Complete')
            );
    }

    getToken() {
        let jbook = '{   grant_type: "password",client_id: "44",username: "ktos1",password: "ktos1"}';
        const header = new Headers();
        header.append("Content-Type", "application/json");
        this.http.post("https://ssqsignon.com/apiuamtta/auth", jbook, {
                headers: header
            })
            .map(res => (res as Response).json())
            .subscribe(function (jbook) {
                localStorage.setItem('id_token', jbook['access_token']);
            });
    }


}