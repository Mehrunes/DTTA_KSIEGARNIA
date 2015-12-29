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
var common_1 = require('angular2/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var RatingDemo = (function () {
    function RatingDemo() {
        this.x = 5;
        this.y = 2;
        this.max = 9;
        this.rate = 7;
        this.isReadonly = false;
    }
    RatingDemo.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    RatingDemo.prototype.wyslijGwiazdki = function (cos) {
        console.log('wyślij do Api ocenę' + cos.target.title);
    };
    RatingDemo.prototype.resetStar = function () {
        this.overStar = null;
    };
    RatingDemo = __decorate([
        core_1.Component({
            templateUrl: 'partials/rating-demo.html',
            selector: 'rating-demo',
            directives: [ng2_bootstrap_1.Rating, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingDemo);
    return RatingDemo;
})();
exports.RatingDemo = RatingDemo;
