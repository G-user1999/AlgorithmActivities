"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.father = void 0;
var father = /** @class */ (function () {
    function father(name, age) {
        this.name = name;
        this.age = age;
    }
    father.prototype.breathe = function () {
        console.log("He breathes");
    };
    father.prototype.eat = function () {
        console.log("He eats");
    };
    father.prototype.walk = function () {
        console.log("He walks");
    };
    return father;
}());
exports.father = father;
console.log(father);
