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
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var Zippy = (function () {
    function Zippy() {
        this.visible = true;
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    Zippy.prototype.toggle = function () {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit("dupa");
        }
        else {
            this.close.emit(null);
        }
    };
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Zippy.prototype, "open", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Zippy.prototype, "close", void 0);
    Zippy = __decorate([
        core_3.Component({
            selector: 'zippy',
            template: "\n  <div class=\"zippy\">\n    <div (click)=\"toggle()\">Toggle</div>\n    <div [hidden]=\"!visible\">\n      <ng-content></ng-content>\n    </div>\n\n </div>" }), 
        __metadata('design:paramtypes', [])
    ], Zippy);
    return Zippy;
})();
exports.Zippy = Zippy;
