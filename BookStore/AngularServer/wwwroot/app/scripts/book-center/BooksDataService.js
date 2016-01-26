var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var book_1 = require("../model/book");
var BooksDataService = (function () {
    function BooksDataService(http) {
        this.http = http;
    }
    BooksDataService.prototype.saveBook = function (book) {
        var _this = this;
        var jbook = "{'Author':'" + book.author + "','Title':'" + book.title + "'}";
        var header = new http_1.Headers();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:58967/api/AddBook", jbook, {
            headers: header
        })
            .map(function (res) { return res.json()[0]; }).map(function (jbook) {
            return new book_1.Book(jbook.id, jbook.title, jbook.author, jbook.genre);
        })
            .subscribe(function (book2) {
            console.log(book2);
            return book2;
        }, function (err) { return _this.logError(err); });
    };
    BooksDataService.prototype.checkBook = function (book) {
        var _this = this;
        var jbook = "{'Check':'" + book.checkK + "'}";
        var header = new http_1.Headers();
        header.append("Content-Type", "application/json");
        this.http.post("http://localhost:58967/api/CheckBook/" + book.id, jbook, {
            headers: header
        })
            .map(function (res) { return res.json()[0]; }).map(function (jbook) {
            return new book_1.Book(jbook.id, jbook.title, jbook.author, jbook.genre);
        })
            .subscribe(function (book2) {
            console.log(book2);
            return book2;
        }, function (err) { return _this.logError(err); });
    };
    BooksDataService.prototype.logError = function (err) {
        console.log("wrong" + err);
    };
    BooksDataService.prototype.getBooks = function () {
        this.Obooks = this.http.get(".http://localhost:58967/api/Books")
            .map(function (res) { return res.json(); })
            .map(function (jbooks) {
            var result = [];
            if (jbooks) {
                jbooks.forEach(function (jbook) {
                    result.push(new book_1.Book(jbook.id, jbook.title, jbook.author, jbook.genre));
                });
            }
            return result;
        });
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
