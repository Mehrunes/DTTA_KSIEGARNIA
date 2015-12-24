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
var AddBook = (function () {
    //book:Book = new Book();
    function AddBook(_service, _router, book) {
        if (book === void 0) { book = new books_service_1.Book(1, ""); }
        this._service = _service;
        this._router = _router;
        this.book = book;
    }
    AddBook.prototype.ngOnInit = function () {
        //this._service.getBooks().then(users => this.users = users);
    };
    AddBook.prototype.onSubmit = function () {
        this._service.addBook(this.book.name);
        this._router.navigate(['SzukajComponent']);
    };
    AddBook = __decorate([
        core_1.Component({
            providers: [books_service_1.BooksService],
            template: "\n<form (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\" [(ngModel)]=\"book.name\">{{book.name}}\n    <button type=\"submit\" >addd</button>\n</form>\n"
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router, books_service_1.Book])
    ], AddBook);
    return AddBook;
})();
exports.AddBook = AddBook;
