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
var Book = (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    return Book;
})();
exports.Book = Book;
var BooksDataService = (function () {
    function BooksDataService(http) {
        this.http = http;
        this.Obooks = this.http.get('http://localhost:49989/api/Books')
            .map(function (res) { return res.json(); })
            .map(function (jbooks) {
            var result = [];
            if (jbooks) {
                jbooks.forEach(function (jbook) {
                    result.push(new Book(jbook.id, jbook.title, jbook.author));
                });
            }
            return result;
        });
    }
    BooksDataService.prototype.getBooks = function () {
        this.Obooks.subscribe(function (books) {
            //let book = new Book(books.length + 1, "sads", "asasd");
            //books.push(book);
            this.books = books;
        });
        return this.Obooks;
    };
    BooksDataService.prototype.pushBooks = function () {
    };
    BooksDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BooksDataService);
    return BooksDataService;
})();
exports.BooksDataService = BooksDataService;
