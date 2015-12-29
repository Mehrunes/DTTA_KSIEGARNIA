import {Component,View}from 'angular2/core';

import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {Rating} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    templateUrl: 'partials/rating-demo.html',
    selector: 'rating-demo',
    directives: [Rating, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class RatingDemo {
    public x:number = 5;
    private y:number = 2;
    private max:number = 9;
    private rate:number = 7;
    private isReadonly:boolean = false;

    private overStar:number;
    public percent:number;


    private hoveringOver(value:number) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);

    };

    wyslijGwiazdki(cos) {

        console.log('wyślij do Api ocenę' + cos.target.title);
    }

    private resetStar() {
        this.overStar = null;
    }

}
