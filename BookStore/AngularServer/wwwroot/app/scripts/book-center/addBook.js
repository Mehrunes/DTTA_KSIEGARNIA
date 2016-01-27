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
    function AddBook(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    AddBook.prototype.onSubmit = function () {
        this._service.addBook(this.title, this.author);
        this.succes = 'dodano';
        //        this._router.navigate(['SzukajComponent']);
    };
    AddBook = __decorate([
        core_1.Component({
            providers: [books_service_1.BooksService],
            template: "\n<form (ngSubmit)=\"onSubmit()\">\n  Tytu\uFFFD:  <input type=\"text\" [(ngModel)]=\"title\">{{title}}<br>\n    Autor: <input type=\"text\" [(ngModel)]=\"author\">{{author}}\n    <button type=\"submit\" >addd</button>\n</form>\n{{succes}}\n"
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router])
    ], AddBook);
    return AddBook;
})();
exports.AddBook = AddBook;
