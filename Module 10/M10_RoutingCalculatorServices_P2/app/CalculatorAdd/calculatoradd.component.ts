import { Component } from '@angular/core';

import { CalculatorService } from '../calculator.service';

@Component({
    selector: 'calculatoradd-component',
    moduleId: module.id,
    templateUrl: 'calculatoradd.component.html'

})


export class CalculatorAddComponent {

    //Properties
    private _calculatorService: CalculatorService;

    pageMessage: string = "Add Calculation";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //Constructor
    constructor(calculatorService: CalculatorService) {
        this._calculatorService = calculatorService;
    }

    //name: multiplyNumbers()
    addNumbers() {
        console.log("addNumbers() method called!");

        this.result = this._calculatorService.addNumbers(this.firstNumber, this.secondNumber);
        //this.result = this.firstNumber * this.secondNumber;

        console.log("result = " + this.result);
    }




} //end of class
