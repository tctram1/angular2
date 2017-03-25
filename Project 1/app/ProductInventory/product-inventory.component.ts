import { Component, OnInit } from '@angular/core';

import { IProductInventory } from './product-inventory';
import { ProductInventoryService } from './product-inventory.service';

@Component({
    selector: 'sel-productinventory',

    templateUrl: 'app/ProductInventory/product-inventory.component.html'
})

export class ProductInventoryComponent implements OnInit {
    tableTitle: string = 'Product Inventory';
    imageWidth: number = 150;
    imageMargin: number = 10;
    listFilter: string;
    errorMessage: string;

    productInventory: IProductInventory[];

    constructor(private _productInventoryService: ProductInventoryService) {}

    ngOnInit(): void {
        console.log('In OnInit');
        this._productInventoryService.getInventory()
                .subscribe(
                    productInventory => this.productInventory = productInventory,
                    error => this.errorMessage = <any>error);
    }




} //end of class