import {Pipe} from "angular2/core";
@Pipe({
    name: 'simpleSearch',
    pure: false
})
export class SimpleSearch {
    transform(value, [fields,letter]:[string[],string]) {
        //http://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
        if (value != undefined && letter != undefined) {

            return value.filter((book)=>fields.some(function (field) {
                return book[field].toString().includes(letter);

            }));
        }
        else
            return value;
    }
}