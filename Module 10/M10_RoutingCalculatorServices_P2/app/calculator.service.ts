import { Injectable } from '@angular/core';

@Injectable(
    //optional
)

export class CalculatorService {

    //name: multiplyNumbers()
    multiplyNumbers(firstNumber: number, secondNumber: number) {
        console.log("CalculatorService multiplyNumbers() method called!");

        var result: number;

        result = firstNumber * secondNumber;

        return result;
    }


    //name: divideNumbers()
    divideNumbers(firstNumber: number, secondNumber: number) {
        console.log("CalculatorService divideNumbers() method called!");

        var result: number;

        result = firstNumber / secondNumber;
        
        return result;
    }


    //name: addNumbers()
    addNumbers(firstNumber: number, secondNumber: number) {
        console.log("addNumbers() method called!");

        var result: number;

        result = firstNumber + secondNumber;
        
        return result;
    }


    //name: subtractNumbers()
    subtractNumbers(firstNumber: number, secondNumber: number) {
        console.log("subtractNumbers() method called!");

        var result: number;

        result = firstNumber - secondNumber;
        
        return result;
    }


}//end of class