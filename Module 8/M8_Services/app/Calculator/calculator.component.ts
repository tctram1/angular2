import { Component } from '@angular/core';

import { CalculatorService } from './calculator.service';

@Component({
    selector: 'calculator-component',
    templateUrl: 'app/Calculator/calculator.component.html'
})
export class CalculatorComponent {

    //Properties
    private _calculatorService: CalculatorService;

    pageMessage: string = "Moving calculations into CalculatorService";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //constructor
    constructor(calculatorService: CalculatorService) {
        this._calculatorService = calculatorService;
    }

    //name: multiplyNumbers()
    multiplyNumbers() {
        console.log("multiplyNumbers() method called!");

        this.result = this._calculatorService.multiplyNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;

        console.log("result = " + this.result);
    }



} //end of class
