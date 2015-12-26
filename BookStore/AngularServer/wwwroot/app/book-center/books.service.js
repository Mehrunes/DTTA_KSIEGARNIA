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
var core_2 = require("angular2/core");
var BooksDataService_1 = require("./BooksDataService");
var book_1 = require("../model/book");
var BooksService = (function () {
    function BooksService(_service) {
        this._service = _service;
    }
    BooksService.prototype.getBooks = function () {
        return this._service.getBooks();
    };
    BooksService.prototype.getBook = function (id) {
        return BooksDataService_1.BooksDataService.books
            .then(function (crises) { return crises.filter(function (c) { return c.id === +id; })[0]; });
    };
    BooksService.prototype.addBook = function (title, author) {
        title = title.trim();
        author = author.trim();
        if (title) {
            this._service.getBooks().subscribe(function (crises) {
                var book = new book_1.Book(crises.length + 1, title, author);
                crises.push(book);
                console.log("save new Book to Api");
            });
        }
    };
    BooksService.nextCrisisId = 100; //after post new book, set this value
    BooksService = __decorate([
        core_2.Component({
            providers: [BooksDataService_1.BooksDataService]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [BooksDataService_1.BooksDataService])
    ], BooksService);
    return BooksService;
})();
exports.BooksService = BooksService;
