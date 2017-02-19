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
var CalculatorDivideComponent = (function () {
    //Methods
    //Constructor
    function CalculatorDivideComponent(calculatorService) {
        this.pageMessage = "Divide Calculation";
        this.firstNumber = 20;
        this.secondNumber = 10;
        this._calculatorService = calculatorService;
    }
    //name: multiplyNumbers()
    CalculatorDivideComponent.prototype.divideNumbers = function () {
        console.log("divideyNumbers() method called!");
        this.result = this._calculatorService.divideNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;
        console.log("result = " + this.result);
    };
    return CalculatorDivideComponent;
}()); //end of class
CalculatorDivideComponent = __decorate([
    core_1.Component({
        selector: 'calculatordivide-component',
        moduleId: module.id,
        templateUrl: 'calculatordivide.component.html'
    }),
    __metadata("design:paramtypes", [calculator_service_1.CalculatorService])
], CalculatorDivideComponent);
exports.CalculatorDivideComponent = CalculatorDivideComponent;
//# sourceMappingURL=calculatordivide.component.js.map