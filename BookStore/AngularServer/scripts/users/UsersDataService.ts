import {Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS, Response, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";


@Injectable()
export class UsersDataService {

    OUsers:Observable<User[]>;

    constructor(public http:Http) {

    }
    getOUsers() :Observable<User[]>{
        this.OUsers = this.http.get("../mock/Users.json")
            //../mock/Genres.json
            //http://localhost:3000/wwwroot/index.html
            //http://localhost:49989/api/Genres
            //http://localhost:58967/api/Genres
            .map(res => (res as Response).json())
            .map((jusers:Array<any>) => {
                const result:Array<User> = [];
                if (jusers) {
                    jusers.forEach(juser => {
                        result.push(
                            new User(
                                juser.id,
                                juser.name
                            ));
                    });
                }
                return result;
            });
        return this.OUsers;
    }
}


