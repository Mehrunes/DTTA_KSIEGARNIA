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
var books_service_1 = require('./../books.service');
var borrow_list_component_1 = require("./borrow-list.component");
var borow_detail_component_1 = require("./borow-detail.component");
var BooksDataService_1 = require("../BooksDataService");
var BorrowComponent = (function () {
    function BorrowComponent() {
    }
    BorrowComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Lista Ksiazek</h2>\n\n    <router-outlet></router-outlet>\n\n\n  ",
            directives: [router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
            providers: [books_service_1.BooksService, BooksDataService_1.BooksDataService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'BorrowComponent', component: borrow_list_component_1.BorrowListComponent, useAsDefault: true },
            { path: '/:id', name: 'BorrowDetail', component: borow_detail_component_1.BorrowDetailComponent },
            { path: '/list/:id', name: 'BorrowList', component: borrow_list_component_1.BorrowListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], BorrowComponent);
    return BorrowComponent;
})();
exports.BorrowComponent = BorrowComponent;
