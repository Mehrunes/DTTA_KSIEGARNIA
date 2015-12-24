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
var router_1 = require('angular2/router');
var books_list_component_1 = require('./books-list.component');
var book_detail_component_1 = require('./book-detail.component');
var books_service_1 = require('./books.service');
var addBook_1 = require('./addBook');
var SzukajComponent = (function () {
    function SzukajComponent() {
    }
    SzukajComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Lista Ksiazek</h2>\n   <a [routerLink]=\"['CreateBook']\">Dodaj Ksiazke</a>\n    <router-outlet></router-outlet>\n\n\n  ",
            directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
            providers: [books_service_1.BooksService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'SzukajComponent', component: books_list_component_1.BooksListComponent, useAsDefault: true },
            { path: '/:id', name: 'BookDetail', component: book_detail_component_1.BookDetailComponent },
            { path: '/list/:id', name: 'BookList', component: books_list_component_1.BooksListComponent },
            { path: '/createBook', name: 'CreateBook', component: addBook_1.AddBook },
        ]), 
        __metadata('design:paramtypes', [])
    ], SzukajComponent);
    return SzukajComponent;
})();
exports.SzukajComponent = SzukajComponent;
