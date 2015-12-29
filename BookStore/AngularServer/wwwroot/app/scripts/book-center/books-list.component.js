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
var simple_search_pipe_1 = require("../book-center/search/simple-search.pipe");
var fieldForm_1 = require("./search/fieldForm");
var BooksListComponent = (function () {
    function BooksListComponent(_service, _router, routeParams) {
        this._service = _service;
        this._router = _router;
        this._selectedId = +routeParams.get('id');
    }
    BooksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getBooks().subscribe(function (books) { return _this.books = books; });
    };
    BooksListComponent.prototype.isSelected = function (book) {
        return book.id === this._selectedId;
    };
    BooksListComponent.prototype.onSelect = function (book) {
        this._router.navigate(['BookDetail', { id: book.id }]);
    };
    BooksListComponent = __decorate([
        core_1.Component({
            template: "\n     Szukaj <input type=\"text\" [(ngModel)]=\"term\"> <field-form #fieldForm></field-form>\n    <ul>\n      <li *ngFor=\"#book of books|simpleSearch:fieldForm.selectedFields:term\"\n        [class.selected]=\"isSelected(book)\"\n        (click)=\"onSelect(book)\">\n          <span class=\"badge\">{{book.id}}</span> {{book.title}} {{book.author}}\n      </li>\n    </ul>\n  ",
            pipes: [simple_search_pipe_1.SimpleSearch],
            directives: [fieldForm_1.fieldForm]
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router, router_1.RouteParams])
    ], BooksListComponent);
    return BooksListComponent;
})();
exports.BooksListComponent = BooksListComponent;
