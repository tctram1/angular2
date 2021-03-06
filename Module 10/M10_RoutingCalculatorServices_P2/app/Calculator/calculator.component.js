"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var calculator_service_1 = require("../calculator.service");
var CalculatorComponent = (function () {
    //Methods
    //Constructor
    function CalculatorComponent(calculatorService) {
        this.pageMessage = "Moving calculations into CalculatorService";
        this.firstNumber = 20;
        this.secondNumber = 10;
        this._calculatorService = calculatorService;
    }
    //name: multiplyNumbers()
    CalculatorComponent.prototype.multiplyNumbers = function () {
        console.log("multiplyNumbers() method called!");
        this.result = this._calculatorService.multiplyNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;
        console.log("result = " + this.result);
    };
    //name: divideNumbers()
    CalculatorComponent.prototype.divideNumbers = function () {
        console.log("divideNumbers() method called!");
        this.result = this._calculatorService.divideNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber / this.secondNumber;
        console.log("result = " + this.result);
    };
    //name: addNumbers()
    CalculatorComponent.prototype.addNumbers = function () {
        console.log("addNumbers() method called!");
        this.result = this._calculatorService.addNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber + this.secondNumber;
        console.log("result = " + this.result);
    };
    //name: subtractNumbers()
    CalculatorComponent.prototype.subtractNumbers = function () {
        console.log("subtractNumbers() method called!");
        this.result = this._calculatorService.subtractNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber - this.secondNumber;
        console.log("result = " + this.result);
    };
    return CalculatorComponent;
}()); //end of class
CalculatorComponent = __decorate([
    core_1.Component({
        selector: 'calculator-component',
        moduleId: module.id,
        templateUrl: 'calculator.component.html'
    }),
    __metadata("design:paramtypes", [calculator_service_1.CalculatorService])
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map