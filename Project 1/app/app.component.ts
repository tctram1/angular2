import { Component } from '@angular/core';

import { ProductCategoryService } from './ProductCategory/product-category.service';
import { ProductInventoryService } from './ProductInventory/product-inventory.service';

@Component({
    selector: 'pm-app',
    template: `
        <div class='container'>

            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{ pageTitle }}</a>
                    <ul class='nav navbar-nav'>
                        <li>
                            <a [routerLink]="['/home']">
                                Home
                            </a>
                        </li>
                        <li>
                            <a [routerLink]="['/category']">
                                Category List
                            </a>
                        </li>
                        <li>
                            <a [routerLink]="['/products']">
                                Inventory List
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div>
                <router-outlet></router-outlet>
            <div>

        </div>
    `,

    providers: [ 
        ProductCategoryService,
        ProductInventoryService
    ]
})

export class AppComponent {
    pageTitle: string = 'Tuyen Tram - Project 1';

    pageSubtitle: string = 'Moving CIS 340 Project 3 to Angular 2';
 }
