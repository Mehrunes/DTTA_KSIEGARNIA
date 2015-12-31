import {Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Genre} from "../../model/genre";

@Injectable()
export class GenreDataService {

    Ogenres:Observable<Genre[]>;

    constructor(public http:Http) {

    }

    private logError(err):any {
        console.log(`wrong${err}`);
    }

    getOGenres() {
        this.Ogenres = this.http.get("../mock/Genre.json")
            //../mock/Genres.json
            //http://localhost:3000/wwwroot/index.html
            //http://localhost:49989/api/Genres
            //http://localhost:58967/api/Genres
            .map(res => (res as Response).json())
            .map((jbooks:Array<any>) => {
                const result:Array<Genre> = [];
                if (jbooks) {
                    jbooks.forEach(jbook => {
                        result.push(
                            new Genre(
                                jbook.id,
                                jbook.name
                            ));
                    });
                }
                return result;
            });
        return this.Ogenres;
    }
}


