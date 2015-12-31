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
var genre_1 = require("../../model/genre");
var GenreDataService = (function () {
    function GenreDataService(http) {
        this.http = http;
    }
    GenreDataService.prototype.logError = function (err) {
        console.log("wrong" + err);
    };
    GenreDataService.prototype.getOGenres = function () {
        this.Ogenres = this.http.get("../mock/Genre.json")
            .map(function (res) { return res.json(); })
            .map(function (jbooks) {
            var result = [];
            if (jbooks) {
                jbooks.forEach(function (jbook) {
                    result.push(new genre_1.Genre(jbook.id, jbook.name));
                });
            }
            return result;
        });
        return this.Ogenres;
    };
    GenreDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GenreDataService);
    return GenreDataService;
})();
exports.GenreDataService = GenreDataService;
