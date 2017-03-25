import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProductInventory } from './product-inventory';
import { ProductInventoryService } from './product-inventory.service';

@Component({
    selector: 'sel-productinventorybycategory',

    templateUrl: 'app/ProductInventory/product-inventory-byCategory.component.html'
})

export class ProductInventoryByCategoryComponent implements OnInit {
    tableTitle: string = 'Product Inventory by Category';
    imageWidth: number = 150;
    imageMargin: number = 10;
    listFilter: string;
    errorMessage: string;
    private sub: Subscription;

    productInventory: IProductInventory[];

    constructor(private _productInventoryService: ProductInventoryService,
                private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        console.log('In OnInit to get CatID for getByCategory');

        this.sub = this._route.params.subscribe(
            params => {
                let CatID = +params['CatID'];
                this.getByCategory(CatID);
            }
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getByCategory(CatID: number) {
        this._productInventoryService.getByCategory(CatID).subscribe(
            byCategory => this.productInventory = byCategory,
            error => this.errorMessage = <any>error
        );
    }




} //end of class