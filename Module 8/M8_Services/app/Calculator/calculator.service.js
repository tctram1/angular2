"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CalculatorService = (function () {
    function CalculatorService() {
    }
    //name: multiplyNumbers
    CalculatorService.prototype.multiplyNumbers = function (firstNumber, secondNumber) {
        console.log("CalculatorService multiplyNumbers method called!");
        var result;
        result = firstNumber * secondNumber;
        return result;
    };
    return CalculatorService;
}()); //end of class
CalculatorService = __decorate([
    core_1.Injectable()
], CalculatorService);
exports.CalculatorService = CalculatorService;
//# sourceMappingURL=calculator.service.js.map