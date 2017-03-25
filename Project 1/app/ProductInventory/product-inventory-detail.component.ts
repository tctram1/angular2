import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IProductInventory } from './product-inventory';
import { ProductInventoryService } from './product-inventory.service';

@Component({
    selector: 'sel-productinventorydetail',

    templateUrl: 'app/ProductInventory/product-inventory-detail.component.html'
})

export class ProductInventoryDetailComponent implements OnInit {
    tableTitle: string = 'Product Inventory Detail';
    imageWidth: number = 300;
    imageMargin: number = 25;
    errorMessage: string;
    private sub: Subscription;

    productInventory: IProductInventory[];


    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductInventoryService) {
    }


    ngOnInit(): void {
        console.log('In OnInit to get SKU for getInventoryDetail');
        this.sub = this._route.params.subscribe(
            params => {
                let SKU = +params['SKU'];
                this.getInventoryDetail(SKU);
            }
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getInventoryDetail(SKU: number) {
        this._productService.getInventoryDetail(SKU).subscribe(
            detail => this.productInventory = detail,
            error => this.errorMessage = <any>error
        );
    }


    onBack(): void {
        this._router.navigate(['/products']);
    }

} //end of class