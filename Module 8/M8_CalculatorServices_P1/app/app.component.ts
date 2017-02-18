import { Component } from '@angular/core';

import { CalculatorService } from './Calculator/calculator.service';

@Component({
    selector: 'app-component',
    template: `
    <div>
        <h2>{{pageMessage}}</h2>
        <calculator-component></calculator-component>
    </div>
    `,
    providers: [ CalculatorService ]
})
export class AppComponent {
    pageMessage: string = "Exercise M8: CalculatorService";
}
