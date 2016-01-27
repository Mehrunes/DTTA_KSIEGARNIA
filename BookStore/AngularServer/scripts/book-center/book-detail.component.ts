import {Component, OnInit} from 'angular2/core';
import { BooksService} from './books.service';
import {RouteParams} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {BooksDataService} from "./BooksDataService";
import {Book} from "../model/book";
import {GenreService} from "./genre/genre.service";
import {GenreDataService} from "./genre/GenreDataService";
import {Genre} from "../model/genre";
import {UsersDataService} from "../users/UsersDataService";
import {UserService} from "../users/user.service";
import {User} from "../model/user";
import {Router} from "angular2/src/router/router";


@Component({
    template: `
  <div *ngIf="book">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{book.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    gatunek:
     <select [(ngModel)]="book.genre">
        <option *ngFor="#genre of genres">
            {{genre.name}}
        </option>

    </select>

    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
    <br><br><br>

liczba dostępnych 4/4 <br>
usun ksiazke
    wybierz urzytkownika który zwraca ksiazkę <br>

    <select [(ngModel)]="whoGiveBookBack">
        <option *ngFor="#user of users">
            {{user.name}}
        </option>

    </select>

    <button (click)="giveBookBack()">{{whoGiveBookBack}} zwraca ksiazke</button>
  </div>
  `,
    styles: ['input {width: 20em}'],
    providers: [GenreService, GenreDataService, UserService, UsersDataService,BooksDataService]
})
export class BookDetailComponent implements OnInit {

    private whoGiveBookBack:User;
    public book:Book;
    public editName:string;
    public genres:Genre[];
    private users:User[];

    constructor(private _service:BooksService,
                private _router:Router,
                private _routeParams:RouteParams,
                private _serviceGenreService:GenreService,
                private _usersFromApiService:UserService,
                private _bookDataService:BooksDataService
    ) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._serviceGenreService.getOGenres().subscribe(genres =>this.genres = genres);
        this._usersFromApiService.getOUsers().subscribe(users=>this.users = users);
        this._service.getBook(id).then(book => {
            if (book) {
                this.editName = book.title;
                this.book = book;
            } else { // id not found
                this.gotoBooks();
            }
        });

    }

    giveBookBack() {

        this.book.check=false;
        this._bookDataService.checkBook(this.book);
        alert("oddano");
        //this._router.navigate(['Borrow']);
        location.reload();
    }

    cancel() {
        this.editName = this.book.title; // TODO: sprawdzic czy gatunek sie zapisuje czy nie po kliknieciu na cancel
        this.gotoBooks();
    }

    save() {
        this.book.title = this.editName;
        console.log(this.book.genre);
        console.log('Save to API edited Book'); // TODO:Save to API edited Book
        this.gotoBooks();
    }

    gotoBooks() {
        let route =
            ['BookList', {id: this.book ? this.book.id : null}];

        this._router.navigate(route);
    }
}
