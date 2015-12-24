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
var Book = (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    return Book;
})();
exports.Book = Book;
var BooksService = (function () {
    function BooksService() {
    }
    BooksService.prototype.getBooks = function () {
        return crisesPromise;
    };
    BooksService.prototype.getBook = function (id) {
        return crisesPromise
            .then(function (crises) { return crises.filter(function (c) { return c.id === +id; })[0]; });
    };
    BooksService.prototype.addBook = function (title, author) {
        title = title.trim();
        author = author.trim();
        if (title) {
            crisesPromise.then(function (crises) {
                var book = new Book(crises.length + 1, title, author);
                crises.push(book);
            });
        }
    };
    BooksService.nextCrisisId = 100; //after post new book, set this value
    BooksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BooksService);
    return BooksService;
})();
exports.BooksService = BooksService;
var books = [
    new Book(1, 'Princess Held Captive', ""),
    new Book(2, 'Dragon Burning Cities', ""),
    new Book(3, 'Giant Asteroid Heading, For Earth', ""),
    new Book(4, 'Release Deadline Looms', "")
];
var crisesPromise = Promise.resolve(books);
