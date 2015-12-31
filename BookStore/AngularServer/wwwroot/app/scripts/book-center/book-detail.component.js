var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var books_service_1 = require('./books.service');
var router_1 = require('angular2/router');
var genre_service_1 = require("./genre/genre.service");
var GenreDataService_1 = require("./genre/GenreDataService");
var BookDetailComponent = (function () {
    function BookDetailComponent(_service, _router, _routeParams, _serviceGenreService) {
        this._service = _service;
        this._router = _router;
        this._routeParams = _routeParams;
        this._serviceGenreService = _serviceGenreService;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._serviceGenreService.getOGenres().subscribe(function (genres) { return _this.genres = genres; });
        this._service.getBook(id).then(function (book) {
            if (book) {
                _this.editName = book.title;
                _this.book = book;
            }
            else {
                _this.gotoBooks();
            }
        });
    };
    BookDetailComponent.prototype.cancel = function () {
        this.editName = this.book.title; // TODO: sprawdzic czy gatunek sie zapisuje czy nie po kliknieciu na cancel
        this.gotoBooks();
    };
    BookDetailComponent.prototype.save = function () {
        this.book.title = this.editName;
        console.log(this.book.genre);
        console.log('Save to API edited Book'); // TODO:Save to API edited Book
        this.gotoBooks();
    };
    BookDetailComponent.prototype.gotoBooks = function () {
        var route = ['BookList', { id: this.book ? this.book.id : null }];
        this._router.navigate(route);
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div *ngIf=\"book\">\n    <h3>\"{{editName}}\"</h3>\n    <div>\n      <label>Id: </label>{{book.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"editName\" placeholder=\"name\"/>\n    </div>\n    gatunek:\n     <select [(ngModel)]=\"book.genre\">\n        <option *ngFor=\"#genre of genres\">\n            {{genre.name}}\n        </option>\n\n    </select>\n\n    <button (click)=\"save()\">Save</button>\n    <button (click)=\"cancel()\">Cancel</button>\n    <br><br><br>\n\nliczba dost\u0119pnych 4/4 <br>\nusun ksiazke\n    wybierz urzytkownika kt\u00F3ry zwraca ksiazk\u0119 <br>\n\n    <button>zwroc ksiazke</button>\n  </div>\n  ",
            styles: ['input {width: 20em}'],
            providers: [genre_service_1.GenreService, GenreDataService_1.GenreDataService]
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router, router_1.RouteParams, genre_service_1.GenreService])
    ], BookDetailComponent);
    return BookDetailComponent;
})();
exports.BookDetailComponent = BookDetailComponent;
