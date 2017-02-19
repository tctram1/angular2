import { Component } from '@angular/core';

import { CalculatorService } from './calculator.service';

@Component({
    selector: 'app-component',
    template: `
    <div>
        <nav class='navbar navabr-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['/multiple']">
                    {{ pageMessage }}
                </a>

                <ul class='nav navbar-nav'>
                    <li>
                        <a [routerLink]="['/multiple']">
                            Multiple
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="['/divide']">
                            Divide
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="['/add']">
                            Add
                        </a>
                    </li>
                    <li>
                        <a [routerLink]="['/substract']">
                            Substract
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class='container'>
            <router-outlet></router-outlet>
        </div>

    </div>
    `,
    providers: [ CalculatorService ]
})
export class AppComponent {
    pageMessage: string = "Exercise M10: Calculator in NavBar";
}
