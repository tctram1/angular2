import { Component } from '@angular/core';

import { CalculatorService } from '../calculator.service';

@Component({
    selector: 'calculatordivide-component',
    moduleId: module.id,
    templateUrl: 'calculatordivide.component.html'

})


export class CalculatorDivideComponent {

    //Properties
    private _calculatorService: CalculatorService;

    pageMessage: string = "Divide Calculation";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //Constructor
    constructor(calculatorService: CalculatorService) {
        this._calculatorService = calculatorService;
    }

    //name: multiplyNumbers()
    divideNumbers() {
        console.log("divideyNumbers() method called!");

        this.result = this._calculatorService.divideNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;

        console.log("result = " + this.result);
    }




} //end of class
