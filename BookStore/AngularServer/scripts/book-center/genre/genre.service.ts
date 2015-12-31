import {GenreDataService} from "./GenreDataService";
import {Injectable} from "angular2/core";
import {Component} from "angular2/core";
@Component({
    providers: [GenreDataService]
})
@Injectable()
export class GenreService {
    constructor(private _service:GenreDataService) {
    }

    getOGenres() {
        return this._service.getOGenres();
    }

}