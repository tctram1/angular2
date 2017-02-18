import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

    //name: multiplyNumbers
    multiplyNumbers(firstNumber: number, secondNumber: number): number {
        console.log("CalculatorService multiplyNumbers method called!");

        var result: number;

        result = firstNumber * secondNumber;

        return result;
    }


} //end of class