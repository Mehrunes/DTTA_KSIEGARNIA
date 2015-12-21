import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS,Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Book}from './model';
@Component({
    selector: 'my-app',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'partials/app.html',

})

export class AppComponent {

    public books:Book[];

    constructor(public http:Http) {

        this.books = this.getData();
    }

    getData():any {
        this.http.get('http://localhost:56618/api/books')
            .map(res=>(<Response>res).json())
            .map((shipments:Array<any>)=> {
                let result:Array<Book> = [];
                if (shipments) {
                    shipments.forEach(shipment=> {
                        result.push(
                            new Book(
                                shipment.id,
                                shipment.title,
                                shipment.author
                            )
                        )
                    })
                }
                return result;
            }).subscribe(
            data=> {
                this.books = data;
                console.log(data);
            },
            err =>console.log(err)
        )
    }
}

