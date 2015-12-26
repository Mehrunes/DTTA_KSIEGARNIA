import {Control} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {FORM_DIRECTIVES} from "angular2/common";
import {Component} from "angular2/core";
@Component({

    selector: 'field-form',
    directives: [FORM_DIRECTIVES],
    template: `<form [ngFormModel]="form">
    id <input type="checkbox" ngControl="id">
    title<input type="checkbox" ngControl="title">

</form>
`
})
export class fieldForm {
    form = new ControlGroup({
        title: new Control(true),
        id: new Control(true)
    });

    get selectedFields() {
        return Object
            .keys(this.form.controls)
            .filter((key)=>this.form.controls[key].value)
    }

    constructor() {
    }
}