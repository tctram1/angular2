import { Component } from '@angular/core';

import { CalculatorService } from '../calculator.service';

@Component({
    selector: 'calculatorsubstract-component',
    moduleId: module.id,
    templateUrl: 'calculatorsubstract.component.html'

})


export class CalculatorSubstractComponent {

    //Properties
    private _calculatorService: CalculatorService;

    pageMessage: string = "Substract Calculation";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //Constructor
    constructor(calculatorService: CalculatorService) {
        this._calculatorService = calculatorService;
    }

    //name: multiplyNumbers()
    substractNumbers() {
        console.log("substractNumbers() method called!");

        this.result = this._calculatorService.subtractNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;

        console.log("result = " + this.result);
    }




} //end of class
