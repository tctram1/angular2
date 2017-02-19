import { Component } from '@angular/core';

import { CalculatorService } from '../calculator.service';

@Component({
    selector: 'calculatormultiple-component',
    moduleId: module.id,
    templateUrl: 'calculatormultiple.component.html'

})


export class CalculatorMultipleComponent {

    //Properties
    private _calculatorService: CalculatorService;

    pageMessage: string = "Multiple Calculation";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //Constructor
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
