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
var http_1 = require('angular2/http');
var book_1 = require("../model/book");
var BooksDataService = (function () {
    function BooksDataService(http) {
        this.http = http;
        this.Obooks = this.http.get('../mock/Books.json')
            .map(function (res) { return res.json(); })
            .map(function (jbooks) {
            var result = [];
            if (jbooks) {
                jbooks.forEach(function (jbook) {
                    result.push(new book_1.Book(jbook.id, jbook.title, jbook.author));
                });
            }
            return result;
        });
    }
    BooksDataService.prototype.addBook = function (book) {
    };
    BooksDataService.prototype.getBooks = function () {
        this.Obooks.subscribe(function (books) {
            BooksDataService.books = Promise.resolve(books);
        });
        return this.Obooks;
    };
    BooksDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BooksDataService);
    return BooksDataService;
})();
exports.BooksDataService = BooksDataService;
