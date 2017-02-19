import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <ul class='nav navbar-nav'>
                    <a class='navbar-brand'>
                        {{ pageMessage }}
                    </a>

                    <li>
                        <a [routerLink]="['/welcome']">
                            Home
                        </a>
                    </li>

                    <li>
                        <a [routerLink]="['/calculator']">
                            Calculator
                        </a>
                    </li>

                    <li>
                        <a [routerLink]="['/helloworld']">
                            Hello World
                        </a>
                    </li>

                    <li>
                        <a [routerLink]="['/hellogalaxy']">
                            Hello Galaxy
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    pageMessage: string = "Module 10 - P1";
}
