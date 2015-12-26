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
var SimpleSearch = (function () {
    function SimpleSearch() {
    }
    SimpleSearch.prototype.transform = function (value, _a) {
        var fields = _a[0], letter = _a[1];
        //http://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
        if (value != undefined && letter != undefined) {
            return value.filter(function (book) { return fields.some(function (field) {
                return book[field].toString().includes(letter);
            }); });
        }
        else
            return value;
    };
    SimpleSearch = __decorate([
        core_1.Pipe({
            name: 'simpleSearch',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleSearch);
    return SimpleSearch;
})();
exports.SimpleSearch = SimpleSearch;
