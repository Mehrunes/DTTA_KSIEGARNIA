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
var books_service_1 = require('./../books.service');
var router_1 = require('angular2/router');
var BorrowListComponent = (function () {
    function BorrowListComponent(_service, _router, routeParams) {
        this._service = _service;
        this._router = _router;
        this._selectedId = +routeParams.get('id');
    }
    BorrowListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getBooks().subscribe(function (books) { return _this.books = books; });
    };
    BorrowListComponent.prototype.isSelected = function (book) {
        return book.id === this._selectedId;
    };
    BorrowListComponent.prototype.onSelect = function (book) {
        this._router.navigate(['BorrowDetail', { id: book.id }]);
    };
    BorrowListComponent = __decorate([
        core_1.Component({
            template: "\n    <ul>\n      <li *ngFor=\"#book of books\"\n        [class.selected]=\"isSelected(book)\"\n        (click)=\"onSelect(book)\"\n        [hidden]=\"book.check\">\n\n        <span class=\"badge\">{{book.id}}</span> {{book.title}}  {{book.author}}\n      </li>\n    </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [books_service_1.BooksService, router_1.Router, router_1.RouteParams])
    ], BorrowListComponent);
    return BorrowListComponent;
})();
exports.BorrowListComponent = BorrowListComponent;
